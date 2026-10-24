---
type: raw
source: estrazione diretta (API SocialGPT su profili pubblici + Shopify Admin API)
extracted: 2026-09-22
---

# Estrazione 22/09/2026 — performance social settembre e stato catalogo

Dati grezzi. Non modificare. Analisi in [[../../../output/report-cliente-funnel-teresa-settembre]].

## Instagram @teresachiuduno — ultimi 30 contenuti (5-22 settembre)

Totale 231.770 view · media 7.726 · mediana 6.879 · minimo 1.309 · massimo 15.951

| Categoria | Post | Media | Totale view |
|---|---|---|---|
| Moda (capi) | 18 | 8.075 | 145.352 |
| Skincare | 2 | 11.936 | 23.872 |
| Negozio/vita in store | 2 | 11.415 | 22.830 |
| Gioielli | 3 | 4.800 | 14.400 |
| Pelletteria (portafogli AMEN) | 1 | 14.117 | 14.117 |
| Borse | 1 | 5.963 | 5.963 |
| Profumi | 1 | 1.309 | 1.309 |
| Teaser / altro | 2 | — | 3.927 |

**Moda + borse + pelletteria = 20 post, 165.432 view, 71% del totale.**

Primi cinque: 15.951 lezioni di ballo (non commerciale) · 15.283 tailleur 49,90 ·
14.690 "le taglie uniche non sono mai uguali" · 14.117 portafogli AMEN · 12.135 crema PDRN.

## TikTok @teresachiuduno — stesso periodo

11 post · totale 7.476 view · media 680. **Quota TikTok sul totale delle view: 3,1%.**

## Stesso contenuto sulle due piattaforme (10 coppie)

| Contenuto | Instagram | TikTok | TikTok/IG |
|---|---|---|---|
| 22/09 profumo 9PM back in stock | 1.309 | 302 | 23,1% |
| 21/09 contorno occhi VT | 11.737 | 609 | 5,2% |
| 21/09 restock Luca Barra | 2.783 | 294 | 10,6% |
| 18/09 borsa "selvaggia" | 9.965 | 895 | 9,0% |
| 17/09 dietro le quinte gioielli | 7.468 | 429 | 5,7% |
| 16/09 taglie uniche, ecco perché | 11.598 | 652 | 5,6% |
| 14/09 tote bag 29€ | 5.963 | 853 | 14,3% |
| 11/09 taglie uniche non sono uguali | 14.690 | 1.070 | 7,3% |
| 09/09 portafogli AMEN | 14.117 | 710 | 5,0% |
| 07/09 crema PDRN | 12.135 | 567 | 4,7% |
| **Totale** | **91.765** | **6.381** | **7,0%** |

Il dato del mese 1 era 9,1%. **TikTok rende oggi il 7% di Instagram sugli stessi identici video.**

## Catalogo Shopify (Admin API, 22/09)

103 prodotti totali · 95 ACTIVE · 2 DRAFT · 6 UNLISTED (le Marinette Saint Tropez estive)
· 3 attivi con giacenza 0 · prezzi da 6,90 a 249,00 · 21 prodotti creati dal 1/09, di cui
17 dal 15/09.

| Collezione | Prodotti | Note |
|---|---|---|
| Skin Care | 32 | |
| Gioielli | 20 | **19 caricati il 17/09**, quasi tutti con 1 solo pezzo a magazzino |
| Profumi | 19 | |
| Estate | 18 | ancora in vetrina al 22/09, 4 esauriti |
| Borse e Portafogli | 15 | di cui 6 Marinette non attive/esaurite → 9 realmente acquistabili |
| Prodotti per Capelli | 12 | |
| Home page | 1 | solo la Mystery Box |

**Capi di abbigliamento a catalogo: 0.** Nessuna collezione abbigliamento esiste.

Tipi prodotto valorizzati solo su 26 prodotti su 103 (Collane 12, Skin Care 6, Borse 4,
Orecchini 3, Bracciali 1): 77 prodotti hanno il campo tipo vuoto.

## Permessi disponibili

L'app collegata ha solo `read_products` / `write_products`. **Non leggibili da qui**: ordini,
sessioni, funnel di conversione, canali di vendita, stato TikTok Shop. Richiesta formulata in
[[../../../output/richiesta-dati-shopify-teresa]].

## Prezzi dell'abbigliamento dichiarati nelle caption di settembre

Utili perché sono i prezzi reali del cliente, oggi non presenti a catalogo: abito 39,90 ·
tailleur/kimono 49,90 · completo 49,90 · giacca ecorenna 39,90 · giacca 59,90 ·
giubbino 69,90 (2 pezzi) · cappottino ecopelle 69,90 (2 pezzi) · trench 59,90-69,90 ·
jeans 39,90 (XS-XL) · tute 39,90 · felpa 29,90 · magliette 14,90-24,90 · pantaloni 15,90 ·
cintura vera pelle 19,90 · borse 29,90-139,90 · collana Etrusca 119,90.

---

## Verifica incrociata con l'estrazione parallela del 22/09

Una seconda estrazione fatta nella sessione con accesso Shopify
(`prompt_analisi_shop_social.md`, fornita da Davide il 22/09) **coincide con questa** una volta
esclusi i prodotti non attivi: Gioielli 18 (20 meno 2 bozze), Borse e Portafogli 9 (15 meno le
6 Marinette non attive), Estate 12 (18 meno le stesse 6), Profumi 19, Capelli 12. Le due letture
sono quindi consistenti.

Dati aggiuntivi da quella estrazione:

- Prezzi: **mediana 29,90 · media 38,70** · min 6,90 · max 199,90 (attivi)
- Fasce: sotto 20€ → 42 varianti · 20-50€ → 78 · 50-100€ → 15 · 100-200€ → 9 · oltre 200€ → 0
- **49 prodotti su 95 hanno una sola foto**
- **16 prodotti hanno un solo pezzo disponibile**; magazzino totale 1.317 pezzi
- 143 varianti hanno un prezzo barrato impostato
- Caricamenti per mese: luglio 49 · agosto 27 · settembre 19
- Brand: Teresa Chiuduno 48 (private label/pelletteria) · Amen 15 · Australian Gold 14 ·
  MIIN 5 · LPDO 4 · Etrusca 4 · Luca Barra 2 · Bronzallure 2
- **Tutti i 95 prodotti attivi risultano pubblicati sia su Online Store sia sul canale TikTok**

## Stato del sito verificato il 22/09

- Spedizione gratuita sopra 79€, annunciata nella barra in alto
- Home: hero, carosello "I più amati", badge recensioni Google, 4 tile categoria,
  "Scelti da Teresa", blocco editoriale, newsletter, recensioni Google in fondo
- Navigazione: SHOP, Profumi, Skincare, Capelli, Borse e Portafogli, Gioielli, Contatti.
  **Nessuna voce abbigliamento**
- **Nessuna pagina FAQ, nessuna pagina spedizioni e resi dedicata** (solo policy legali)
- **Nessun sistema di recensioni prodotto** (solo il badge Google a livello di negozio)
- Nessuno strumento di registrazione sessioni installato (Clarity consigliato, non attivo)

## Ancora mancanti al 22/09

Sessioni, tasso di conversione e funnel, sorgenti di traffico, dispositivi, prodotti piu' visti,
ordini e scontrino medio, carrelli abbandonati, click sul link in bio, stato di approvazione dei
prodotti su TikTok Shop Seller Center. Sono i dati del blocco A di
[[../../../output/richiesta-dati-shopify-teresa]].
