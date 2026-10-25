# Guida per i collaboratori: come usare il Cervello di Veloce Digital

Questa guida è per chi **non è un programmatore**. Non serve sapere niente di codice:
bastano 20 minuti e di seguire i passaggi nell'ordine. Dove vedi un riquadro grigio,
quello è un comando da **copiare e incollare** nel Terminale.

---

## 1. Che cos'è e a cosa serve

Il "Cervello di Veloce Digital" è una cartella di appunti (clienti, lead, playbook,
strategie, preventivi) che Claude legge per lavorare come se conoscesse l'agenzia da anni.
Quando la scarichi sul tuo computer e ci avvii Claude Code, Claude:

- conosce i clienti, i prezzi, i metodi di lavoro dell'agenzia;
- ti aiuta a scrivere proposte, script, piani contenuti, analisi;
- ritrova le informazioni giuste senza che tu debba cercarle.

Tre parole che incontrerai:

- **GitHub**: il sito dove è custodita la cartella online.
- **Git / clone**: il programma e il comando che scarica una copia della cartella sul tuo computer.
- **Claude Code**: il programma che fa lavorare Claude dentro quella cartella.

> ⚠️ **Riservatezza.** Il contenuto riguarda clienti reali. Non girare il link a
> persone esterne all'agenzia e non pubblicare il contenuto altrove.

---

## 2. Cosa ti serve prima di iniziare

1. Un computer **Mac** (la guida usa il Mac) o **Windows 10/11**.
2. Una connessione internet.
3. Un account **Claude a pagamento** (piano Pro o Max) su <https://claude.ai>. Se non ce l'hai, chiedilo a Davide.
4. Il link del progetto (te lo manda Davide):
   **https://github.com/davidecuellii/llm_veloce**

Non ti serve un account GitHub per scaricare la cartella, finché è pubblica.

---

## 3. Aprire il Terminale

Il Terminale è una finestra dove si scrivono comandi.

**Su Mac**
1. Premi `Cmd + Spazio` (apre la ricerca).
2. Scrivi `Terminale` e premi Invio.
3. Si apre una finestra bianca o nera con una riga di testo: è normale.

**Su Windows**
1. Premi il tasto Windows.
2. Scrivi `PowerShell` e premi Invio.

**Come si usa:** incolli il comando (`Cmd + V` su Mac, `Ctrl + V` su Windows) e premi **Invio**.
Poi aspetta che la scritta si fermi e torni a comparire il cursore: può volerci un minuto.
Non chiudere la finestra mentre lavora.

---

## 4. Passo 1: installare Git

Controlla se ce l'hai già. Nel Terminale incolla:

```bash
git --version
```

- Se risponde con un numero (es. `git version 2.39`), **Git c'è già**: passa al Passo 2.
- **Su Mac**, se compare una finestra che chiede di installare gli "strumenti da riga di comando", clicca **Installa**, accetta, aspetta la fine (anche 10 minuti) e poi ripeti il comando.
- **Su Windows**, se dice che il comando non esiste, scarica Git da <https://git-scm.com/download/win>, apri il file scaricato e premi sempre **Next** fino a **Install**. Poi **chiudi e riapri PowerShell**.

---

## 5. Passo 2: installare Claude Code

**Su Mac** incolla:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Su Windows (PowerShell)** incolla:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Quando finisce, **chiudi il Terminale e riaprilo**. Poi verifica:

```bash
claude --version
```

Deve comparire un numero di versione. Se dice "command not found", chiudi e riapri il
Terminale una volta ancora; se persiste, vedi la sezione "Se qualcosa non funziona".

