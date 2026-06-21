# DaD — DayafterDiet

Diario alimentare e fitness personale.

## Struttura

| Cartella / file | Contenuto |
|-----------------|-----------|
| `/` (root) | Sito web di presentazione (landing) |
| `app/` | Web app DaD (diario, profilo, settimana, …) |
| `mobile/` | Wrapper Android (Capacitor) per Google Play |
| `server/` | Backend Stripe (hosting separato, es. Railway) |

## Anteprima locale

**Landing:**
```bash
python3 -m http.server 8080
```
→ http://localhost:8080

**App:**
```bash
cd app && python3 -m http.server 8081
```
→ http://localhost:8081

## Link online (GitHub Pages)

- **Sito:** https://croccodjllo-blip.github.io/dayafterdiet/
- **App:** https://croccodjllo-blip.github.io/dayafterdiet/app/
- **Login:** https://croccodjllo-blip.github.io/dayafterdiet/app/login.html

I vecchi URL alla root (es. `/login.html`) reindirizzano automaticamente in `app/`.

## Repository

https://github.com/croccodjllo-blip/dayafterdiet
