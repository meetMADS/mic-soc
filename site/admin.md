---
orphan: true
---

# Mentor admin — lock / unlock sections

*This page is a tool for **mentors**. Tick the sections you want to **hide** from
mentees (e.g. release weeks one at a time), then save the file and commit it.*

```{admonition} How locking works (read me once)
:class: important
- **Preview in MY browser** lets you see the lock state instantly — but it only
  affects *your* browser, so you can test safely.
- To change what **everyone** sees, you must **save `locks.json` and commit it**
  (the buttons below make this one step). The live site re-deploys in ~2–3 min.
- This is a **soft lock for pacing**, not security: it hides links and gates the
  page, but a determined mentee could still reach a raw file/PDF URL. For true
  access control you'd need a login backend (ask me — it's a bigger change).
```

<div id="mic-admin">Loading the lock panel…</div>

## The 2-minute workflow

1. Tick/untick sections above (or use **Lock all / Unlock all**).
2. Click **Preview in MY browser** and open a week to confirm it looks right.
3. Click **✎ Edit locks.json on GitHub**, replace the file contents with the JSON
   shown above (use **Copy JSON**), and **Commit changes**.
4. Wait ~2–3 min for the site to rebuild — done. (Click **Turn off preview** so you
   again see exactly what mentees see.)
