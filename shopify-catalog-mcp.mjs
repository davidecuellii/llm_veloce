#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const SHOP = 'teresachiuduno';
const CLIENT_ID = 'cff01a185b73a8db772cc57a825610fd';
const KEYCHAIN_SERVICE = 'codex-shopify-catalog-teresa';
let token;
let tokenExpiresAt = 0;

function clientSecret() {
  const result = spawnSync('security', [
    'find-generic-password', '-a', 'codex', '-s', KEYCHAIN_SERVICE, '-w',
  ], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error('Credenziali Shopify non disponibili nel portachiavi.');
  return result.stdout.trim();
}

async function accessToken() {
  if (token && Date.now() < tokenExpiresAt - 60_000) return token;
  const response = await fetch(`https://${SHOP}.myshopify.com/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials', client_id: CLIENT_ID, client_secret: clientSecret(),
    }),
  });
  if (!response.ok) throw new Error(`Autenticazione Shopify non riuscita (${response.status}).`);
  const payload = await response.json();
  token = payload.access_token;
  tokenExpiresAt = Date.now() + payload.expires_in * 1000;
  return token;
}

async function graphql(query, variables = {}) {
  const response = await fetch(`https://${SHOP}.myshopify.com/admin/api/2026-07/graphql.json`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-shopify-access-token': await accessToken() },
    body: JSON.stringify({ query, variables }),
  });
  const payload = await response.json();
  if (!response.ok || payload.errors?.length) throw new Error(JSON.stringify(payload.errors || payload));
  return payload.data;
}

async function uploadProductImage(filePath) {
  const filename = basename(filePath);
  const mimeType = filename.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
  const staged = await graphql(`mutation($input:[StagedUploadInput!]!){stagedUploadsCreate(input:$input){stagedTargets{url resourceUrl parameters{name value}} userErrors{field message}}}`, {
    input: [{ filename, mimeType, resource: 'PRODUCT_IMAGE', httpMethod: 'POST' }],
  });
  const target = staged.stagedUploadsCreate.stagedTargets?.[0];
  const errors = staged.stagedUploadsCreate.userErrors;
  if (!target || errors?.length) throw new Error(JSON.stringify(errors || 'Caricamento immagine non disponibile.'));
  const form = new FormData();
  for (const parameter of target.parameters) form.append(parameter.name, parameter.value);
  form.append('file', new Blob([readFileSync(filePath)], { type: mimeType }), filename);
  const response = await fetch(target.url, { method: 'POST', body: form });
  if (!response.ok) throw new Error(`Caricamento immagine non riuscito (${response.status}).`);
  return target.resourceUrl;
}

const tools = [
  { name: 'search_products', description: 'Cerca prodotti Shopify per titolo, SKU, tag o stato.', inputSchema: { type: 'object', properties: { query: { type: 'string' }, first: { type: 'integer', minimum: 1, maximum: 50 } }, required: ['query'] } },
  { name: 'get_product', description: 'Legge dettagli, varianti e immagini di un prodotto Shopify.', inputSchema: { type: 'object', properties: { id: { type: 'string', description: 'ID globale Shopify o ID numerico del prodotto' } }, required: ['id'] } },
  { name: 'update_product', description: 'Aggiorna titolo, descrizione HTML, stato, tag o immagini di un prodotto esistente.', inputSchema: { type: 'object', properties: { id: { type: 'string' }, title: { type: 'string' }, descriptionHtml: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'DRAFT', 'ARCHIVED'] }, tags: { type: 'array', items: { type: 'string' } }, imageUrls: { type: 'array', items: { type: 'string' } }, imagePath: { type: 'string', description: 'Percorso locale di un’immagine da caricare su Shopify' } }, required: ['id'] } },
  { name: 'attach_variant_images', description: 'Carica immagini locali e le associa alle varianti SKU corrette di un prodotto.', inputSchema: { type: 'object', properties: { productId: { type: 'string' }, images: { type: 'array', items: { type: 'object', properties: { variantId: { type: 'string' }, imagePath: { type: 'string' } }, required: ['variantId', 'imagePath'] } } }, required: ['productId', 'images'] } },
  { name: 'create_product', description: 'Crea un prodotto Shopify in bozza o attivo.', inputSchema: { type: 'object', properties: { title: { type: 'string' }, descriptionHtml: { type: 'string' }, status: { type: 'string', enum: ['ACTIVE', 'DRAFT'] }, tags: { type: 'array', items: { type: 'string' } } }, required: ['title'] } },
  { name: 'graphql_product_catalog', description: 'Esegue una query o mutation GraphQL dell’Admin API, limitata dai permessi prodotti dell’app. Usala per varianti, SKU, prezzi, collezioni e casi non coperti dagli altri strumenti.', inputSchema: { type: 'object', properties: { query: { type: 'string' }, variables: { type: 'object' } }, required: ['query'] } },
];

