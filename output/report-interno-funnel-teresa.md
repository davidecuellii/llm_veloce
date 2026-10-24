# INTERNO — Teresa Chiuduno: dove si rompe il funnel

**Documento interno Veloce Digital. Non consegnabile al cliente così com'è.**
Dati al 23 settembre 2026. Periodo analizzato: 1 luglio – 23 settembre.

Fonti: Shopify Analytics (screenshot 23/09), catalogo via Shopify Admin API (22/09), profili
pubblici Instagram e TikTok via API (22/09). Tutti i numeri qui sotto sono letti, non stimati.
Dove serve un'ipotesi, è scritto che è un'ipotesi.

---

## La sintesi, senza giri di parole

**Il sito non ha mai venduto niente.** 2.125 sessioni in dodici settimane, 41 carrelli,
13 checkout, **zero acquisti completati**. Tasso di conversione dello store: 0%.

Le uniche **4 vendite** del periodo sono arrivate **tutte da TikTok Shop**, per 77,10 € totali.
E di quelle quattro, **una o due sono prodotti regalati a TikTok shopper**: gli ordini realmente
pagati sono **due o tre**.

Quindi il quadro è rovesciato rispetto a come lo raccontavamo a settembre: **TikTok ha il 3%
delle visualizzazioni e il 100% delle vendite. Instagram ha il 97% delle visualizzazioni e zero
vendite.** Non è che TikTok non funziona: è l'unico pezzo che ha funzionato. Quello che non
funziona è il percorso Instagram → link in bio → sito → checkout, e non funziona in **tre punti
diversi**, uno dei quali potrebbe essere rotto tecnicamente.

---

## 1. Il numero da guardare prima di tutti: 13 → 0

| Passaggio | Persone | % sulle sessioni | Riferimento di settore (indicativo) |
|---|---|---|---|
| Sessioni | 2.125 | 100% | — |
| Aggiunto al carrello | 41 | **1,92%** | 4-7% |
| Arrivato al checkout | 13 | 0,61% | 2-3% |
| **Acquisto completato** | **0** | **0%** | 1-2% |

*(I riferimenti di settore sono ordini di grandezza tipici dell'e-commerce beauty/accessori, non
un benchmark citato da una fonte specifica. Servono solo a dire se siamo dentro o fuori scala.)*

**Tredici persone hanno inserito i dati e sono arrivate alla cassa. Nessuna ha pagato.**

Tredici sono pochi per trarre una conclusione statistica, ma 0 su 13 con un checkout che non
abbiamo mai testato dopo la configurazione è un campanello che non possiamo ignorare. E c'è un
precedente preciso: **la configurazione dei pagamenti l'abbiamo lasciata fare a Chiara e Andrea**
("i dati bancari li inserite voi"), e non abbiamo mai verificato che Shopify Payments e PayPal
siano effettivamente attivi e in grado di incassare.

**Azione, oggi, prima di qualsiasi altra cosa: ordine di prova reale.** Carta vera, importo
basso, fino alla conferma. Se il checkout è rotto o i pagamenti non sono attivi, tutto il resto
di questo documento è secondario, e abbiamo mandato traffico per tre mesi verso una cassa che
non incassa.

Le altre due spiegazioni possibili, da escludere nello stesso ordine:

1. **Il costo di spedizione che appare alla fine.** Fino a fine agosto erano 7,99 €: su un
   carrello da 29,90 € voleva dire **+27%**, ed è il punto classico di abbandono. **Da inizio
   settembre è passata a 4,99 €** (+16,7%), quindi il problema è già stato dimezzato. Conta
   però *quando* sono avvenuti i 13 checkout: il traffico è concentrato tra il 3 agosto e
   metà agosto, cioè **quasi tutto nel periodo in cui la spedizione costava ancora 7,99**.
   Da estrarre da Shopify: la data dei 13 checkout abbandonati. Se sono di agosto, questa
   causa è già stata rimossa e resta da verificare solo il resto.
