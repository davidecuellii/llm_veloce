---
type: playbook
tags: [format, ricerca, creativo, commerciale]
created: 2026-09-01
updated: 2026-09-01
---

# Playbook — Ricercare e scrivere format vincenti

Pagina operativa. Serve a due cose diverse che usano lo stesso lavoro:

1. **Commerciale**: portare al prospect 2-4 riferimenti concreti di format che funzionano
   gia' nel suo settore, invece di teoria. Vedi [[outreach#Ricerca competitor e riferimenti]].
2. **Produzione**: costruire i format proprietari dei clienti attivi partendo da cio' che e'
   gia' validato, non da un brainstorming a vuoto.

Il principio di fondo, gia' in [[../agenzia/posizionamento]]: non si parte dal reel, si parte
dal modello di business. Ma una volta capito il business, **non si inventa da zero**. Si cerca
cosa sta gia' funzionando, si capisce perche', e si riscrive per il brand.

---

## Fase 1 — Dove cercare

Per ogni cliente o prospect si costruiscono quattro livelli di riferimenti. Servono livelli
diversi perche' hanno usi diversi: il locale convince, l'internazionale ispira.

| Livello | A cosa serve | Come si trova |
|---|---|---|
| **Locale** (stessa zona, stesso settore) | Toglie l'alibi "da noi non funziona" | Ricerca per hashtag di zona, geotag, profili di concorrenti diretti |
| **Italiano** | Dimostra che il format regge in italiano e con il pubblico italiano | Ricerca per parole chiave di settore su TikTok e Reels |
| **Europeo** | Format piu' maturi, spesso 6-12 mesi avanti | Stessi settori in Spagna, Francia, UK, Germania |
| **Internazionale** (USA in particolare) | Da qui arrivano i format prima che diventino saturi in Italia | Creator e brand USA dello stesso vertical |

Fonti aggiuntive da non trascurare:

- **I brand che piacciono al cliente**, anche fuori settore. Nel modulo di onboarding c'e' una
  domanda apposta, e la risposta e' spesso piu' utile della lista dei concorrenti. Per
  [[../clients/teresa-srl/overview|Teresa]] hanno indicato `mircozebrato`,
  `benebenemarketcampi`, `granato_shop`, `autodocsimonedoca`, `vistachiara_eyewear`,
  motivando con "il modo ironico in cui sfruttano i video per fare hype".
- **I contenuti che hanno gia' funzionato al cliente**: altra domanda del modulo. Chiara ha
  risposto "reel ironici con tono leggero e talvolta un po' provocatorio", e per contro
  "quelli troppo tecnici sulla skincare" non hanno funzionato. Questo e' un format vincente
  gia' validato sul loro pubblico, va sfruttato prima di importarne di nuovi.
- **I commenti sotto i video che funzionano**: dicono quale parte del contenuto ha colpito, e
  spesso contengono il prossimo hook gia' scritto dal pubblico.

### Strumenti disponibili

In questa sessione e' collegato un MCP di analisi social (SocialGPT) che copre buona parte
della ricerca senza doverla fare a mano:

- `search_videos` e `search` per cercare contenuti per tema o parola chiave
- `analyze_creator` / `list_creator_videos` per profilare un creator o un competitor e vedere
  quali suoi contenuti performano
- `list_similar_videos` per trovare varianti dello stesso format (il modo piu' rapido per
  capire se un format e' replicabile o e' stato un colpo di fortuna singolo)
- `analyze_post` su un URL specifico e `get_video_analysis` per la lettura approfondita
- `get_account_metrics`, `get_follower_history`, `get_growth_summary` sugli account collegati

**Nota d'uso**: l'analisi profonda di un video e' asincrona, risponde `pending` per 30-60
secondi. Non e' un errore, va solo riletta dopo.

---

## Fase 2 — Come si legge un video, non come si guarda

Guardare un video e dire "e' bello" non produce niente di riutilizzabile. Ogni riferimento va
smontato sempre negli stessi campi, altrimenti non e' confrontabile con gli altri.

Griglia di deconstruzione, da compilare per ogni video salvato:

- **Hook (primi 1-3 secondi)**: cosa succede esattamente. Frase pronunciata, inquadratura,
  testo a schermo, movimento. Va trascritto letteralmente, non riassunto.
- **Promessa implicita**: perche' chi guarda pensa che valga la pena restare.
- **Ritmo**: quanti tagli, ogni quanto cambia l'inquadratura, dove sta il punto in cui il
  video rischia di perdere lo spettatore.
