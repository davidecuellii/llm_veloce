---
type: output
tags: [teresa-srl, ecommerce, funnel, conversione, tiktok-shop]
created: 2026-09-01
updated: 2026-09-01
---

# Diagnosi funnel Teresa Chiuduno: 172.019 view, 1 vendita

Dopo un mese di produzione l'e-commerce ha registrato **una sola vendita**, a fronte di
172.019 view cumulate sui contenuti Veloce e di un obiettivo dichiarato dal cliente di **20
ordini online a settimana**.

Il problema non e' nei contenuti. I contenuti stanno producendo attenzione in linea con la
pagina. Il problema e' che **l'attenzione non ha una strada per diventare un ordine**, e in
almeno un caso la strada non esiste proprio.

Fonti: `raw/clients/teresa-srl/2026-09-01-performance-api.md`,
`raw/clients/teresa-srl/2026-09-01-brief-reel-mese-2-whatsapp.md`, ispezione diretta di
`teresachiuduno.it` il 2026-09-01.

---

## 1. Il difetto strutturale: contenuti e negozio vendono cose diverse

Ispezione del catalogo online al 01/09/2026:

| | |
|---|---|
| Prodotti a catalogo | **61** (56 disponibili, 6 esauriti) |
| Categorie | Profumi, Skincare Coreana, Capelli, Gioielli, Estate |
| Capi di abbigliamento | **0** |
| Borse | **0** |

**Abbigliamento e borse valgono piu' della meta' del fatturato di Teresa e non sono
acquistabili online.**

E' anche la categoria su cui il pubblico reagisce meglio: il reel della proprieta' sul tailleur
gessato da 79,90€ ha fatto 17.889 view, "spoiler new collection" 12.436. Chi ha visto quei
contenuti e ha voluto comprare **non aveva nessun posto dove farlo**, se non venire fisicamente
a Chiuduno.

Il contratto prevedeva 50 articoli al lancio e caricamento progressivo **fino a 300**. Dopo un
mese siamo a 61, e i 61 coprono la parte minoritaria del business.

## 2. La piattaforma con il pubblico non ha la cassa

| | Instagram | TikTok |
|---|---|---|
| Quota delle view sui contenuti Veloce | **92%** (157.687) | 8% (14.332) |
| Media per contenuto | 14.335 | 1.303 |
| Checkout nativo | **no**, solo link in bio | **si'**, TikTok Shop |

Il 92% dell'attenzione e' su una piattaforma dove l'unico percorso d'acquisto e' un singolo
link in bio, cioe' tre passaggi (esci dal reel, apri il profilo, tocca il link, cerca il
prodotto nel sito). Il checkout in-video esiste solo dove il pubblico non c'e'.

Questo da solo spiega gran parte del divario tra attenzione e vendite.

## 3. Le borse in tessuto a 29€ su TikTok Shop: istinto giusto, due ostacoli

La proprieta' propone di spingere le borse in tessuto da 29€ su TikTok Shop. Come idea e'
corretta: prezzo da impulso, prodotto visivo, checkout dentro il video. Ma oggi non e'
eseguibile per due motivi.

**Primo**: le borse non sono a catalogo, ne' su Shopify ne' quindi su TikTok Shop. Prima si
carica, poi si spinge.

**Secondo, meno ovvio**: la spedizione e' gratuita **sopra i 79€**, sotto costa 7,99€. Una
borsa da 29€ arriva a 36,99€, cioe' **+27%**. Su un acquisto d'impulso da 29€ e' esattamente
il punto in cui il carrello viene abbandonato. La politica di spedizione, tarata sul carrello
medio della cosmetica, sta lavorando contro il prodotto che si vuole usare come apripista.

Da valutare: soglia piu' bassa, spedizione inclusa nel prezzo delle borse (29€ con spedizione
inclusa e' un'offerta molto piu' forte di 29€ + 7,99€), oppure un bundle due borse a 49€ che
avvicina la soglia.

## 4. Il catalogo e' fuori stagione

Al 1 settembre la homepage ha ancora una categoria **"Estate"** in evidenza e prodotti
solari tra i piu' visibili, alcuni esauriti (Australian Gold Deviously Bronze 45X, 45,90€,
non disponibile). Chi arriva dal contenuto sul tailleur autunnale trova una vetrina di agosto.

## 4-bis. Il contenuto e' il targeting, e stiamo targettizzando il pubblico sbagliato

Aggiunto il 2026-09-01 dopo l'ingest di [[../concepts/framework/spcl-hormozi]].

I social distribuiscono per **interessi**, non per connessioni: l'algoritmo legge il video, i
prodotti, lo sfondo, e lo manda a chi ha una cronologia affine. Quindi il tipo di contenuto
decide **chi lo vede**.

Nel mese 1 abbiamo prodotto quasi solo contenuti di **cosmetica con battute a doppio senso**.
L'algoritmo ha fatto il suo lavoro e li ha mandati a chi guarda contenuti di cosmetica e
comicita'. Non a chi compra un tailleur da 79,90 in provincia di Bergamo.

**E' la terza spiegazione della vendita singola, ed e' complementare alle altre due**: il
catalogo non aveva la moda, la piattaforma con il pubblico non aveva la cassa, e il pubblico
raccolto non era quello che compra. 172.019 view non sono 172.019 potenziali clienti di Teresa.

