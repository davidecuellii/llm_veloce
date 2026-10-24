# Log recente

Solo eventi significativi. Storico completo: `log/archive/2026-09.md`.

## [2026-09-08] LEAD | pancaldi-moto | Diagnostica e proposta preliminare
Ripresa la trattativa con diagnostica online e bozza a tre tier. Prossimo passo: walk-in con
fasce indicative. Pagine: [[prospects/pancaldi-moto/profile]], [[prospects/pancaldi-moto/outreach]]

## [2026-09-08] PRICING | agency | Garanzia 1M limitata a +30 giorni
Il supporto gratuito successivo al target non raggiunto ora ha un tetto fisso di 30 giorni.
Pagina: [[agenzia/pricing]]

## [2026-09-08] SYSTEM | agency | Refactor retrieval-first
Creati kernel, router, retrieval/persistence policy, protocolli lazy, hot memory, knowledge
layer, indici locali e archivio log. Pagine: [[system/map]], [[system/retrieval]], [[system/persistence]]

## [2026-09-08] ingest | barbar | Idee video autunno: rientro, karaoke, Oktoberfest
Creato `clients/barbar/idee.md` con le tre idee video citate da Davide nella sessione precedente. Nota tono: frontwoman BarBar ha registro diverso da Teresa — meno double-entendre, stessa struttura watch time/conversione.
Pagine toccate: [[clients/barbar/idee]], [[clients/barbar/overview]]

## [2026-09-13] SALES | agency | Pitch deck per il venditore esterno
Creato deck PPTX 14 slide (attenzione frammentata, ricerca social vs passaparola con fonti
reali, ecosistema 360, modulazione su tre obiettivi, case Geely Italia e Pakoraban, CTA call
conoscitiva). Niente prezzi né garanzia. Pagina: [[output/pitch-deck-venditore]]

## [2026-09-17] SALES | agency | Copy case study Geely per il sito e correzione attribuzione
Riscritto il copy della pagina Geely su veloce.digital: contenuto di Veloce Digital, campagna
di Geely con Social & Impact via TikTok One, numeri presentati come risultati della campagna.
Corretta la stessa attribuzione sulla slide 11 del deck venditore.
Pagine: [[output/copy-case-study-geely-sito]], [[output/pitch-deck-venditore]]

## [2026-09-17] SALES | teresa-srl | Copy case study "attività portata online" per il sito
Pagina case study Teresa come storia di trasformazione (no numeri di vendita): e-commerce da
zero in 30 giorni dalla firma, ~100 prodotti, TikTok Shop, gestionale collegato, 170k+ view
primo mese. Vincolo: mai citare Shopify sul sito. Nasce il servizio "Negozio online in 30
giorni". Da chiedere a Chiara una citazione approvata; dati traffico da Shopify Analytics.
Pagina: [[output/copy-case-study-teresa-sito]]

