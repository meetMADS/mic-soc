---
orphan: true
---

# Mentor setup — login + real gating with Cloudflare (one time, ~15 min)

This moves the live site to **Cloudflare Pages** and puts it behind **Cloudflare
Access**, so visitors must sign in with an **email** (one-time code — no passwords to
hand out). You (the mentor) are detected automatically and see **everything** plus a
**Mentor admin** button; learners see only unlocked sections and cannot unlock
anything.

The code is already in the repo. You only do the dashboard steps below.

## 1. Cloudflare account + API token (5 min)

1. Create a free account at <https://dash.cloudflare.com/sign-up>.
2. **API token:** top-right profile → **My Profile → API Tokens → Create Token →**
   use the **“Edit Cloudflare Pages”** template → **Create** → copy the token.
3. **Account ID:** open **Workers & Pages** → the **Account ID** is on the right
   (copy it).

## 2. Add the two secrets to GitHub (2 min)

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | the token from step 1.2 |
| `CLOUDFLARE_ACCOUNT_ID` | the Account ID from step 1.3 |

## 3. Trigger the deploy (2 min)

Repo → **Actions → “deploy-cloudflare” → Run workflow** (or just push any commit).
It builds the book + PDFs and publishes to Cloudflare. Your site appears at:

```
https://mic-soc.pages.dev
```

(If the project doesn’t exist yet, the deploy creates it. If it errors, create a
Pages project named **`mic-soc`** first: Workers & Pages → Create → Pages.)

## 4. Turn on login (Cloudflare Access) (5 min)

1. In Cloudflare → **Zero Trust** (set a team name if asked; the free plan covers
   up to 50 users).
2. **Access → Applications → Add an application → Self-hosted.**
3. **Application domain:** `mic-soc.pages.dev`.
4. **Add a policy:** Action **Allow**; under *Include* choose **Emails** and list
   every learner’s email **plus your own** (`meet.m.a.smd@gmail.com`).
   *(Or use “Emails ending in” for a whole org domain.)*
5. Save. Set the **session duration** (e.g., 1 week) to control how often people
   re-login.

Now everyone must sign in with a one-time email code. Add/remove learners any time by
editing this policy — that list **is** your access dashboard.

### (Optional) make the admin page hard mentor-only
Add a **second** Access application for path **`mic-soc.pages.dev/admin*`** with a
policy that includes **only your email**. Then nobody but you can even load it.

## 5. Confirm the mentor email

`site/_static/locks.js` has `MENTOR_EMAIL = "meet.m.a.smd@gmail.com"`. If you log in
with a different email, change it there and push.

## 6. Close the public back-door (important)

While GitHub Pages is still on, `https://meetmads.github.io/mic-soc/` serves the
**same content with no login** — a bypass. Once Cloudflare works, turn GitHub Pages
off: repo → **Settings → Pages → Source = None** (or “Unpublish”).

> Want the *source* private too (not just the site)? Make the repo **Private** —
> Cloudflare Pages still builds private repos for free. The course markdown would then
> no longer be readable on GitHub.

## What you get

- **You:** sign in → every week/PDF is open + a floating **🛠 Mentor admin** button.
- **Learners:** sign in → see only unlocked weeks; locked ones show the lock screen;
  they can’t change locks (no repo access) and can’t impersonate you.
- **Release a week:** open **Mentor admin**, untick it, commit `locks.json` (the
  site redeploys in ~2–3 min).

```{note}
One honest caveat: among *signed-in* users the per-week lock is still enforced in the
browser, so a determined learner could fetch a locked page's raw URL early. They still
can't *unlock* it for the cohort or reach anything without logging in. If you ever need
per-week hard blocking, add per-path Access policies (like the admin one in 4) for the
locked weeks — tell me and I'll script it.
```