(Installazione ufficiale e aggiornata: <https://docs.claude.com/en/docs/claude-code/setup>)

---

## 5-bis. Alternativa senza Terminale: l'app Claude

Se il Terminale ti spaventa, puoi usare l'app **Claude** per computer
(<https://claude.ai/download>), scheda **Code**, e scegliere come cartella quella scaricata
al Passo 3 (puoi scaricarla anche come ZIP, vedi sotto). Il resto della guida (Passo 4 in poi)
funziona uguale.

---

## 6. Passo 3: scaricare il Cervello (git clone)

Prima scegli dove tenere la cartella. Consigliamo la Scrivania (Desktop). Nel Terminale:

**Mac**
```bash
cd ~/Desktop
```

**Windows**
```powershell
cd $HOME\Desktop
```

Poi scarica il progetto:

```bash
git clone https://github.com/davidecuellii/llm_veloce.git
```

Vedrai scorrere righe tipo `Receiving objects: 100%`. Quando finisce, sul Desktop trovi una
cartella **llm_veloce**. Il comando `git clone` ha fatto solo questo: una copia della cartella
online sul tuo computer.

**Alternativa senza comandi:** apri il link del progetto nel browser, clicca il bottone verde
**Code** → **Download ZIP**, poi fai doppio clic sul file scaricato per estrarlo sul Desktop.
(Con lo ZIP non potrai usare gli aggiornamenti del Passo 6: dovrai riscaricarlo.)

---

## 7. Passo 4: avviare Claude dentro la cartella

Entra nella cartella:

```bash
cd llm_veloce
```

Avvia Claude Code:

```bash
claude
```

**La prima volta:**
1. Claude ti chiede di scegliere lo stile del tema: premi Invio per il predefinito.
2. Si apre il browser per **accedere con il tuo account Claude**: fai login e autorizza.
3. Torna al Terminale. Ti chiede se **ti fidi di questa cartella** ("Do you trust the files in this folder?"): scegli **Yes**, perché è la cartella dell'agenzia.

Fatto: Claude ha **già letto da solo** le istruzioni dell'agenzia (il file `CLAUDE.md`).
Non devi "inizializzare" nulla.

**Verifica che funzioni.** Scrivi:

```
Chi siamo come agenzia e quali sono le priorità attuali? Rispondi in 5 righe.
```

Se Claude risponde parlando di Veloce Digital, tutto è a posto.

---

## 8. Come lavorarci ogni giorno

Parla a Claude in italiano, come a un collega. Esempi:

- `Riassumimi lo stato del cliente Pakoraban.`
- `Prepara una bozza di proposta per un nuovo lead nel settore ristorazione.`
- `Scrivi 3 script video da 30 secondi per il cliente X, nel nostro tono di voce.`
- `Cosa abbiamo imparato dai contenuti dei clienti già seguiti?`

Regole pratiche:

- Sii specifico: nome del cliente, obiettivo, formato che vuoi.
- Se Claude chiede un permesso per leggere o scrivere un file, leggi cosa vuole fare e rispondi **Yes** solo se ha senso.
- Per uscire scrivi `/exit` oppure premi `Ctrl + C` due volte.
- Per riprendere l'ultima conversazione: `claude --continue`.
- Se qualcosa che Claude scrive su un cliente ti sembra sbagliato, **verificalo** con Davide prima di usarlo.

---

## 9. Tenere il Cervello aggiornato (ogni mattina)

Il Cervello cresce: Davide e gli altri colleghi lo aggiornano. **Prima di iniziare a lavorare**
avvia Claude dentro `llm_veloce` e scrivi:

```
/aggiorna
```

Claude scarica le novità e ti riassume cosa è cambiato. (Se preferisci il Terminale:
`cd ~/Desktop/llm_veloce` poi `git pull`.)

---

## 10. Far crescere il Cervello: inviare il tuo lavoro a Davide

Mentre lavori con Claude, escono informazioni utili (un cliente ha deciso qualcosa, un nuovo
lead, una cosa imparata). Questo deve entrare nel Cervello **anche per Davide e per gli altri**.
Funziona così, e ti serve un account GitHub (una volta sola):

### 10.1 Una volta sola: account e accesso

1. Crea un account gratuito su <https://github.com/signup> (se non ce l'hai). Usa la tua email di lavoro.
2. Scrivi a Davide **il tuo nome utente GitHub**: lui ti aggiunge come collaboratore. Riceverai una email di invito: apri il link e clicca **Accept invitation**.
3. Avvia Claude dentro `llm_veloce` e scrivi: `Configura GitHub per inviare il mio lavoro`.
   Claude ti guida: ti dà un **codice di 8 caratteri**, apri <https://github.com/login/device>, incolla il codice, accedi e autorizza. Non devi scrivere password nel Terminale.

### 10.2 Ogni volta che hai lavorato

1. Chiedi a Claude di salvare quello che è emerso nel Cervello, ad esempio:
   `Aggiorna il Cervello con quello che abbiamo deciso oggi sul cliente X.`
2. Controlla che quanto scritto sia corretto (Claude ti dice quali file ha modificato).
3. Scrivi:

```
/invia-lavoro
```

Claude controlla che non ci siano dati personali o password, ti chiede conferma e invia gli
aggiornamenti a Davide come **Pull Request** (una "proposta di modifica"). Ti mostra un link.
**Non vai mai a modificare direttamente la versione principale:** Davide guarda la proposta
e la approva con un clic; da quel momento entra nel Cervello di tutti.

### 10.3 Cosa NON inviare
Password, token, codici fiscali, IBAN, dati personali di privati, video pesanti. Non modificare
file già presenti in `raw/` (sono documenti originali): si possono solo aggiungere nuovi.

---

## 10-bis. Altre cose da sapere

- I **video e le animazioni pesanti non sono inclusi**: restano sul computer di Davide.
- Alcuni documenti con dati personali non sono nella versione condivisa.
- Se `/aggiorna` si lamenta di "modifiche non inviate", usa prima `/invia-lavoro`.
- Se il Cervello ti sembra aver capito male un cliente, **verifica con Davide** prima di usarlo.

---

## 11. Se qualcosa non funziona

| Cosa vedi | Cosa fare |
|---|---|
| `git: command not found` | Rifai il Passo 1 e riapri il Terminale. |
| `claude: command not found` | Chiudi e riapri il Terminale; se persiste rifai il Passo 2. |
| `Repository not found` al clone | Controlla di aver copiato bene il link. Se è corretto, il progetto non è più pubblico: chiedi a Davide. |
| Il login a Claude non parte | Verifica di avere un piano Pro/Max e riprova con `claude`, poi `/login`. |
| `/invia-lavoro` dice "permission denied" o "403" | Non sei ancora collaboratore: scrivi a Davide il tuo nome utente GitHub e accetta l'invito via email. |
| `No such file or directory` | Sei nella cartella sbagliata: scrivi `cd ~/Desktop/llm_veloce`. |
| Claude risponde in modo generico | Controlla di aver avviato `claude` **dentro** la cartella `llm_veloce`. |

Se sei bloccato, scrivi a Davide con uno **screenshot** della schermata e la riga di errore.

---

## 12. Riepilogo in 5 comandi

```bash
git --version                                            # 1. Git c'è?
curl -fsSL https://claude.ai/install.sh | bash           # 2. installa Claude Code (Mac)
git clone https://github.com/davidecuellii/llm_veloce.git   # 3. scarica il Cervello
cd llm_veloce                                            # 4. entra nella cartella
claude                                                   # 5. avvia Claude
```

Ogni giorno, dentro `llm_veloce`: `/aggiorna` all'inizio, `/invia-lavoro` alla fine.
