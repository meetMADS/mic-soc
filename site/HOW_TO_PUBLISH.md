---
orphan: true
---

# How to publish this course site (≈5 minutes, one time)

The site is a **Jupyter Book** in `site/`, published **free** to **GitHub Pages**
and built automatically by **GitHub Actions**. Your laptop is never the server,
and nothing is built on this machine — GitHub's cloud does it on every push.

## 1. Put the project on GitHub

Pick whichever fits you (this machine has no `git`, so use a dev machine or the web):

- **With git** (on any machine that has it):
  ```bash
  cd MIC-SoC
  git init && git add . && git commit -m "course site"
  git branch -M main
  git remote add origin https://github.com/meetMADS/mic-soc.git
  git push -u origin main
  ```
- **No git:** install **GitHub Desktop** (point-and-click) on a dev machine, or
  create the repo on github.com and use **Add file → Upload files** to drag the
  `MIC-SoC` contents in. (The `.github/workflows/deploy.yml` must be included.)

## 2. Turn on Pages

On github.com: **Repo → Settings → Pages → Build and deployment → Source =
“GitHub Actions.”** That's the only setting you need.

## 3. Push → it builds → it's live

Every push to `main` runs the `deploy-course-site` Action (see the **Actions**
tab). When it's green, your site is at:

```
https://meetmads.github.io/mic-soc/
```

(`site/_config.yml` → `repository.url` is already set to this repo, so the
repo/issue buttons work.) Done — future edits just need a push; the site
rebuilds itself.

> If the Action fails, open the failed run in the **Actions** tab and copy the log;
> the build step (`jupyter-book build site/`) usually points right at the file.

## 4. Add the checkpoint forms (submissions)

1. Create a **Google Form** for a week's checkpoint (a few questions + a
   "paste your repo/notebook link" field).
2. In the form: **Send → `<>` (embed)** → copy the `<iframe …>` snippet.
3. Paste it into that week page's **Checkpoint** section (replace the placeholder
   comment).
4. In the form's **Responses** tab, click the Sheets icon → you now have a
   **mentor dashboard** (one row per submission). Done — no backend, no server.

*(Later upgrade, optional: real logins + a mentor dashboard that unlocks weeks →
a free **Supabase** project. The content pages stay exactly as they are.)*

## 5. Add the remaining weeks

The first two weeks are wired as a pattern. For each new week:

1. Create `site/weeks/wN_topic.md` (copy a wired page; keep the
   **Watch / Read / Do / Checkpoint** structure).
2. Add it to `site/_toc.yml` under `chapters:`.
3. Embed the curated video, summarise the reading (link the theory PDF), point to
   that week's notebooks, and paste the checkpoint form.

The course content already exists in `week_*/` (theory `.tex`, notebooks,
readmes) — building out the site is mostly moving that into week pages.

## 6. Show notebook outputs (optional)

The build currently **does not run** notebooks (fast, light). To render figures:

- set `execute: execute_notebooks: "auto"` in `site/_config.yml`, and
- add the libraries (e.g. `numpy`, `matplotlib`, `scipy`) to `site/requirements.txt`.

The Action will then execute the notebooks during the build and bake the plots in.

---

### Why GitHub Pages (vs alternatives)
- **GitHub Pages + Actions** (this setup): free, auto-build on push, no local
  tools. Best fit since the content is already a repo.
- **Netlify / Cloudflare Pages / Vercel:** also free, but the simplest flows want
  a local `jupyter-book build` first (needs Python on a dev machine). Use if you
  prefer their dashboards.