## [2026-09-22] DELIVERY | teresa-srl | Copioni del secondo shooting di settembre
Dieci copioni piu' uno stampo riutilizzabile, scritti dalle idee del vocale del 22/09 e dai
reel di riferimento mandati da Davide. Nasce il format **camice e commento** (la "dottoressa di
TikTok", riferimento `@x2marco`), pensato come format di riserva permanente, e la rubrica
**Le lezioni di vendita di Anna** (video 8 e 9). Dove il copione era scritto da Davide e'
rimasto testuale: assegnate solo battute e tempi.
**Cadenza confermata da Davide: due shooting al mese**, non uno come da contratto.
Pagine: [[output/script-shooting-teresa-settembre-2]], [[concepts/formati/camice-e-commento]],
[[clients/teresa-srl/script/index]]

## [2026-09-22] DELIVERY | teresa-srl | Report funnel in versione cliente + estrazione dati nuova
Rifatta la diagnosi del funnel con dati freschi: social pubblici letti via API (IG 30 contenuti
5-22/09, 231.770 view, media 7.726; TikTok 11 contenuti, 7.476 view) e catalogo letto via
Shopify Admin API (95 prodotti attivi, **0 capi di abbigliamento**). Due risultati nuovi:
**il 71% delle view di settembre è su capi non acquistabili online** (145.352 view su 18
contenuti moda) e **TikTok rende il 7,0% di Instagram** sulle stesse dieci coppie di video.
Prodotto [[output/report-cliente-funnel-teresa-settembre]] (PDF `Teresa-Chiuduno-Analisi-Settembre.pdf`),
taglio diagnosi + piano, senza riferimenti a contratto e garanzia.
**Limite**: l'app Shopify ha solo `read_products`, quindi sessioni, funnel e ordini restano
fuori. Richiesta formulata in [[output/richiesta-dati-shopify-teresa]], ancora senza risposta:
il file passato da Davide era il prompt, non i dati.
Pagine: [[output/diagnosi-funnel-teresa]] (aggiornata), `raw/clients/teresa-srl/2026-09-22-performance-social-e-catalogo.md`

## [2026-09-23] DELIVERY | teresa-srl | Report interno funnel con i dati Shopify
Arrivati gli screenshot di Shopify Analytics (1 lug - 23 set). **Il sito ha convertito zero**:
2.125 sessioni, 41 carrelli (1,92%), 13 checkout (0,61%), 0 acquisti. Le 4 vendite del periodo
(77,10€ su 164,90€ lordi, 96€ di sconti, AOV 17,22€) sono **tutte di TikTok Shop**.
Ribaltata la lettura di settembre: **TikTok ha il 3% delle view e il 100% delle vendite**.
Altri fatti: 80,7% delle sessioni atterra in homepage, 194 sessioni passano da Linktree,
418 sessioni da Instagram in tre mesi, mobile 89,4%, 0% clienti di ritorno.
Prodotto [[output/report-interno-funnel-teresa]] (PDF `INTERNO-Teresa-Funnel-23-settembre.pdf`).
**Prima azione, prima di tutto il resto: ordine di prova con carta vera** — i pagamenti li ha
configurati il cliente e non li abbiamo mai testati.
TikTok Shop bloccato da due settimane sulla verifica originalita' prodotti (autorizzazione
brand sui profumi): servono i documenti di Chiara.
Da fare: versione addolcita per il cliente, dopo aver chiuso gli attriti che sono lavoro nostro.
Pagine: [[clients/teresa-srl/overview]] (aggiornata), [[output/diagnosi-funnel-teresa]] (aggiornata),
`raw/clients/teresa-srl/2026-09-23-shopify-analytics.md`

## [2026-09-23] DELIVERY | teresa-srl | Correzioni al report interno e decisione su Danea
Tre correzioni da Davide: **spedizione gia' scesa a 4,99€** da inizio settembre (era 7,99, quindi
l'incidenza su un carrello da 29,90 passa da +27% a +16,7%); **i 96€ di sconti sono omaggi a
TikTok shopper**, non una promo, quindi **gli ordini realmente pagati sono due o tre, non
quattro**; da qui la regola nuova di taggare il seeding su Shopify, altrimenti sporca ogni
lettura futura.
Decisione operativa presa: **l'abbigliamento non si collega a Danea EasyFatt** per ora (ruota
troppo in fretta, spesso taglia unica o due pezzi, e con 2-3 ordini a trimestre la
riconciliazione manuale costa niente). Si rivaluta sopra i cinque ordini a settimana o al primo
caso di doppia vendita. Danea resta su profumi, skincare e capelli.
Flusso nuovo concordato: **Chiara manda le foto del capo il giorno stesso, noi lo carichiamo lo
stesso giorno**, cosi' il video esce con il prodotto gia' acquistabile.
Focus dichiarato: accorciare i passaggi su Instagram invece di puntare sullo sblocco TikTok.
Pagina aggiornata: [[output/report-interno-funnel-teresa]]

## [2026-09-23] DELIVERY | teresa-srl | Versione cliente del report funnel
Riscritta [[output/report-cliente-funnel-teresa-settembre]] con i dati Shopify (la versione
precedente era senza). Taglio: diagnosi + piano, presentabile di persona, 10 pagine.
**Cosa resta dentro**: i 2.125 → 41 → 13 → 0, lo zero del sito, i 4 ordini TikTok di cui 1-2
omaggi, il 71% delle view su capi non acquistabili, le tre cause, il piano a 4 settimane e le
quattro richieste al cliente (foto il giorno stesso, capi in piu' pezzi, documenti TikTok Shop,
conteggio ingressi in negozio).
**Cosa resta fuori**: l'elenco delle cose nostre non fatte (FAQ, resi, Estate ancora in vetrina,
Linktree, foto singole, Clarity mancante) e qualsiasi formulazione autoaccusatoria. La verifica
pagamenti e' presentata come controllo congiunto, non come nostra omissione; le pagine mancanti
compaiono solo come attivita' del piano.
Versione interna completa resta [[output/report-interno-funnel-teresa]], da non consegnare.

