---
type: client
status: active
tags: [teresa-srl, script, mese-2, lpdo, profumeria]
created: 2026-09-01
updated: 2026-09-01
---

# Script — Tris LPDO, "ma questi profumi durano?"

**Stato**: bozza, da approvare con la proprieta'.
**Format**: [[../../../concepts/formati/problema-prodotto-prezzo]] (derivato da `granato_shop`,
364K su un prodotto da 12€).
**Prodotto**: mousse doccia + crema corpo + acqua profumata LPDO, stessa fragranza.
Richiesto esplicitamente dalla proprieta' nel brief del 29/08.
**Durata target**: 25-30 secondi.
**Location**: espositore profumi, poi bancone.
**In scena**: Chiara e Anna. Il RAGAZZO non serve.

---

## Perche' questo script per primo

1. **E' eseguibile subito.** I profumi sono gia' a catalogo, a differenza di abbigliamento e
   borse. Non aspetta il caricamento dello shop.
2. **L'hook e' una loro obiezione vera**, raccolta nel modulo di onboarding e mai usata in un
   contenuto: *"ma questi profumi durano?"*.
3. **E' un bundle**, quindi alza lo scontrino medio. Se i tre pezzi insieme superano i 79€ la
   spedizione diventa gratuita, e questo va detto nel video: risolve in un colpo il problema
   descritto in [[../../../output/diagnosi-funnel-teresa]].
4. Il doppio senso richiesto dalla proprieta' resta, ma **in chiusura**, dove funziona.
5. **Attiva due leve SPCL su quattro** (vedi
   [[../../../concepts/framework/spcl-hormozi]]): **Power**, perche' il consiglio sulla pelle
   asciutta e' una micro-vittoria che chi guarda puo' verificare da solo domani mattina, e
   **Likeness**, perche' Chiara e Anna parlano invece di recitare una scenetta. E' il primo
   nostro script su questo cliente in cui chi guarda esce con qualcosa di utile anche se non
   compra.

---

## Script

### HOOK (0-3 sec)

Chiara in piedi davanti all'espositore profumi, parla dritta in camera. **Nessun prodotto in
mano.** Tono normale, non urlato.

> **CHIARA:** "Ti profumi la mattina, esci di casa, e alle undici non senti gia' piu' niente."

*(Nota regia: niente stacchi nei primi tre secondi. Il volto e la frase, basta. E' il contrario
di come aprivamo nel mese 1.)*

**Proof, da inserire al secondo 3-4** (aggiunto dopo l'ingest del framework PPP in
[[../../../concepts/framework/spcl-hormozi#PPP: il framework di hook]]). L'hook aveva Promise e
Plan ma non aveva Proof, cioe' non diceva perche' ascoltare proprio loro:

> **CHIARA:** "Vendiamo profumi da vent'anni, quindi fidatevi."

Una riga, detta in fretta, senza enfasi. Serve a chi non conosce il negozio, che e' la
maggioranza di chi vede il reel dalla pagina Esplora.

### IL MECCANISMO (3-10 sec)

Anna entra in campo di fianco a lei.

> **ANNA:** "E poi date la colpa al profumo. Ma il profumo non c'entra niente."
>
> **CHIARA:** "Il problema e' che ve lo spruzzate sulla pelle asciutta. Sulla pelle asciutta il
> profumo non ha niente a cui aggrapparsi, e se ne va in due ore."

*(Regia: qui si puo' mostrare in macro un polso, gesto rapido di spruzzo. Serve un'immagine, non
una spiegazione.)*

### LA SOLUZIONE (10-20 sec)

Anna appoggia i tre prodotti sul bancone, uno alla volta, con tre stacchi netti a ritmo.

> **ANNA:** "Si fa in tre passaggi, tutti della stessa fragranza. Mousse doccia."
> *(stacco)* "Crema corpo."
> *(stacco)* "E sopra, l'acqua profumata."
>
> **CHIARA:** "Uno strato sopra l'altro. Cosi' la fragranza si aggrappa e te la porti dietro
> tutto il giorno, non due ore."

### PREZZO E DOVE (20-26 sec)

**Questa e' la parte che nel mese 1 non c'era, ed e' quella che converte.**

> **CHIARA:** "Il tris completo e' [PREZZO] euro. Lo trovate nel carrello qui sotto,
> [e con il tris la spedizione e' gratis]."

*(La frase tra parentesi quadre va detta **solo se** i tre pezzi insieme superano i 79€. Va
verificato prima di girare, vedi sotto.)*

### CHIUSURA (26-30 sec)

Il doppio senso arriva qui, come premio per chi e' rimasto. Non in apertura.

> **ANNA:** *(sguardo in camera, tono piatto)* "Finalmente qualcosa che dura piu' di due ore."
>
> **CHIARA:** *(la guarda, poi torna in camera)* "Anna. Il profumo."
>
> **ANNA:** "Ho detto il profumo."

*(Regia: chiudere sul nero o sul freeze subito dopo la battuta di Anna. Non aggiungere altro,
non ripetere la CTA. La battuta e' l'ultimo fotogramma.)*

---

## Caption

Format informativo, stile `granato_shop`. Non e' il caso della caption corta: qui
l'informazione e' il punto.

> Ti profumi la mattina e alle undici non senti gia' piu' niente? Non e' colpa del profumo.
>
> Sulla pelle asciutta la fragranza non ha niente a cui aggrapparsi. Il trucco e' stratificare
> la stessa fragranza in tre passaggi:
> 🧴 Mousse doccia
> 🤍 Crema corpo
> ✨ Acqua profumata LPDO
>
> Il tris completo [PREZZO]€. Lo trovi nel link in bio.

Su TikTok: stessa caption, CTA cambiata in "carrello arancione qui sotto", e prodotto agganciato
a TikTok Shop **prima** di pubblicare.

---

## Cosa serve prima di girare

- [ ] **I tre prezzi** (mousse, crema, acqua) e il prezzo del tris. Senza, il format non sta in
      piedi: il prezzo detto ad alta voce e' il suo elemento centrale.
- [ ] **Verificare se il tris supera i 79€.** Se si', la spedizione gratuita entra nello script
      e diventa un argomento di vendita. Se no, la frase si taglia.
- [ ] **Quali fragranze esistono in tutti e tre i formati.** Il concetto della stratificazione
      regge solo se la stessa fragranza c'e' in tutta la linea.
- [ ] Prodotto caricato su Shopify e su TikTok Shop prima della pubblicazione.
- [ ] **Da quanti anni Teresa vende profumi**, per la riga di Proof. Nel wiki risulta che la
      skincare coreana e' in negozio dal 2019, ma sui profumi non abbiamo la data. Se il numero
      non e' certo, la riga si taglia: una credenziale inventata brucia esattamente la leva che
      dovrebbe accendere.

## Da misurare dopo

Retention al secondo 3 e al secondo 20 (il punto in cui parte il prezzo), commenti che
riprendono l'obiezione, e soprattutto se il tris viene acquistato come bundle o a pezzi
singoli.

## Collegamenti

[[../idee]] · [[../formati]] · [[../tono-di-voce]] ·
[[../../../concepts/formati/problema-prodotto-prezzo]]