Conseguenza pratica sul mese 2: girare la moda con i prezzi in campo non serve solo a vendere
la moda. **Serve a cambiare a chi l'algoritmo mostra la pagina.** E' un effetto che impiega
qualche settimana e che va tenuto presente quando si leggeranno i numeri di settembre: e'
normale, e forse auspicabile, che le view calino mentre la qualita' del pubblico sale.

Corollario spiacevole sulla clausola: **una soglia espressa in view premia esattamente il
contenuto che non vende.** Un altro motivo per rivederla prima della firma, vedi la sezione 7.

## 5. Cosa non sappiamo, e serve sapere subito

La diagnosi sopra spiega perche' le vendite sono poche, ma non distingue tra due scenari molto
diversi, che richiedono interventi opposti:

- **Scenario A, problema di traffico**: dai social al sito arrivano pochissime sessioni. Allora
  il lavoro e' sul percorso (punto 2).
- **Scenario B, problema di conversione**: le sessioni arrivano ma nessuno compra. Allora il
  lavoro e' su catalogo, prezzi, spedizione e pagine prodotto.

**Dati da estrarre da Shopify Analytics, prima di qualsiasi altra decisione**: sessioni totali
del mese, sorgente del traffico, tasso di aggiunta al carrello, carrelli abbandonati, e da dove
e' arrivata la singola vendita. Sono tutti disponibili nel pannello a cui abbiamo accesso.

Va anche verificato se **TikTok Shop e' effettivamente attivo e collegato**: molti script del
mese 1 chiudevano con "cliccate sul carrello arancione", che se il negozio non e' live e' una
CTA verso il nulla.

## 6. Il punto che nessuno ha ancora detto al cliente

Teresa e' un negozio fisico di paese con 16.030 follower su Instagram, cresciuto su un bacino
locale. **Una parte consistente di quel pubblico non ordinera' mai online: viene in negozio.**
L'obiettivo del cliente, formulato nell'onboarding, era del resto doppio: "aumento della
vendita online **e del fatturato in store**".

Se il pubblico converte in negozio, oggi non lo stiamo misurando in nessun modo, e quindi
stiamo attribuendo al progetto solo 1 vendita quando il ritorno reale potrebbe essere in
gran parte a scaffale. La domanda piu' semplice e piu' urgente da fare a Chiara e Andrea:
**"quante persone sono entrate in negozio questo mese dicendo di avervi visto sui social?"**

E' una misura grezza, ma e' l'unica che oggi manca completamente e potrebbe cambiare
radicalmente il giudizio sul mese 1.

## 7. Conseguenza sul contratto

Questo rende la clausola dell'obiettivo 1M view doppiamente sbagliata come metrica, e il
contratto **non e' ancora firmato**.

- Se **manchiamo** il milione (traiettoria attuale: 56%, vedi
  [[analisi-performance-teresa-mese-1#4. Il problema serio: la garanzia 1M non è raggiungibile al ritmo attuale]]),
  lavoriamo gratis a tempo indeterminato.
- Se lo **centriamo** ma le vendite restano queste, il cliente non rinnova comunque. Un milione
  di view e quattro ordini non tengono un contratto da 2.100€ al mese.

Sono entrambi esiti negativi, ed e' il segnale che la metrica misura la cosa sbagliata. Da
portare in discussione con il cliente **prima della firma**, sostituendo o affiancando alla
soglia di view un impegno su cio' che controlliamo davvero e che conta per loro: numero di
prodotti a catalogo, contenuti consegnati, e una misura di ritorno concordata (ordini,
sessioni, oppure ingressi in negozio attribuiti). Vedi
[[../agenzia/pricing#Rischi noti della garanzia]].

## 8. Priorita' operative, in ordine

1. **Caricare abbigliamento e borse su Shopify.** Nulla di quanto segue conta finche' la meta'
   del business non e' acquistabile. E' anche cio' che il contratto prevede (fino a 300
   articoli) e su cui siamo indietro.
2. **Estrarre i dati Shopify** per capire se e' un problema di traffico o di conversione.
3. **Verificare che TikTok Shop sia live**, altrimenti le CTA del mese 1 puntavano al vuoto.
4. **Rivedere la spedizione** per il ticket da 29€.
5. **Aggiornare la vetrina**: via "Estate", dentro l'autunno, fuori gli esauriti dalla home.
6. **Aprire un percorso d'acquisto su Instagram**, dove c'e' il 92% del pubblico: tag prodotto
   se il profilo e' idoneo, altrimenti automazione DM con ManyChat, che e' gia' nel nostro
   stack (vedi [[../agenzia/processi-tool]]) e che diversi script del mese 1 presupponevano
   gia' ma non risulta usata.
7. **Chiedere il dato sugli ingressi in negozio** attribuiti ai social.
8. Solo a questo punto ha senso ottimizzare i format, che e' il lavoro descritto in
   [[../clients/teresa-srl/idee]].

## Collegamenti

[[analisi-performance-teresa-mese-1]] · [[../clients/teresa-srl/overview]] ·
[[../clients/teresa-srl/idee]] · [[../clients/teresa-srl/linea-editoriale]]
