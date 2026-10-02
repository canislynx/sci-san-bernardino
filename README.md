# Nuovo sito — Scuola Svizzera di Sci e Snowboard San Bernardino

Sito statico (HTML + CSS + JavaScript, nessun framework): si può caricare così com'è su qualsiasi hosting.

## Pagine

| File | Contenuto (corrisponde al menu del vecchio sito) |
|---|---|
| `index.html` | Home: hero, news ticker, chi siamo, corsi, ultime news, meteo + webcam |
| `info.html` | Chi siamo · Sci Pian Cales e Confin (skipass) · Piste sci di fondo · Escursioni/Sentieri invernali · Noleggio materiale · Mappa |
| `corsi.html` | Riservazioni/Corsi: collettivi, lezioni private, snowboard, fondo, livelli Swiss Snow League, maestri |
| `gare.html` | Info e tariffe gare · Programma gare · Risultati gare (PDF) |
| `news.html` | Bacheca di tutte le news, con filtri |
| `galleria.html` | Galleria foto con lightbox + link Instagram |
| `webcam.html` | Webcam live + archivio orario, meteo live, bollettino valanghe, stato piste (Intermaps) |
| `sostenitori.html` | Sponsor |
| `downloads.html` | Formulario iscrizione gare, programmi della stagione, risultati |

## Come aggiornare

- **Aggiungere una news**: aprire `assets/js/data.js` e inserire un nuovo oggetto **in cima** alla lista `NEWS`.
  Mettere l'immagine in `assets/img/news/` e una versione piccola (~600 px) in `assets/img/news/thumb/`.
  Le news compaiono automaticamente in home, nel ticker e nella bacheca.
- **Aggiungere foto alla galleria**: copiare le foto in `assets/img/galleria/` (+ miniatura in `thumb/`) e aggiungere il nome alla lista `GALLERY` in `data.js`.
- **Menu e footer**: sono definiti una sola volta in `assets/js/main.js` (`NAV`, `renderFooter`).
- **Colori**: variabili in cima a `assets/css/style.css` (`--red`, `--blue`, `--yellow`).

## Anteprima locale

```bash
python3 -m http.server 8642
```

poi aprire http://localhost:8642

## Note

- Le immagini originali scaricate dal vecchio sito (alta risoluzione) sono in `_originali/` e non servono per la pubblicazione.
- Webcam, meteo live (Open-Meteo), stato piste (Intermaps) e prenotazioni (skischool.shop) sono servizi esterni.
- Le tariffe sono state trascritte dai volantini 2025–2026: conviene ricontrollarle prima della pubblicazione.
