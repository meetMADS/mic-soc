# Project 1 — Bayesian Image Denoising

*Your first implementation project, due around the **course midpoint** (Week 4). A
deliberately slimmed-down version of the full CS-736 denoising assignment — you
already built most of the machinery in the Week 1.5–3 MAP-denoising notebook; this
turns it into a small reported result on real medical data.*

```{admonition} Submit at the Week 4 checkpoint
:class: important
A `solution/` folder with your code, the figures below, and a one-page `report.md`.
Keep it reproducible (set a random seed).
```

## What you'll need

- **Data:** `Assignments/a1/data/assignmentImageDenoising_phantom.mat` (a noiseless
  phantom + a noisy version); for the stretch task, `...brainMRIslice.mat`. Load with
  `scipy.io.loadmat` (inspect `.keys()` to find the arrays).
- **Libraries:** NumPy + Matplotlib (+ SciPy to load the `.mat`).
- **Starting point:** your Week 1.5–3 notebook
  [`02_map_denoising_mrf.ipynb`](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb).

## The model

Denoise by maximising the posterior — equivalently, minimising

$$E(x) = \tfrac{1}{2\sigma^2}\lVert x - y\rVert^2 \;+\; \beta \sum_{i\sim j} g(x_i - x_j),$$

with a 4-neighbour MRF (wrap-around at borders), a Gaussian noise model, and a
penalty `g` on neighbour differences. Use **gradient ascent on the log-posterior
with a dynamic step size**, start from the noisy image, and check the objective
improves every iteration.

## Tasks

**Task 1 — Denoise the phantom with two priors *(core)*.** Implement MAP denoising with:

1. **Quadratic:** $g(u) = u^2$ (a Gaussian prior).
2. **Huber:** $g(u) = \tfrac12 u^2$ for $|u| \le \gamma$, else $\gamma|u| - \tfrac12\gamma^2$ (edge-preserving).

For each, tune the prior/likelihood weight to minimise the **relative RMSE** to the
noiseless image, $\mathrm{RRMSE}(A,B) = \lVert A-B\rVert / \lVert A\rVert$.

**Report:** baseline RRMSE (noisy vs noiseless) and best RRMSE per prior; 4 images
(shared colormap): noiseless, noisy, quadratic-denoised, Huber-denoised; the
objective-vs-iteration plot for each run; one sentence on which prior preserves
edges better and why.

**Task 2 — Repeat on the brain MRI slice *(stretch)*.** Same two denoisers on
`brainMRIslice.mat`; note any changes needed for real vs synthetic data.

## Full brief & data

The complete brief lives at
[`week_4/project_denoising.md`](https://github.com/meetMADS/mic-soc/blob/main/week_4/project_denoising.md);
data is under `Assignments/a1/data/` in the repo. (The original `a1` also has a
discontinuity-adaptive prior, an RGB version, and a dictionary-learning denoiser —
great extensions, **not required** here.)
