# Assignments & Data

The course uses four CS-736 assignments: **two you implement** (the scoped-down
projects) and **two the instructor provides solved** (run-and-observe).

| # | Topic | Your role | On this site |
|---|---|---|---|
| **a1** | Image denoising (MAP + MRF priors) | **Project 1** — you implement (~half tasks) | [Project 1 · Denoising](projects/p1_denoising.md) |
| **a2** | X-ray CT (Radon / FBP / ART) | Provided, coded — **run & observe** | accompanies [Week 3 · CT & MRI](weeks/w3_ct_mri.md) |
| **a3** | Brain MRI segmentation (GMM / EM / MRF) | **Project 2** — you implement (~half tasks) | [Project 2 · Segmentation](projects/p2_segmentation.md) |
| **a4** | Shape analysis + kernel PCA | Provided, coded — **run & observe** | accompanies [Week 4 · Shape & Segmentation](weeks/w4_shape_segmentation.md) |

## 📦 Download the data

```{admonition} Where the data lives
:class: important
Datasets are too large/varied to ship inside the website, so they're provided as a
**downloadable bundle**. Grab the data, unzip it next to your notebook, and load the
`.mat` files with `scipy.io.loadmat` (inspect `.keys()` to find the arrays).

**Download:** <!-- MENTOR: replace the line below with your real link -->
**[ data bundle link — set by your mentor ]**
```

What each project needs:

| Project | Files | Loader |
|---|---|---|
| **Project 1 (a1)** | `assignmentImageDenoising_phantom.mat` (core), `brainMRIslice.mat` (stretch) | `scipy.io.loadmat` |
| **Project 2 (a3)** | `assignmentSegmentBrainGmmEmMrf.mat` (image + brain mask) | `scipy.io.loadmat` |

```python
from scipy.io import loadmat
d = loadmat("assignmentImageDenoising_phantom.mat")
print(d.keys())   # find the array names, then index into d["..."]
```

## Run-and-observe assignments (a2, a4)

These come as **working code** so you can run them and study the output rather than
implement from scratch:

- **a2 — X-ray CT** (Radon → FBP → ART): pairs with **Week 3**. See also the Week 3
  notebook [CT Radon/FBP & MRI k-space](labs.md).
- **a4 — Shape + kernel PCA**: pairs with **Week 4** notebooks (shape analysis,
  kernel PCA).

## For mentors — how to publish the data

```{admonition} Pick one delivery method
:class: tip
- **Google Drive (recommended, like the slides):** put `a1_data.zip` and
  `a3_data.zip` in a Drive folder, set it to *anyone with the link*, and paste that
  link into the **Download** box above (edit `site/assignments.md`).
- **GitHub Release:** create a release on the repo and attach the zips as assets;
  link those URLs instead — direct downloads, repo stays small.
- **Commit into the site:** only if the data may be shared publicly. Drop zips in
  `site/_static/` and link `_static/a1_data.zip` (served directly by the site).

Do **not** hand mentees the original full assignment PDFs — the scoped
`Project 1 / Project 2` briefs are the version for this course.
```
