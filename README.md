# Talking Wall — True or False Search

A tiny, mobile-friendly, dependency-free web app for searching a set of
true/false questions. Type any word or phrase to filter instantly, filter by
True/False, and press <kbd>Esc</kbd> to reset the search box.

## Files
- `index.html` — the whole app (HTML + CSS + JS, no build step, no dependencies)
- `questions.js` — the question data, generated from `questions.txt`
- `questions.txt` — the source list (`TRUE`/`FALSE` prefix per question)
- `build.js` — regenerates `questions.js` from `questions.txt`

## Editing questions
1. Edit `questions.txt`. Each question starts with `TRUE ` or `FALSE `.
   Long questions can wrap onto extra lines; blank lines separate entries.
2. Regenerate the data:
   ```
   node build.js
   ```
3. Commit and push.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
python3 -m http.server
```
then visit http://localhost:8000

## Deploy to GitHub Pages
1. Push these files to a GitHub repo.
2. Settings → Pages → Build and deployment → Source: **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. Your app will be live at `https://<user>.github.io/<repo>/`.
