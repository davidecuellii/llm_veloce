---
description: Salva e invia a Davide gli aggiornamenti fatti al Cervello (Pull Request su GitHub)
---

Il collaboratore non è un programmatore: parla in italiano semplice, spiega ogni passaggio in una riga.

1. Esegui `git status --short`. Se non ci sono modifiche, dillo e fermati.
2. Mostra l'elenco dei file nuovi/modificati in parole semplici (es. "aggiornato lo stato del cliente X").
3. Controllo riservatezza: non devono esserci password, token, chiavi API, codici fiscali, IBAN o dati personali. Se ne trovi, NON procedere: escludili e spiega perché.
4. Non toccare mai file in `raw/` già esistenti (sono immutabili): si possono solo aggiungere file nuovi.
5. Chiedi conferma: "Invio questi aggiornamenti a Davide?". Procedi solo con un sì.
6. Se sei su `main`, crea un ramo: `git switch -c collab/<nome>-<AAAA-MM-GG>` (nome = `git config user.name` in minuscolo, senza spazi). NON fare mai push su `main`.
7. `git add -A`, commit con messaggio chiaro in italiano (cosa è cambiato e perché), poi `git push -u origin HEAD`.
8. Apri la Pull Request: `gh pr create --fill --base main` (titolo e descrizione in italiano, elenco delle modifiche). Se `gh` non è configurato, spiega cosa manca (vedi sezione "Invio del lavoro" di GUIDA-COLLABORATORI.md).
9. Mostra il link della Pull Request e di' che Davide la vedrà e la approverà: da quel momento le modifiche entrano nel Cervello di tutti.
10. Se il push è rifiutato (permessi), di' alla persona di scrivere a Davide per essere aggiunta come collaboratore. Non provare altri metodi.
