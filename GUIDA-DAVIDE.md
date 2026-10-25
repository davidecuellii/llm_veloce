# Guida per Davide: gestire gli aggiornamenti dei collaboratori

## Una volta sola
1. **Aggiungere un collaboratore**: https://github.com/davidecuellii/llm_veloce/settings/access → **Add people** → inserisci il suo nome utente GitHub → **Add**. Lui riceve una email e deve accettare.
2. **Proteggere `main`** (consigliato, così nessuno scrive direttamente): Settings → **Branches** → **Add branch ruleset**/**Add rule** su `main` → attiva **Require a pull request before merging** → Salva.
3. Perché i collaboratori possano scrivere il repo può essere anche privato: aggiungerli come collaboratori basta (e dopo che torna privato è **necessario**).

## Ogni volta che arriva un lavoro
1. Vai su https://github.com/davidecuellii/llm_veloce/pulls (o ricevi la notifica email).
2. Apri la Pull Request → scheda **Files changed**: leggi cosa è stato aggiunto/modificato (verde = aggiunto, rosso = tolto).
3. Se va bene: **Merge pull request** → **Confirm merge**. Se no: lascia un commento o **Close**.
4. Sul tuo computer, in GitHub Desktop: **Fetch origin** poi **Pull origin** (oppure nel Terminale `git pull`). Ora il tuo Cervello ha anche il lavoro degli altri.

## Il tuo lavoro
Anche tu, dopo aver aggiornato il Cervello: GitHub Desktop → scrivi un riassunto → **Commit to main** → **Push origin**.

## Regola d'oro
Prima di fare il merge controlla che non entrino dati personali (codici fiscali, IBAN, password) o file in `raw/` modificati.
