---
type: playbook
tags: [preventivi, commerciale, template]
created: 2026-09-01
updated: 2026-09-01
---

# Playbook — Costruire un preventivo

Regole di principio (garanzia, floor, fiscalità) sono in
[[../agenzia/pricing]]. Questa pagina copre come tradurle in un documento concreto.

## Struttura visiva consigliata

- Ancora con un prezzo barrato più alto sopra il tier consigliato
- Tier centrale evidenziato in giallo (palette in [[../agenzia/identita]]),
  etichetta **"IL NOSTRO CONSIGLIO"**
- Slide dedicata alla garanzia dopo i piani ("La nostra garanzia" / "Noi ci
  mettiamo la faccia"), sfondo diverso, cifra 1.000.000 in evidenza se applicabile
  — vedi [[../agenzia/pricing#La garanzia 1M di views in 90 giorni]]
- Condizioni della garanzia in piccolo ma visibili, non nascoste

## Formato e strumenti

- Deliverable: PowerPoint/PDF tramite **Claude Design**
- **Sempre allegare fisicamente `logoVeloce2024v4.png`** al prompt, vedi
  [[../agenzia/identita#Promemoria operativo permanente]]
- Template visivo di riferimento: il preventivo finalizzato di
  [[../clients/fabio-sirigu/overview|Fabio Sirigu]]

## Esempio di struttura tier realizzata (proposta ADV)

- **Contenuto** — entry, senza garanzia
- **Crescita** — 1.500€, con garanzia
- **Sistema** — 2.200€, con garanzia

## Benchmark di mercato: passare sempre dal calcolatore

Prima di mandare qualsiasi preventivo, far girare il perimetro nel modello di pricing del
**MEx Price Calculator**, i cui coefficienti reali sono estratti e archiviati in
`raw/agency/2026-09-01-calcolatore-mex-preventivi.md`.

Serve a due cose diverse:

1. **Controllo di sanita' sul nostro numero.** Sul contratto Teresa ha rivelato che eravamo a
   circa meta' del minimo di mercato e sotto il nostro stesso floor, vedi
   [[../output/benchmark-pricing-teresa]].
2. **Argomento di terze parti in trattativa.** E' un calcolatore pubblico di un altro operatore:
   quando il cliente dice che costa troppo, il numero non lo diciamo noi. E' la leva
   **Credibility** di [[../concepts/framework/spcl-hormozi]].

> ⚠️ Attenzione: lo strumento e' pubblico e ha una modalita' **"Ho ricevuto un preventivo"**.
> Un cliente puo' usarlo per verificare noi. Meglio conoscerlo prima di lui.

### Le sei dimensioni di prezzo, e quali ci mancano

Il modello moltiplica sei fattori: profilo (freelance 1,00 contro agenzia 1,45), posizionamento
(0,75 / 1,00 / 1,35 / 1,70), **complessita' del cliente** (0,80 / 1,00 / 1,30), settore,
**geografia** (province 0,70, grandi citta' nord 1,00, Milano-Roma 1,15) e dimensione azienda.

Due di queste **non le prezziamo affatto** e dovremmo:

- **Complessita' del cliente.** Tante revisioni, urgenze, decisioni condivise fra piu' persone:
  vale un +30%. Oggi lo subiamo gratis. La clausola delle 48h di approvazione tacita nel
  contratto Teresa e' un tentativo di gestirlo, ma non e' prezzato.
- **Geografia.** Tra provincia e Milano c'e' uno spread del 64%. Lavorare su Brescia e provincia
  significa operare strutturalmente nella fascia bassa: e' un argomento per andare a cercare
  clienti fuori zona, non un destino.

### Come costruiscono il range

- **Range, mai prezzo secco.** Motivazione loro: *"il range ti da' margine per negoziare senza
  svendere o sparare troppo alto"*. Coerente con il nostro
  [[#Struttura visiva consigliata|tier centrale consigliato]].
- **Il massimo e' compresso a min x 1,25.** Range stretti, che comunicano competenza. Un range
  troppo largo dice che non si sa cosa si sta facendo.
- **Pavimenti per servizio**, sotto cui non si scende mai qualunque sia il moltiplicatore. E'
  la stessa logica del nostro floor a 120€/video, vedi [[../agenzia/pricing#Pricing floor]].
- **Prezzi sempre al netto**, IVA mostrata a parte.
- **Tariffa oraria derivata**, come controllo di coerenza. Da adottare: se il preventivo diviso
  le ore stimate da' meno di 50€/h per un'agenzia, il prezzo e' sbagliato.
- **Valore annuo esposto**, non solo mensile. Sposta la conversazione dalla rata all'impegno.

### Due argomenti pronti presi dallo strumento

- *"Un social media manager interno a Milano costa all'azienda 2.500-4.000€ al mese lordi."*
  Confronto con il costo del dipendente, riutilizzabile tale e quale.
- *"Il vantaggio di un'agenzia e' il team. Scrivi chi fa cosa (strategist, designer, account):
  giustifica la fee piu' alta."* Nei nostri preventivi i ruoli non compaiono mai, e i soci sono
  tre.

## Da fare prima di inviare un preventivo

Applicare il [[../agenzia/posizionamento#Metodo di ragionamento (istruzione permanente)|metodo di ragionamento]]:
partire dal business del cliente, non dal formato di contenuto.
