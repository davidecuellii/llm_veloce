# MEx Price Calculator — modello di pricing estratto

> **Fonte**: `https://preventivo.marketing-espresso.com/`, calcolatore pubblico di Marketing
> Espresso. Analizzato il 01/09/2026 leggendo il bundle JavaScript dell'applicazione
> (`/assets/index-B68wKKOT.js`), quindi **questi non sono valori stimati: sono i coefficienti
> reali usati dallo strumento**.
>
> Dichiarazione dello strumento stesso: *"Partiamo da prezzi base di mercato per ogni servizio e
> li moltiplichiamo per 4 fattori... Il risultato e' un range realistico, non un numero a caso."*
> Contatore in home: 298 preventivi generati.
>
> **Cosa e': un benchmark di mercato italiano, non una verita'.** E' il listino che un
> concorrente ritiene corretto, ed e' pubblico, quindi **anche i nostri clienti possono usarlo
> per verificare i nostri preventivi**. Lo strumento ha infatti due modalita': "Devo fare un
> preventivo" e "Ho ricevuto un preventivo".

---

## Come funziona il calcolo

```
moltiplicatore = profilo x posizionamento x complessita x settore x geografia x dimensione
se moltiplicatore > 3  ->  3 + (moltiplicatore - 3) x 0.3     (compressione)

servizio ricorrente:
  min = (baseMin + (qty - minQty) x perUnit) x moltiplicatore
  max = (baseMax + (qty - minQty) x perUnit x 1.1) x moltiplicatore
  poi si applica il pavimento: min = max(min, floor), max = max(max, floor x 1.3)

servizio una tantum:
  min = baseMin x moltiplicatore,  max = baseMax x moltiplicatore

infine, su tutto:  se max > min x 1.25  ->  max = min x 1.25
```

Il totale annuo e' `ricorrente x 12 + una tantum`. La tariffa oraria e' derivata dividendo il
ricorrente per le ore stimate. Tutti i prezzi sono **al netto di IVA**, mostrata separatamente
al 22%.

## I sei moltiplicatori

| Dimensione | Valori |
|---|---|
| **Profilo** | freelance `1.00` · agenzia `1.45` |
| **Posizionamento** | entry `0.75` · mid `1.00` · senior `1.35` · premium `1.70` |
| **Complessita' cliente** | tranquillo `0.80` · media `1.00` · impegnativo `1.30` |
| **Geografia** | Milano/Roma `1.15` · grandi citta' nord `1.00` · centro-sud `0.85` · **province `0.70`** |
| **Dimensione azienda** | micro/PMI `0.85` · media impresa `1.00` · corporate `1.25` |

### Settore

| Settore | | Settore | |
|---|---|---|---|
| Luxury | `1.40` | Health & Wellness | `1.05` |
| Finance / Assicurazioni | `1.30` | Travel | `1.05` |
| Automotive | `1.25` | Entertainment / Media | `1.00` |
| Tech / SaaS | `1.20` | Sport | `1.00` |
| Politica / Istituzioni | `1.20` | Pet | `0.95` |
| Fashion / Lifestyle | `1.15` | Food & Hospitality | `0.90` |
| B2B / Industria | `1.15` | Education | `0.90` |
| E-commerce | `1.10` | Personal brand / Creator | `0.85` |
| Immobiliare | `1.10` | **Business locale** | `0.80` |
| | | No profit | `0.75` |

## Prezzi base per servizio

`baseMin` e `baseMax` sono per la quantita' minima. `perUnit` e' il costo di ogni unita'
aggiuntiva. `ore` e' il monte ore stimato per unita', al mese.

| Servizio | Unita' | baseMin | baseMax | perUnit | Pavimento | Ore/unita' |
|---|---|---|---|---|---|---|
| Gestione social | piattaforme | 420 | 660 | 130 | 320 | 10 |
| Produzione grafica | post/settimana | 330 | 540 | 85 | 260 | 5 |
| **Produzione video** | video/settimana | **900** | **1450** | **220** | **650** | 8 |
| Community management | ore/mese (min 4) | 170 | 320 | 15 | 120 | 1 |
| Advertising e media buying | campagne | 320 | 550 | 85 | 250 | 8 |
| Copy per advertising | set/mese | 90 | 170 | 50 | 65 | 2 |
| Content writing | pezzi/mese | 110 | 230 | 75 | 85 | 3 |
| Consulenza e formazione | sessioni/mese | 320 | 580 | 125 | 250 | 2 |
| Influencer e UGC | creator/mese | 190 | 350 | 110 | 140 | 3 |
| **Gestione TikTok Shop** | shop attivi | **280** | **480** | **95** | **200** | 8 |
| WhatsApp Business | canali | 180 | 320 | 60 | 130 | 4 |
| Podcast editing | episodi/mese | 350 | 600 | 150 | 280 | 5 |
| *Analisi strategica* | una tantum | 800 | 1500 | - | - | - |
| *Content strategy operativa* | una tantum | 480 | 850 | - | - | - |

## Cosa lo strumento NON copre

Dichiarato esplicitamente: **SEO, sviluppo web, branding visivo, email marketing.**

E' rilevante per noi: il pacchetto Teresa include la **costruzione e gestione di un e-commerce
Shopify**, che questo calcolatore non prezza affatto. Su quella voce non esiste benchmark qui.

## Note testuali utili prese dallo strumento

- *"Perche' un range e non un prezzo fisso? Perche' ogni progetto e' diverso... Il range ti da'
  margine per negoziare senza svendere o sparare troppo alto."*
- Consiglio per la provincia: *"Se il budget del cliente e' limitato, riduci lo scope (meno
  piattaforme, meno contenuti) anziche' tagliare la tariffa."* Coincide con la nostra regola in
  `playbook/risposte-clienti.md`.
- Consiglio per la provincia: *"In provincia i competitor digitali sono pochi. Puoi posizionarti
  come il riferimento locale senza dover competere sui prezzi al ribasso."*
- Consiglio per Milano/Roma: *"Un social media manager interno a Milano costa all'azienda
  €2.500-4.000/mese lordi. Mostra al cliente che il tuo servizio offre competenze multiple a un
  costo comparabile o inferiore."* Argomento riutilizzabile in trattativa.
- Consiglio per le agenzie: *"Il vantaggio di un'agenzia e' il team. Scrivi chi fa cosa
  (strategist, designer, account): giustifica la fee piu' alta."*