2. **Fiducia.** Negozio mai sentito, nessuna recensione prodotto, nessuna pagina resi. Al
   momento di inserire la carta, il dubbio vince.

---

## 2. Il sito non converte, e prima ancora non riceve la gente giusta

**L'80,7% delle sessioni atterra in homepage** (1.714 su 2.125). Sulle schede prodotto
atterrano **33 sessioni in tutto**: 18 sulla mystery box e 15 sulla borsa Winter Vibes.

Questo è un difetto di percorso che è nostro al 100%: ogni video parla di **un** prodotto, e il
link in bio porta a **un negozio intero**. La persona arriva in home, deve cercare, non trova
(o trova la collezione Estate), esce. È esattamente ciò che dice il dato: 1,92% di aggiunta al
carrello, cioè quattro volte sotto la norma.

In mezzo c'è anche un passaggio di troppo: **194 sessioni arrivano da `linktr`**, cioè dal
Linktree. Il percorso reale oggi è reel → profilo → Linktree → homepage → ricerca del prodotto →
scheda. Sei passaggi. Ogni passaggio dimezza.

**Il traffico vero, in tre mesi**: 2.125 sessioni, cioè circa 175 a settimana, 25 al giorno. Di
queste, 418 da Instagram e 25 da Facebook. Il picco è stato il lancio del 3 agosto (~380
sessioni in un giorno), poi discesa continua.

Messo accanto alle visualizzazioni: **solo nel mese di settembre Instagram ha fatto 231.770
visualizzazioni. Le sessioni Instagram di tutto il trimestre sono 418.** Anche contando
generosamente, **meno di due persone su mille passano dal video al sito.** Il collo di bottiglia
non è la produzione di contenuti: è il tratto tra il contenuto e il sito.

**Geografia**, utile e non ovvia: Milano 202, Brescia 176, Bergamo 100. Il pubblico non è solo
del paese, quindi l'argomento "tanto vengono in negozio" copre solo una parte.

**Mobile 89,4%.** Qualsiasi cosa si sistemi sul sito, si valuta da telefono.

---

## 3. Le uniche 4 vendite, lette da vicino

| | |
|---|---|
| Fatturato lordo | 164,90 € |
| Sconti | **-96,00 €** (il 58,2% del lordo, in buona parte omaggi a creator) |
| Vendite totali | 77,10 € |
| Ordini | 4 |
| Valore medio ordine | 17,22 € |
| Clienti che hanno ricomprato | 0 |

Prodotti venduti: **solo profumi Lattafa e la crema PDRN di VT.** Nessun gioiello, nessuna
borsa, nessun portafoglio, nessun prodotto per capelli.

**I 96 € di sconti non sono una promo: sono prodotti regalati.** Chiarito da Davide il 23/09:
una parte di quegli ordini è **seeding, cioè prodotti mandati gratis a TikTok shopper**. Almeno
uno è sicuramente un omaggio, forse due. **Quindi gli ordini realmente pagati del trimestre
sono due o tre, non quattro.**

Cambia la lettura in due modi, ed entrambi vanno tenuti presenti:

- **In meglio**: il 58% di sconto medio non dice che vendiamo sottocosto. È un numero sporcato
  dal seeding, non un problema di pricing
- **In peggio**: la base reale è ancora più sottile di quanto sembrasse. Due o tre ordini veri
  in dodici settimane