- **Payoff**: cosa ottiene chi arriva alla fine. Se non c'e' payoff, il format non e'
  ripetibile, per quanto il singolo video abbia funzionato.
- **Struttura ripetibile**: lo schema in 3-5 passaggi che si puo' rifare con contenuti diversi.
  Se non si riesce a scrivere lo schema, non e' un format: e' un video fortunato.
- **Ruolo del prodotto**: dove entra, quanto dura, se e' il soggetto o il pretesto.
- **Cosa e' trasferibile e cosa no**: molti format dipendono da un personaggio, da un luogo o
  da un budget che il nostro cliente non ha.

### Come si capisce se un format e' davvero vincente

Le views assolute sono il criterio peggiore. Segnali piu' affidabili, in ordine:

1. **Il creator lo ha rifatto piu' volte.** Un format ripetuto 5 o 10 volte da chi ha i dati
   in mano e' validato meglio di qualsiasi singolo video virale.
2. **Rapporto views/follower.** Un video da 200k su un profilo da 3k dice molto di piu' di un
   video da 500k su un profilo da 900k.
3. **Piu' account diversi lo stanno usando.** Se il format e' migrato tra creator, e' il
   format a funzionare, non la persona.
4. **I commenti parlano del contenuto**, non solo del prodotto o dell'aspetto di chi appare.
5. **Regge senza audio**: se funziona solo per via di un audio in trend, ha una scadenza.

---

## Fase 3 — Come si scrive il format

Un format non e' uno script. Lo script e' una puntata, il format e' lo stampo. Da qui viene la
serialita', che e' cio' che rende la produzione efficiente e il brand riconoscibile.

Una pagina di format in `concepts/formati/` deve contenere:

- **Nome del format**, corto e pronunciabile in riunione
- **Logline**: una riga che spiega cosa succede in ogni puntata
- **Struttura fissa**: i passaggi che non cambiano mai (es. hook provocatorio, reazione,
  verdetto)
- **Le variabili**: cosa cambia da una puntata all'altra (il prodotto, l'ospite, la domanda)
- **Regole di hook**: 3-5 formule d'apertura gia' pronte per quel format
- **Durata e ritmo target**
- **Errori che uccidono il format**: cosa lo fa smettere di funzionare
- **Sezione "Usato da"** con i link ai clienti che lo adottano, mantenuta aggiornata come da
  [[../CLAUDE|schema]]
- **Riferimenti**: i 2-4 video da cui il format e' stato derivato, con la griglia della fase 2

Esempi gia' formalizzati:
[[../concepts/formati/ha-senso-o-e-una-stronzata]] ·
[[../concepts/formati/diario-lifestyle-viaggio]] ·
[[../concepts/formati/script-evento-brand]] ·
[[../concepts/formati/annuncio-evento-negozio]] ·
[[../concepts/formati/problema-prodotto-prezzo]] ·
[[../concepts/formati/in-base-al-tuo-budget]] ·
[[../concepts/formati/doppio-senso-svelamento]].

**Primo caso reale di applicazione del metodo**: la ricerca sui cinque riferimenti indicati da
Teresa Chiuduno, in [[../output/ricerca-format-riferimenti-teresa]]. Ha prodotto due format
nuovi e ha smentito la premessa di partenza, che e' il motivo per cui la ricerca si fa invece
di fidarsi di quello che il cliente dichiara di volere.

### Dallo stampo alla puntata

Lo script del singolo contenuto vive in `clients/<slug>/script/<slug-script>.md` e deve
dichiarare da quale format nasce. Sequenza di lavoro:

`riferimenti → griglia → format → banca di puntate → script → shooting`

La banca di puntate e' il passaggio che di solito viene saltato ed e' quello che fa risparmiare
piu' tempo: una volta fissato lo stampo, si scrivono venti titoli di puntata in mezz'ora e non
si ricomincia da zero ogni mese.

---

## Fase 4 — Chiudere il ciclo con i dati

Il piano editoriale del mese successivo nasce dai dati del precedente, non da un brainstorming
nuovo. Dopo la pubblicazione si raccoglie: quali hook hanno tenuto, quale persona in camera ha
funzionato meglio, quali commenti si ripetono, quali contenuti sono replicabili cosi' come
sono. Il format vincente si tiene e si itera, quello che non tiene si archivia con scritto
perche'.

## Collegamenti

[[outreach]] · [[risposte-clienti]] · [[../agenzia/posizionamento]]
