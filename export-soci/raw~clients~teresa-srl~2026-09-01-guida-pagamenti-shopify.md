# Teresa S.r.l. — Guida "Come attivare i pagamenti su teresachiuduno.it"

> **Fonte**: `allegati/2026-09-01-guida-pagamenti-shopify.docx`, documento operativo scritto
> da Veloce Digital per il cliente. Destinatari: **Chiara e Andrea**.
>
> ⚠️ **CREDENZIALI RIMOSSE DA QUESTA TRASCRIZIONE.** Il documento originale contiene email e
> **password in chiaro** dell'account Shopify del cliente. Non vanno replicate nel wiki.
> Vedi la nota di sicurezza in fondo.
>
> Doppio valore: e' la fonte sul setup pagamenti/spedizioni di Teresa, ed e' il **primo
> esempio di deliverable "guida operativa per il cliente"** prodotto da Veloce, riusabile
> come template.

---

## A chi serve la guida

Guida passo passo per Chiara e Andrea, per attivare i pagamenti con carta e PayPal sul sito.
Riferimento di supporto: Davide, 331 204 3165.

## Parte 1 — Accedere a Shopify

1. Andare su `www.shopify.com/it`, cliccare "Accedi" in alto a destra
2. Inserire le credenziali del negozio (**account: `teresachiudunoshop@gmail.com`, password
   nel documento originale, non riportata qui**)
3. Shopify invia un codice di sicurezza a 6 cifre alla mail del negozio. Nota nel documento:
   se non si ha accesso a quella casella, va aggiunta come account Google sul telefono, perche'
   **su quella mail arrivano anche gli ordini** e servono le notifiche attive
4. Una volta dentro, andare in "Settings" (icona ingranaggio in basso a sinistra)

## Parte 2 — Attivare i pagamenti

**Percorso**: Settings > Payments.
Link diretto: `https://admin.shopify.com/store/teresachiuduno/settings/payments`

**Pagamenti con carta (Shopify Payments / Stripe)**: pulsante "Complete setup" / "Attiva
Shopify Payments". Richiede dati aziendali (Teresa S.r.l., P.IVA, indirizzo), dati bancari
(IBAN del conto del negozio), documento d'identita' del titolare.

> Nota esplicita nel documento al cliente: "Questi dati li inserite voi direttamente. Davide
> non vede ne' tocca le vostre credenziali bancarie." Buona pratica di delimitazione delle
> responsabilita', da riusare nei documenti futuri.

**PayPal**: sezione PayPal in Payments, "Activate PayPal", accesso all'account PayPal
aziendale o creazione.

Risultato: i clienti possono pagare con carta di credito/debito (Visa, Mastercard) e PayPal.
I pagamenti arrivano sul conto indicato in configurazione.

## Parte 3 — Spedizioni (gia' configurate da Veloce)

| Importo ordine | Costo spedizione |
|---|---|
| Sotto 79,99 € | 7,99 € |
| Da 79,99 € in su | Gratuita |

## Parte 4 — Vedere gli ordini

Gli ordini arrivano in due posti: sulla mail del negozio (da aggiungere al telefono con
notifiche attive) e nella sezione "Orders" del pannello Shopify.

## Contatti in calce

Davide Cuelli, Veloce Digital. WhatsApp 331 204 3165, Instagram @veloce_it.

---

## Nota di sicurezza (aggiunta in fase di ingest, non presente nell'originale)

Il file `.docx` originale distribuito al cliente contiene la **password Shopify in chiaro**.
Rischi: il documento circola via email/WhatsApp, resta nei backup dei destinatari e non e'
revocabile. Azioni consigliate, da valutare con Davide:

- cambiare la password dell'account Shopify di Teresa e non ricondividerla in un documento
- passare a inviti Shopify per utente (staff account) invece della condivisione dell'account
  unico del negozio, cosi' ogni persona ha le proprie credenziali e l'accesso e' revocabile
- se serve trasmettere una credenziale una tantum, usare un canale con scadenza, non un
  allegato permanente
- nel wiki e nei suoi `raw/` non va mai copiata una credenziale in chiaro

L'allegato binario originale resta in `allegati/` per fedelta' della fonte, ma la password non
va propagata in nessuna pagina del wiki.
