---
type: protocol
tags: [sync, github, collaboratori]
updated: 2026-10-25
---

# Sincronizzazione con GitHub (collaboratori)

Il Cervello vive su GitHub (`davidecuellii/llm_veloce`). Ogni collaboratore lavora su una copia locale; Davide è l'unico che approva cosa entra in `main`.

- **Inizio sessione**: `/aggiorna` scarica le novità.
- **Fine sessione, se hai prodotto conoscenza durevole** (fatti su clienti, decisioni, lead, learning): applica [[system/persistence]] sui file giusti, poi `/invia-lavoro`.
- Si invia **sempre tramite Pull Request** su un ramo `collab/<nome>-<data>`, mai direttamente su `main`.
- Mai inviare: password, token, codici fiscali, IBAN, file in `raw/` modificati, video pesanti (sono esclusi da `.gitignore`).
- Fatto vs inferenza: indica la fonte (messaggio del cliente, documento, ecc.), così Davide può verificare in revisione.