function productId(id) { return id.startsWith('gid://') ? id : `gid://shopify/Product/${id}`; }
function reply(id, result) { process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id, result })}\n`); }
function fail(id, error) { process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32000, message: error.message } })}\n`); }

async function call(name, args) {
  if (name === 'graphql_product_catalog') return graphql(args.query, args.variables || {});
  if (name === 'search_products') return graphql(`query($query:String!,$first:Int!){products(query:$query,first:$first){nodes{id title status handle totalInventory variants(first:50){nodes{id title sku price}}}}}`, { query: args.query, first: args.first || 20 });
  if (name === 'get_product') return graphql(`query($id:ID!){product(id:$id){id title handle descriptionHtml status tags vendor productType variants(first:100){nodes{id title sku price inventoryQuantity}} media(first:50){nodes{preview{image{url altText}}}}}}`, { id: productId(args.id) });
  if (name === 'create_product') return graphql(`mutation($product:ProductCreateInput!){productCreate(product:$product){product{id title status handle} userErrors{field message}}}`, { product: { title: args.title, descriptionHtml: args.descriptionHtml, status: args.status || 'DRAFT', tags: args.tags } });
  if (name === 'update_product') {
    const input = { id: productId(args.id) };
    for (const key of ['title', 'descriptionHtml', 'status', 'tags']) if (args[key] !== undefined) input[key] = args[key];
    const sources = [...(args.imageUrls || [])];
    if (args.imagePath) sources.push(await uploadProductImage(args.imagePath));
    const media = sources.length ? sources.map(originalSource => ({ originalSource, mediaContentType: 'IMAGE' })) : undefined;
    return graphql(`mutation($product:ProductUpdateInput!,$media:[CreateMediaInput!]){productUpdate(product:$product,media:$media){product{id title status handle} userErrors{field message}}}`, { product: input, media });
  }
  if (name === 'attach_variant_images') {
    const uploaded = [];
    for (const image of args.images) uploaded.push({ variantId: image.variantId, source: await uploadProductImage(image.imagePath) });
    const variants = uploaded.map(({ variantId, source }) => ({ id: variantId, mediaSrc: [source] }));
    const media = uploaded.map(({ source }) => ({ originalSource: source, mediaContentType: 'IMAGE' }));
    return graphql(`mutation($productId:ID!,$variants:[ProductVariantsBulkInput!]!,$media:[CreateMediaInput!]){productVariantsBulkUpdate(productId:$productId,variants:$variants,media:$media){productVariants{id sku media(first:1){nodes{id preview{image{url}}}}} userErrors{field message}}}`, { productId: productId(args.productId), variants, media });
  }
  throw new Error(`Strumento non supportato: ${name}`);
}

let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', async chunk => {
  buffer += chunk;
  const lines = buffer.split('\n'); buffer = lines.pop();
  for (const line of lines) {
    if (!line.trim()) continue;
    let message;
    try {
      message = JSON.parse(line);
      if (message.method === 'initialize') reply(message.id, { protocolVersion: '2025-03-26', capabilities: { tools: {} }, serverInfo: { name: 'shopify-catalog', version: '1.0.0' } });
      else if (message.method === 'tools/list') reply(message.id, { tools });
      else if (message.method === 'tools/call') { const data = await call(message.params.name, message.params.arguments || {}); reply(message.id, { content: [{ type: 'text', text: JSON.stringify(data) }] }); }
    } catch (error) { if (typeof message?.id !== 'undefined') fail(message.id, error); }
  }
});
