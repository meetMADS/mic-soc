# Project 2 (after midpoint) — Brain MRI segmentation (GMM + EM, with an MRF stretch)

> A hands-on project to **implement**, due in the second half of the course. It
> is a deliberately **slimmed-down** version of the full CS-736 segmentation
> assignment (`Assignments/a3/`) — about half the tasks — built on the
> clustering / GMM / EM / MRF ideas from Week 4.

## What you'll need

- **Data:** `../../Assignments/a3/data/assignmentSegmentBrainGmmEmMrf.mat`
  — a corrupted magnitude-MR brain image plus a binary brain **mask** (run the
  algorithm only on pixels inside the mask). Load with `scipy.io.loadmat` and
  inspect `.keys()`.
- **Libraries:** NumPy + Matplotlib (+ SciPy to load the `.mat`).

## Goal

Segment the brain into **3 tissue classes** — white matter, grey matter, CSF
(`K = 3`) — from intensities alone, using a **Gaussian Mixture Model fit by
Expectation–Maximisation (EM)**, then (stretch) make the labels spatially smooth
with a **Markov Random Field** prior.

## Tasks (do Task 1; Task 2 is a stretch)

### Task 1 — GMM + EM segmentation *(core)*
Model the in-mask intensities as a mixture of 3 Gaussians and fit it with EM:
- **E-step:** compute each pixel's membership (posterior probability) to each of
  the 3 classes.
- **M-step:** update each class mean and standard deviation from the memberships.
- Iterate to convergence; **plot the log-likelihood per iteration** (it must not
  decrease).

**Report:**
- your initialisation choice for the means/memberships (and why);
- 3 images: the corrupted input, the membership maps (one per class), and the
  hard label map;
- the final class means;
- the log-likelihood-vs-iteration curve.

### Task 2 — Add an MRF prior on the labels *(stretch)*
Put a Potts/Ising-style MRF prior on the label image (smoothness weight `β`) and
fold it into the E-step as a **modified ICM** that updates all labels at once so
the (unnormalised) posterior increases. Compare the label maps for a chosen
`β > 0` versus `β = 0` (no MRF) — show that the MRF removes salt-and-pepper
mislabels.

## What we dropped from the full assignment (FYI)
The original `a3` also includes a separate **modified fuzzy-c-means with
bias-field (inhomogeneity) estimation** problem. It is a good extension but is
**not required** here.

## Deliverables
A `solution/` folder with your code, the figures above, and a one-page
`report.md` (method, the images, your `β` choice, and what the MRF changed).
Keep it reproducible (set a seed).
