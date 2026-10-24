---
type: client
tags: [beauty, skincare, ecommerce, tiktok-shop, roadmap]
created: 2026-09-01
updated: 2026-09-01
---

# Teresa S.r.l. — Piano operativo e roadmap

Vedi [[overview]] per contratto e inquadramento generale.

## Roadmap 90 giorni (dal primo contenuto pubblicato)

- **Settimana 1 — Setup tecnico**: apertura Shopify, dominio, verifica Danea
  (possibile collo di bottiglia se serve connettore esterno), raccolta
  materiale/produzione fotografica per i 50 articoli
- **Settimana 2 — Catalogo e TikTok Shop**: caricamento 50 articoli, richiesta
  attivazione TikTok Shop, verifica certificazioni
- **Settimana 3 — Pre-lancio hype**: contenuti di attesa, primo shooting
- **Settimana 4 — Lancio**: apertura ufficiale, primo contenuto vendita, partenza
  countdown 90 giorni
- **Mesi 2-3 — Regime e crescita**: caricamento progressivo fino a 300 articoli,
  piano editoriale a regime (12 contenuti/mese), report mensile, shooting 2 e 3

**Gestione rischio Danea**: se serve upgrade Danea o connettore esterno, può
slittare oltre la settimana 1 senza bloccare lancio/contenuti; nel frattempo si
gestiscono gli ordini manualmente.

## Onboarding

Modulo Google Form generico preparato da Gabriel (copre brand, prodotto,
comunicazione, e-commerce, marketing, competitor, accessi, obiettivi), esportato in
PDF. **Non copre**: versione Danea esatta, certificazioni TikTok Shop beauty,
logistica shooting — da raccogliere con checklist dedicata Teresa.

## Sviluppo tema Shopify (task Claude Code)

- Ispirazione ecommerce beauty/luxury: rhodeskin.com
- Mega menu con preview prodotti già presente su voce "SHOP" della navbar →
  replicato sulle altre voci navbar
- Nuova pagina "Il Negozio" (storia del concept store + posizione Google Maps),
  ricreata perché esisteva nella versione precedente del sito

## Todo pre go-live

1. Pagamenti: guidare Chiara e Andrea ad attivare Stripe e PayPal in Settings →
   Payments (credenziali bancarie/fiscali le inseriscono loro)
2. Pagine legali in Settings → Policies: Contact information (urgente), Return and
   refund policy, Terms of service, Shipping policy, Legal notice (Privacy policy
   già a posto, automatica)
3. Checkout in italiano: verificare in Settings → Languages
4. Ordine di test: spedizione 7,99€ / gratuita sopra 79,99€, mail di conferma,
   comparsa ordine in Admin
5. Aggiungere Chiara e Andrea come utenti staff in Settings → Users

## Todo dopo go-live

1. Email transazionali personalizzate (mittente generico `store+...@shopifyemail.com`
   invece di `info@teresachiuduno.it`, non bloccante) — verificare se il dominio è
   gestito da Shopify (Settings → Domains) o registrar esterno (record DNS)
2. **Problema tecnico aperto**: nessuno SKU assegnato ai prodotti Shopify, blocca la
   sync col connettore Danea EasyFatt (serve match esatto "codice articolo" ↔ SKU).
   Serve export Excel articoli da Teresa, inserire i codici come SKU su ogni
   prodotto/variante, lanciare sync giacenze
3. Metafield INCI: creare campo dedicato per l'INCI di tutti i prodotti skincare,
   collegato alla pagina prodotto via Claude Code, per strutturare i dati in vista
   di TikTok Shop
4. INCI mancanti da completare dalla confezione fisica: CP-1 shampoo, Beausta Pink
   Tone-Up, alcuni Australian Gold
5. Sostituire foto stock con foto reali dei prodotti in negozio
6. Collegare prodotti correlati della stessa linea (shampoo+balsamo+leave-in Rated
   Green, Hemp Nation gel doccia+scrub, spray Instant Bronzer SPF15/30/50)
7. TikTok Shop: attivazione canale, certificazioni cosmetica beauty, caricamento
   catalogo

## Regole catalogo prodotti

- Titolo italiano: Brand + nome descrittivo italiano + caratteristica chiave +
  formato (mai "PA++++" nei titoli)
- INCI sempre fornito anche se indicativo, etichettato semplicemente "INCI" senza
  note di verifica
- Nessuna claim terapeutica nelle descrizioni (conformità regolamento cosmetico UE)
- Duplicazione prodotto in Admin è il metodo corretto per prodotti a struttura
  simile con varianti

## Flag compliance cosmetica UE da monitorare

- Enough Collagen 3 in 1 Sun Cream: possibile filtro UV vietato da maggio 2026
- Australian Gold Face + Self Tanner: contiene Homosalate, soggetto a nuovi limiti
  di concentrazione UE per prodotti viso da luglio 2025

Questi pattern sono già formalizzati in
[[../../concepts/settori/beauty-skincare-ecommerce]], da arricchire quando
arriveranno altri clienti beauty.

## Fonti

`raw/agency/2026-09-01-storico-progetto-veloce-claude.md` (sezioni 3.1 e 6.1)