## [2026-09-23] DELIVERY | teresa-srl | Versione cliente rifinita
Sistemata l'impaginazione (intestazioni lunghe che rischiavano il taglio, tabelle a larghezza
fissa, interruzioni di pagina pulite). Tre modifiche di contenuto richieste da Davide:
- **tolto il conteggio degli ingressi in negozio attribuiti ai social**, sia dalla lista delle
  richieste al cliente sia dalle metriche settimanali
- **nessuna automazione DM nominata**: al suo posto "prove sul percorso tra contenuto e
  prodotto". ManyChat non regge sui nostri volumi, l'alternativa e' **Open Reply**, da attivare;
  nota messa in [[agenzia/processi-tool]]
- aggiunto l'impegno **piu' uscite a parita' di prezzo**, motivato con la volonta' di far
  funzionare il sistema (due giornate di shooting al mese invece di una)

## [2026-09-24] SALES | amodomio-studio | Nuovo lead in ingresso, entita' creata
**A Modo Mio Studio** — ricamo e personalizzazione, San Pancrazio (BS), negozio aperto il
22 agosto 2026, e-commerce gia' fornito. Lead: **Andrea Lazzari**, gestisce con la moglie,
**secondo decisore** perche' il negozio e' nato da una sua idea. Vogliono partire a
**gennaio** dal **pacchetto base**, **senza fretta**.
Create [[prospects/amodomio-studio/profile]] e [[prospects/amodomio-studio/outreach]] con
bozza a **2 tier** (decisione di Davide: tre sono troppe) — Vetrina ~1.200€ senza garanzia,
Sistema Regalo ~1.900€ consigliato con ancora a 2.600€ barrato.
**Riformulazione del brief**: la difficolta' "non sono solo articoli per bambini" e' un
problema di posizionamento con tre economie diverse dentro (B2C regalo a scontrino basso,
eventi/allestimenti ad alto margine, aziende ricorrenti). Il contenuto piu' facile da fare
e' quello che li incastra come negozio per neonati e li taglia fuori dai due segmenti che
pagano. Tesi della proposta: non vendono ricamo, vendono l'oggetto che esiste in un pezzo
solo con sopra un nome.
**Aperto**: diagnostica IG + e-commerce non ancora fatta, handle @amodomio_studio non
confermato da ricerca web, 7 dati commerciali da raccogliere (i piu' pesanti: valore medio
commessa evento, **capacita' produttiva settimanale**, se la moglie compare nei contenuti).
Cifre non confermate col benchmark MEx.

## [2026-10-14] SALES | amodomio-studio | Proposta rifatta al ribasso
Davide: le cifre della prima bozza (1.200€/1.900€) sono eccessive per un negozio aperto da
due mesi. Riferimento richiesto: **preventivo accettato Teresa meno la parte di sito**,
perche' l'e-commerce ce l'hanno gia'.
**Aritmetica**: 2.100 − 800 di e-commerce management = **1.300€**. Corretto come conto, ma
1.300€ per i 12 contenuti di Teresa **e' la violazione del floor** gia' documentata in
[[output/benchmark-pricing-teresa]] (91,67€/video). A floor rispettato **1.300€ comprano 9
contenuti**, non 12 — applicata la regola "meno scope, stesso standard" di
[[playbook/risposte-clienti]].
**Nuove due opzioni** in [[prospects/amodomio-studio/outreach]]:
- **REGIA 650€** — 8 contenuti/mese **girati da loro** su nostro brief, montati e
  pubblicati da noi, shooting nostro ogni 3 mesi. La macchina da ricamo gira ogni giorno:
  la materia prima c'e' gia'. ~54€/h.
- **STUDIO 1.300€** *(consigliato, ancora 1.800€ barrato)* — 9 contenuti prodotti da noi,
  una sola giornata di shooting al mese, piano + report + automazioni Open Reply. 50€/h
  esatti, nessuno spazio per aggiungere nulla.
**Garanzia 1M esclusa da entrambe**: sono tier entry e un mese gratis su 1.300€ brucia il
margine di un trimestre. Al suo posto, impegno minimo 3 mesi allineato alla stagione eventi
gennaio-marzo.
**Due questioni aperte per Davide**: (1) il floor 120€/video copre la produzione, non
l'**editing puro** del Regia — caso non normato, se approvato va scritto in
[[agenzia/pricing]]; (2) togliere l'e-commerce toglie la voce che **faceva convertire** il
contenuto (su Teresa il funnel moriva sul sito, 2.125 → 41 → 13 → 0): mandiamo traffico su
schede che non controlliamo, da verificare in diagnostica e da scrivere come assunzione
esplicita nel documento. Se le schede non reggono, il preventivo basso non ha senso.

## [2026-10-14] SALES | amodomio-studio | Piani definitivi a 8 e 10 contenuti + brief interno in PDF
**Decisione permanente di Davide**: mai proporre pacchetti in cui gira il cliente e montiamo
noi — *"la peggio viene fuori"*. Scritta in [[agenzia/pricing#Cosa non mettiamo a listino: il montaggio di materiale girato dal cliente]].
Toglie l'unica leva che faceva stare 12 contenuti sotto 1.400€.
**Aritmetica che ne consegue** (floor 120€/video, piano 120€, report 80€): 8 contenuti + piano
= 1.080 → **1.100€ senza report**; 10 + piano + report = **1.400€ esatti**; 12 + piano + report
= **1.650€**. I **12 contenuti a 1.400€ non esistono**: la sola quota video e' 1.440€, e anche
regalando piano e report si starebbe a 116,67€/video.
**Piani in [[prospects/amodomio-studio/outreach]]**: AVVIO 1.100€ (8 contenuti, senza report) e
STUDIO 1.400€ *(consigliato, ancora 2.100€ barrato)* con 10 contenuti, report e automazioni
Open Reply. Alternativa 12 contenuti a 1.650€ se conta il volume. Raccomandato il 10 a 1.400€:
il salto si vende su report e automazioni, non sul numero di contenuti.
Garanzia 1M esclusa da entrambi; al suo posto impegno minimo 3 mesi su gennaio-marzo.
**Consegnato**: `output/2026-10-14-brief-interno-amodomio-studio.pdf`, documento di lavoro per i
collaboratori (non per il cliente) — include problema di posizionamento, calendario commerciale,
aritmetica, i due piani, i 5 format, le tre avvertenze e le 8 domande da fare al cliente.

## [2026-10-15] SALES | amodomio-studio | Proposta definitiva a tre piani scalari
Concordata con Davide e i collaboratori: **BASE 1.100€** (8 reel, piano, nessun report formale),
**CRESCITA 1.400€** consigliato (8 reel + shooting prodotti + 3 caroselli + 1 flusso ManyChat +
report leggero), **SISTEMA 2.100€** (12 reel + shooting + 8 caroselli + flussi + report completo +
aggiunte del primo trimestre: schede prodotto top, profilo, shooting evento). Ragionamento sulla
**settimana** (2 o 3 reel), non sul mese. Sistema volutamente forte: **ancora**, non il piano da
vendere.
**Benchmark**: MEx per 12 video 106-133€/video, 8 video 133-166€; fonti pubbliche per piccola
impresa 500-1.000€/mese, reel 50-200€, agenzia d'ingresso da ~2.000€. Lettura: prezzi in linea con
il mercato di agenzia, ma ~doppi rispetto alla fascia freelance che un negozio nuovo confronta.
Rischio sul Base, non sul Sistema.
**Margine**: Crescita ~47€/h, Sistema con aggiunte ~44€/h, sotto la soglia di 50€/h. Accettato
consapevolmente. Ore stimate da Claude, da validare.
**Come si vende il salto 1.100 → 1.400**: "il Base ti fa vedere, il Crescita ti fa scegliere";
~620€ di valore a listino per 300€ di differenza (stime nostre, listino da fissare).
**Aperto**: garanzia sul piano 3, strumento (ManyChat vs Open Reply), diagnostica, dati
commerciali. "MailChat" nei vocali = ManyChat, aggiunto ai nomi storpiati.
Prossimo passo: presentazione di supporto per il pitch al cliente.

## [2026-10-15] SALES | amodomio-studio | Diagnostica fatta e pitch pronto
**Diagnostica** (Instagram senza accesso + sito, 15 ottobre): 2.260 follower, 11 contenuti
visibili (8 ago–23 set), 8 reel, like medi 88, commenti medi 1,8; agosto 105 like di media su 8
contenuti, settembre 42 su 3, **nessun contenuto proprio dal 23 settembre**. Sito WooCommerce,
69 prodotti, 7–34€, foto curate. **Nessun contenuto su eventi, party kit o aziende.** Il sito non
nomina il negozio e non linka Instagram.
**Correzioni**: il brand e' **Amodo Mio Studio**, non "A modo mio"; il negozio e' a **Palazzolo
sull'Oglio** (Via Milano 3), non a Brescia (da confermare "San Pancrazio" con Davide); titolari
**Michela e Andrea**; marchio nato a **gennaio 2025**. Una mia ipotesi precedente era sbagliata:
le **foto prodotto sono gia' buone**, quindi lo shooting nei piani va spiegato diversamente.
**Decisione di Davide**: la garanzia 1M **non va mai nominata** per questo cliente.
**Consegnato**: slide 16:9 in 14 pagine + traccia interna per la call. Presenta solo ad Andrea.
**Rischio segnalato**: con ~2 commenti a post, le automazioni commento → DM non partono da sole.

## [2026-10-15] SALES | amodomio-studio | Pitch rivisto dopo i commenti di Davide
Titolo **"I vostri social in corsa con Veloce"**; tolta la slide dell'idea ("pezzo solo con
sopra un nome", non chiara a Davide); slide 2 resa essenziale; **format riscritti** sulla vita dei
titolari (chi siete, storie, prodotti, eventi e festivita', feste e allestimenti); **slide bonus
Natale** (registrazione a novembre, pubblicazione da dicembre, regali last minute); aggiunto il
**mese di produzione** (si produce un mese prima di pubblicare).
**Aperti, da confermare con Davide**: il mese di produzione e' a pagamento e rientra nei tre mesi
minimi? E gli esempi di feste e allestimenti: riprese di eventi non previste su Base e Crescita.

## [2026-10-17] SALES | agenzia | Slide risultati in tutte le presentazioni
Decisione di Davide: ogni presentazione deve avere slide risultati, prima dei prezzi. Regola
scritta in [[playbook/preventivi]] con cosa si puo' usare: Pakoraban (8.000 follower, reel top 262k,
ma "milioni di view" senza cifra esatta), BarBar (debole in assoluto), Teresa **non presentabile**,
Fabio Sirigu senza dati. Il pitch Amodo Mio Studio non le ha ancora.

## [2026-10-21] DELIVERY | teresa-srl | Copioni e guida per la trasferta da Amen (Arezzo)
Documento per la giornata in fabbrica Amen: 4 video principali (tour in collaborazione 3-4 min,
"cosa c'e' dietro ogni gioiello", collezione Amen, vlog), 30 ganci, 20 domande alla guida con
indicato a cosa servono, lista riprese. Prima versione (6.200 parole, 27 pp) giudicata troppo
lunga: riscritta in 16 pp, versione lunga conservata in `output/script-trasferta-amen-v1-lunga.md`.
Regole fissate: nessun altro marchio nominato, "italiano"/"fatto a mano" solo se confermato dalla
guida in camera, prezzo mai in apertura, battute su cio' che pensano solo se vere. Chiusura TikTok
con "link nel profilo" finche' TikTok Shop non e' sbloccato.
Pagina: [[output/script-trasferta-amen]]

## [2026-10-21] DELIVERY | teresa-srl | Script sulle nuove collezioni Amen (Essential, Signature, Heritage)
Dopo la presentazione in fabbrica: 5 script (le tre linee a confronto, Essential, Signature/Icon,
Heritage/Credo e Sacro, la collezione "Solo da Teresa Chiuduno" angeli e diavoli) piu' 7 idee per
reel (Luce, Polar, Dalia, Rosarium Heritage, Sacro, Love Knots, tutto unisex). Aperture dello
script 1 tenuta com'e' scritta da Davide.
Dati dalla guida (da confermare in camera): rosario 19 acciaio / 29 lega Amen / 49 argento,
scontrino medio argento ~50 euro, Icon 99, croce Sacro 79,90, bracciale 99,99, Polar 79,90 e 69,90.
Cautele fissate: il nome di Jake La Furia solo con il via libera di Amen; l'esclusiva di angeli e
diavoli solo se confermata; i dati commerciali sempre attribuiti ad Amen.
Non usato negli script (e' consiglio di merchandising): tenere la novita' nel suo mese per il
cliente fidelizzato e spalmare il colore tra vetrine e comunicazione; utile per il piano di ottobre.
Pagina: [[output/script-amen-nuove-collezioni]]

## [2026-10-24] SALES | gelateria-mille | Proposta A4 dopo la presentazione
Presentazione del 22 ottobre (14 slide, senza prezzi) andata bene. Proposta riscritta dalla bozza del
collaboratore con le note di Ferra: tolto "perche' questo documento", sintesi in copertina,
"riposizionamento sui social", altra partita del panettone esplicitata, vendita dettagliata per
prodotto, ADV panettone dalla terza settimana di novembre, case study Geely prima dei prezzi.
Verifiche: premi confermati; costo pagina di giornale senza fonte, rimossa la cifra.
Prezzi 1.500 / 2.100 / **2.900€** (Espansione da 2.700, da confermare con Davide).
Pagina: [[prospects/gelateria-mille/profile]]
Prezzo Espansione confermato da Davide: 2.900€, barrato 3.400€. PDF definitivo.