**Azione operativa, piccola ma da fare subito: gli omaggi ai creator vanno taggati su Shopify**
(tag `seeding` sull'ordine, o un codice sconto dedicato). Altrimenti sporcano per sempre ogni
numero che leggiamo dopo: scontrino medio, sconto medio, tasso di conversione, sell-through.
Oggi non possiamo dire con certezza quanti ordini veri abbiamo fatto, e questo è un problema
nostro di strumentazione, non del cliente.

**Il prodotto che vende è il profumo, che è anche la categoria a margine più basso** e quella
con più concorrenza online. I Lattafa si trovano ovunque: se il nostro prezzo non è competitivo,
chi ci scopre da un video poi compra altrove. **Da verificare prodotto per prodotto sui primi
dieci per sessioni**, confrontando il nostro prezzo con i due o tre siti italiani che li
vendono. È una verifica da mezza giornata e non l'abbiamo mai fatta.

---

## 4. Il catalogo: il 71% dell'attenzione punta a prodotti che non esistono

Dall'estrazione del 22/09 (95 prodotti attivi):

- **Capi di abbigliamento a catalogo: 0**
- A settembre, **18 contenuti Instagram su 30 mostravano abbigliamento**, per **145.352
  visualizzazioni, il 71% del totale del mese**
- I contenuti più visti del mese sono il tailleur da 49,90 (15.283) e "le taglie uniche non sono
  mai uguali" (14.690). Due prodotti che online non si possono comprare
- Le didascalie dichiarano i prezzi (39,90 / 49,90 / 69,90) e dicono "link in bio"

**I prodotti che generano più visualizzazioni in assoluto non sono sul sito. I prodotti che sono
sul sito e generano sessioni sono quelli su cui siamo meno competitivi.** Messe insieme, queste
due frasi spiegano gran parte dei 77 euro.

Ed è anche il motivo per cui il funnel è così stretto in alto: chi clicca sul link in bio dopo
un video di abbigliamento non è un visitatore qualunque, è un visitatore **con un'intenzione
precisa che il sito non può soddisfare**.

---

## 5. Il paradosso TikTok, che ribalta la lettura di settembre

| | Instagram | TikTok |
|---|---|---|
| Quota delle visualizzazioni | 96,9% | 3,1% |
| Sessioni portate al sito | 418 | non rilevate separatamente |
| **Vendite** | **0 €** | **77,10 €** |

A settembre avevamo scritto che TikTok rende il 7% di Instagram e che è il problema di canale
più grosso. **Sui contenuti è vero, sulle vendite è esattamente il contrario.** La differenza è
una sola: su TikTok si compra dentro il video, su Instagram bisogna fare sei passaggi.

Va detto che parliamo di due o tre ordini veri, quindi il confronto indica una direzione, non
una misura. Ma la direzione è netta, perché da una parte c'è zero su 2.125 sessioni e dall'altra
c'è qualcosa.

Conseguenza operativa che cambia le priorità: **il checkout in-app vale più del volume di
visualizzazioni.** Non significa abbandonare Instagram, dove c'è il pubblico. Significa che su
Instagram serve accorciare il percorso (automazione in DM con il link diretto al prodotto, non
il Linktree), e su TikTok serve sbloccare il negozio.

### Stato TikTok Shop

Confronto aperto con l'assistenza **da due settimane**, seguito da un agente. Nodo dichiarato:
**verifica dell'originalità dei prodotti**, cioè l'autorizzazione del brand sui profumi.

Va trattato come un blocco operativo con una scadenza, non come una pratica in corso: è l'unico
canale che ha prodotto fatturato. Serve sapere entro questa settimana **quali documenti chiedono
esattamente** (fatture d'acquisto dei profumi, lettera di autorizzazione del distributore) e
chi li ha: quasi certamente Chiara, perché i fornitori sono suoi.

---

## 6. Gli attriti del sito, elenco interno

Verificati il 22-23/09. Sono tutti sistemabili in una settimana e **sono quasi tutti lavoro
nostro non fatto.**

| Cosa | Stato | Di chi è |
|---|---|---|
| Pagina spedizioni e resi | **non esiste** | nostro |
| Pagina domande frequenti | **non esiste** | nostro |
| Recensioni sui prodotti | **non attive** (solo badge Google del negozio) | nostro |
| Collezione "Estate" in vetrina a fine settembre | **ancora online**, ed è la 2ª landing page del sito con 64 sessioni | nostro |
| Prodotti esauriti in evidenza | presenti | nostro |
| Foto prodotto | 49 su 95 ne hanno **una sola** | nostro (shooting) |
| Link in bio | passa da Linktree e porta alla home | nostro |
| Spedizione | **già scesa a 4,99 €** da inizio settembre. Soglia gratuita da riconfermare | fatto, soglia da decidere insieme |
| Omaggi ai creator non taggati | sporcano tutti i numeri di vendita | nostro |
| Pezzi unici | 16 prodotti con 1 sola unità | del negozio, ma dobbiamo saperlo prima di spingerli |
| Registrazione sessioni (Clarity o simili) | non installata | nostro |

Sul Clarity: con 13 checkout abbandonati su 13, **avere le registrazioni delle sessioni ci
avrebbe detto in mezza giornata dove si fermano.** Va installato adesso, costa zero.

---

## 7. La fiducia, che è il pezzo che non stiamo affrontando

Il negozio è conosciuto a Chiuduno. Online è **un nome mai sentito** che chiede la carta di
credito su un sito nuovo di due mesi, senza recensioni prodotto, senza una pagina resi e con una
sola foto per prodotto.

I 13 checkout abbandonati possono benissimo essere questo.

Cosa lo sposta davvero, in ordine di efficacia:

1. **Far vedere il magazzino, le spedizioni, i pacchi che partono.** È il contenuto che dice
   "esistiamo davvero" ed è quello che oggi non stiamo girando per niente
2. **Recensioni sui prodotti**, chieste a chi ha comprato in negozio
3. **Mostrare persone vere che ricevono il pacco a casa**
4. **Dirlo nei video**: che il sito esiste, che si ordina da lì, che arriva in 48 ore. Oggi la
   frase è "link in bio" e basta, e non dice niente a chi non ci conosce

Va messo nel piano editoriale come una **rubrica fissa**, non come un contenuto ogni tanto:
almeno un contenuto su cinque deve parlare dell'e-commerce, non di un prodotto.

---

## 8. Caricare l'abbigliamento in fretta, e la domanda su Danea

Decisione presa il 23/09: si prova il percorso corto. **I capi che Chiara mostra nei video
vengono caricati subito, non alla fine del mese.** Il flusso diventa:

> Chiara gira il capo → ci manda **subito** le foto → noi lo carichiamo lo stesso giorno →
> il video esce con il link che punta a quel prodotto.

È anche il modo più rapido per avere una risposta alla domanda che conta: **se un capo è
acquistabile nel momento in cui il video gira, si vende?** Oggi non lo sappiamo, perché non è
mai successo.

Quello che serve da loro è solo una cosa, e va chiesta in modo semplice: **foto del capo e
prezzo, il giorno stesso.** Non servono schede, non serve descrizione, le scriviamo noi.

### La domanda: colleghiamo i nuovi capi a Danea EasyFatt?

**No, non i capi. Non adesso.** Il ragionamento:

- L'abbigliamento **ruota in fretta e spesso è in taglia unica o in due pezzi**. Il tempo di
  anagrafica su Danea per ogni capo è sproporzionato rispetto a quanto quel capo resta in
  magazzino
- **Con due o tre ordini in dodici settimane, la riconciliazione manuale costa niente.** Arriva
  un ordine, si scarica a mano da Danea. Il rischio di doppia vendita su un pezzo unico esiste,
  ma con questi volumi è teorico
- Il collegamento Danea ha senso dove ha senso oggi: **profumi, skincare, capelli**, cioè
  referenze stabili, riassortite, con giacenze vere. Lì resta

**Quando si cambia idea**: quando gli ordini online superano i cinque a settimana, o quando un
capo viene venduto due volte perché nessuno ha aggiornato la giacenza. A quel punto il
collegamento diventa conveniente e si fa.

**Una cautela sui pezzi unici**, che è il vero rischio del caricamento manuale: se un capo è in
un pezzo solo e il video funziona, il primo ordine lo esaurisce e tutti gli altri trovano "non
disponibile". Su quei capi conviene mettere la giacenza reale e controllarla il giorno dopo
l'uscita del video.

## 9. Priorità, in ordine

**Oggi**

1. **Ordine di prova sul sito con carta vera.** Verificare che si possa pagare
2. Verificare che Shopify Payments e PayPal siano attivi e collegati al conto giusto
3. Installare Microsoft Clarity

**Questa settimana**

4. Caricare l'abbigliamento, partendo dai capi già mostrati nei video di settembre
5. Togliere "Estate" dalla vetrina e **creare la collezione nuova di stagione** (nome da
   concordare con Chiara: "Autunno", "Nuovi arrivi" o come la chiamano loro in negozio).
   Nascondere gli esauriti dalla home
6. Pagina spedizioni e resi + FAQ
7. Cambiare il link in bio: **link diretto al prodotto del video**, non Linktree, non homepage
8. Chiedere a Chiara i documenti per TikTok Shop e chiudere la pratica originalità
9. **Taggare gli ordini omaggio** già fatti e stabilire la regola per i prossimi, così i numeri
   tornano leggibili
10. Aprire il flusso "foto il giorno stesso → prodotto online lo stesso giorno" con Chiara, e
   caricare per primi i capi dei video di settembre che hanno performato meglio

**Entro due settimane**

11. Confronto prezzi sui primi dieci prodotti per sessioni contro i concorrenti online
12. Automazione DM su Instagram: commento con parola chiave → link diretto al prodotto.
   **È qui che va messo lo sforzo, non nel far funzionare TikTok**: su Instagram c'è il
   pubblico e il percorso è accorciabile da noi, su TikTok il blocco dipende da una pratica
   che non controlliamo.
   **Strumento**: ManyChat non regge sul nostro volume di messaggi, l'alternativa è **Open
   Reply**, da attivare. Fino ad allora **non va nominata nessuna automazione nei documenti al
   cliente**: è una cosa che avremmo già dovuto avere, e prometterla per nome mette in luce il
   ritardo. Nella versione cliente si parla di prove sul percorso
13. Recensioni prodotto attivate
14. Decisione sulla soglia di spedizione gratuita, ora che il costo è sceso a 4,99 €
15. Seconda foto sui prodotti più visti

**Nel piano editoriale, da subito**

16. Una rubrica fissa sull'e-commerce: magazzino, pacchi, spedizioni, clienti che ricevono
17. Smettere di spingere pezzi unici nei contenuti, o metterli in giacenza reale e controllarli
   il giorno dopo l'uscita
18. **Più contenuti**: con il catalogo che finalmente coprirà la moda, il limite torna a essere
   la produzione

---

## 10. Come lo raccontiamo al cliente

La versione per Chiara e Andrea va riscritta, non tagliata. Tre regole:

**Quello che resta fuori**: l'elenco delle cose nostre non fatte (FAQ, resi, Estate, foto,
Linktree, Clarity). Quelle non si annunciano, si sistemano prima della riunione. Se alla
riunione sono già fatte, diventano "abbiamo lavorato su questo", e la conversazione cambia
completamente.

**Quello che va detto, perché è vero e li riguarda**: i prodotti che generano più
visualizzazioni non sono acquistabili online, e serve il loro aiuto per caricarli in fretta. Il
pubblico c'è e dice chiaramente cosa vuole. TikTok Shop è bloccato su una verifica documentale
che possono sbloccare solo loro. Il prezzo di alcuni prodotti va confrontato con il mercato.

**Quello che va detto con attenzione**: lo zero. Non "il sito non ha venduto niente", ma il
percorso: dodici settimane, 2.125 visite, 41 carrelli, e stiamo verificando un possibile
problema tecnico sul pagamento. Il numero non si nasconde, si accompagna con la causa e con
l'azione già in corso.

Da dire anche, perché è una cosa fatta e va incassata: **la spedizione è già scesa da 7,99 a
4,99 €** da inizio settembre. È l'unico intervento sul funnel già in produzione.

**Prima della riunione vanno chiusi i punti 1-8.** Presentare questo documento con la vetrina
ancora su "Estate" è il modo più veloce per perdere la stanza.
