# Project 2 — Brain MRI Segmentation (GMM + EM)

*Your second implementation project, due in the second half of the course (around
Week 6). A slimmed-down version of the full CS-736 segmentation assignment, built on
the clustering / GMM / EM / MRF ideas from Week 4.*

```{admonition} Submit at the Week 6 checkpoint
:class: important
A `solution/` folder with your code, the figures below, and a one-page `report.md`.
Keep it reproducible (set a seed).
```

## What you'll need

- **Data:** `Assignments/a3/data/assignmentSegmentBrainGmmEmMrf.mat` — a corrupted
  magnitude-MR brain image plus a binary brain **mask** (run only on in-mask pixels).
  Load with `scipy.io.loadmat`; inspect `.keys()`.
- **Libraries:** NumPy + Matplotlib (+ SciPy to load the `.mat`).
- **Starting point:** the Week 4 notebook
  [`02_kmeans_gmm_em_segmentation.ipynb`](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/02_kmeans_gmm_em_segmentation.ipynb).

## Goal

Segment the brain into **3 tissue classes** — white matter, grey matter, CSF
($K=3$) — from intensities alone, using a **Gaussian Mixture Model fit by
Expectation–Maximisation (EM)**, then (stretch) make the labels spatially smooth
with a **Markov Random Field** prior.

## Tasks

**Task 1 — GMM + EM segmentation *(core)*.** Model in-mask intensities as a mixture
of 3 Gaussians and fit with EM:

- **E-step:** each pixel's membership (posterior) to each of the 3 classes.
- **M-step:** update each class mean and standard deviation from memberships.
- Iterate to convergence; **plot the log-likelihood per iteration** (it must not decrease).

**Report:** your initialisation choice (and why); 3 images — corrupted input,
membership maps (one per class), and the hard label map; the final class means; the
log-likelihood-vs-iteration curve.

**Task 2 — Add an MRF prior on the labels *(stretch)*.** Put a Potts/Ising MRF prior
(smoothness weight $\beta$) on the label image and fold it into the E-step as a
**modified ICM** that updates all labels so the (unnormalised) posterior increases.
Compare $\beta > 0$ vs $\beta = 0$ — show the MRF removes salt-and-pepper mislabels.

## Full brief & data

The complete brief lives at
[`week_6/project_segmentation.md`](https://github.com/meetMADS/mic-soc/blob/main/week_6/project_segmentation.md);
data is under `Assignments/a3/data/`. (The original `a3` also includes a modified
fuzzy-c-means with bias-field estimation — a good extension, **not required** here.)
