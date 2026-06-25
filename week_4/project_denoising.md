# Project 1 (before midpoint) — Bayesian image denoising

> A hands-on project to **implement**, due around the course midpoint. It is a
> deliberately **slimmed-down** version of the full CS-736 denoising assignment
> (`Assignments/a1/`) — about half the tasks — so it fits a short course. You
> already built most of the machinery in
> `week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb`; this project turns that
> into a small, reported result on real medical data.

## What you'll need

- **Data:** `../../Assignments/a1/data/assignmentImageDenoising_phantom.mat`
  (a noiseless phantom + a noisy version) and, for the stretch task,
  `...brainMRIslice.mat`. Load `.mat` files with
  `scipy.io.loadmat` (inspect the keys with `.keys()` to find the arrays).
- **Libraries:** NumPy + Matplotlib (+ SciPy just to load the `.mat`).

## The model (recap)

Denoise by maximising the posterior — equivalently, minimising
\[
E(x) = \tfrac{1}{2\sigma^2}\lVert x - y\rVert^2 \;+\; \beta \sum_{i\sim j} g(x_i - x_j),
\]
with a 4-neighbour MRF (wrap-around at borders), a Gaussian noise model, and a
penalty `g` on neighbour differences. Use **gradient ascent on the log-posterior
with a dynamic step size** (no fixed step), start from the noisy image, and make
sure the objective increases every iteration.

## Tasks (do Task 1; Task 2 is a stretch)

### Task 1 — Denoise the phantom with two priors *(core)*
Implement MAP denoising with **two** MRF priors:
1. **Quadratic:** `g(u) = u²` (a Gaussian prior).
2. **Huber:** `g(u) = ½u²` for `|u| ≤ γ`, else `γ|u| − ½γ²` (edge-preserving).

For each prior, tune the prior/likelihood weight to minimise the **relative RMSE**
to the noiseless image, `RRMSE(A,B) = ‖A−B‖ / ‖A‖` (A = noiseless).

**Report:**
- the noisy-vs-noiseless RRMSE (baseline), and the best RRMSE for each prior;
- 4 images with a shared colormap: noiseless, noisy, quadratic-denoised,
  Huber-denoised;
- the objective-function-vs-iteration plot for each of the two runs;
- one sentence: which prior preserves edges better, and why.

### Task 2 — Repeat on the brain MRI slice *(stretch)*
Run the same two denoisers on `brainMRIslice.mat`. Show the same images and
plots. Note any differences you have to make for real (vs synthetic) data.

## What we dropped from the full assignment (FYI)
The original `a1` also asks for a third (discontinuity-adaptive) prior, a
vector-valued RGB-microscopy version, and a full **dictionary-learning**
denoiser. Those are great extensions if you finish early, but they are **not
required** here.

## Deliverables
A short folder `solution/` with: your code, the figures above, and a one-page
`report.md` (what you did, the RRMSE table, and your edge-preservation
observation). Keep it reproducible (set a random seed).
