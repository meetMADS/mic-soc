# Overview — the two handbooks

This folder holds the two LaTeX documents that together form the
mentee handbook for the project:

| File | Purpose |
|---|---|
| `handbook_main.tex` / `handbook_main.pdf` | **Long Technical Handbook.** Mentee reads this first each week. |
| `syllabus_main.tex` / `syllabus_main.pdf` | **Short Syllabus.** Checklist of topics + curated links per week. |
| `references.bib` | Starter BibTeX (not used directly by the `.tex` files yet; here for mentees' Week-7/8 reports). |
| `sections/`, `handbook_sections/` | Empty, reserved for future per-week splits. |

## How to compile (only the mentor needs to do this)

**On Overleaf:**
1. Zip this `Overview/` folder.
2. overleaf.com → New Project → Upload Project → upload the zip.
3. In the top bar, set Main document to `handbook_main.tex`, click Recompile. Repeat with `syllabus_main.tex`.

**Locally (MikTeX / TeX Live):**
```bash
pdflatex handbook_main.tex && pdflatex handbook_main.tex
pdflatex syllabus_main.tex && pdflatex syllabus_main.tex
```
(Two passes so the table of contents resolves.)

## Mentee instructions (verbatim — copy/paste into a message)

> Every week, do the reading in this order:
>
> 1. **Open `handbook_main.pdf`** and read the relevant week's chapter
>    end-to-end. ~20 min. Gives you the *big picture* and a moderately
>    technical sketch of every term you will encounter that week.
> 2. **Open the week's slide deck** from `slides/` (download from the
>    Drive link in the root `README.md`). Read it linearly.
> 3. **Open `syllabus_main.pdf`** for the curated link list. Pick at
>    most two links per week and read them properly.
> 4. **Do the notebooks and exercises** in `week_N/Readme.md`.
>
> Why this order: it stops you wasting time hopping between random
> search results trying to figure out what a term means before you have
> the big picture.
