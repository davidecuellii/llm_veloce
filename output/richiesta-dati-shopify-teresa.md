# Prompt per la chat con accesso a Shopify — dati Teresa Chiuduno

> Copia tutto quello che c'è sotto la riga e incollalo nell'altra chat.

---

Mi servono i dati di **teresachiuduno.it** (Shopify) per scrivere un report di analisi del
funnel da mostrare al cliente. Ho già il catalogo (103 prodotti, letti via Admin API), quindi
**non servono dati sui prodotti**: mi servono traffico, ordini e canali di vendita.

**Periodo**: dal **1 agosto 2026 a oggi**, con il dettaglio separato di **agosto** e
**1-22 settembre**, così vedo l'andamento mese su mese.

Rispondi in tabelle markdown compatte. **Se un dato non è disponibile o il pannello lo mostra
vuoto, scrivilo esplicitamente** invece di stimarlo: mi serve sapere cosa manca, e un numero
inventato in un report al cliente è peggio di un buco.

## 1. Traffico

- Sessioni totali, per mese e per settimana
- Sessioni per **sorgente** (diretto, social, ricerca, referral, email)
- Dentro il social: **quante da Instagram e quante da TikTok**, separate
- Percentuale di sessioni da **mobile**
- Le **10 pagine più viste** (prodotti e collezioni), con le sessioni di ciascuna

## 2. Funnel di conversione

Il passaggio dove si perde la gente è il cuore del report:

- Sessioni → **visualizzazioni prodotto** → **aggiunte al carrello** → **checkout avviati** →
  **ordini completati**, con il numero assoluto e il tasso di conversione di ogni passaggio
- **Carrelli abbandonati**: quanti e per quale valore
- **Checkout abbandonati**: quanti, e a quale passaggio (informazioni, spedizione, pagamento)

## 3. Ordini

- Numero di ordini, valore totale, **scontrino medio**, per mese
- Per **ogni singolo ordine**: data, valore, canale di provenienza, prodotti acquistati
  (sono pochi, quindi si possono elencare tutti)
- Quanti ordini sono **sopra e sotto i 79,99€**, cioè la soglia della spedizione gratuita
- Quanti hanno pagato i **7,99€ di spedizione**

## 4. Canali di vendita

- Quali **canali di vendita sono attivi e collegati** (Online Store, TikTok Shop, Instagram/
  Facebook shopping, POS in negozio)
- **TikTok Shop**: è collegato? **Quanti prodotti risultano pubblicati** su quel canale?
  Ci sono ordini arrivati da lì?
- **Instagram/Facebook**: il catalogo è collegato e i tag prodotto sono attivi?
- Se c'è il **POS in negozio**: vendite in negozio del periodo (serve per confrontare online e
  fisico, non per altro)

## 5. Ricerche interne al sito

- Le ricerche fatte dagli utenti dentro il sito ("Top online store searches"), con il numero di
  ricerche e **quante hanno dato zero risultati**

È il dato che mi interessa di più dopo il funnel: dice cosa cerca la gente e non trova. Se
compaiono ricerche di abbigliamento, ho la prova che manca proprio quello che il pubblico
chiede.

## 6. Due verifiche secche

- La **prima e unica vendita** registrata (agosto/settembre): data, prodotto, canale, valore
- Le tariffe di **spedizione attualmente configurate**, per confermare che siano ancora
  7,99€ sotto i 79,99€ e gratis sopra

---

Se qualcosa richiede un permesso che non hai, dimmi quale: l'app che uso io ha solo i permessi
sui prodotti (`read_products`), quindi ordini, analytics e canali di vendita posso leggerli
solo da lì.
