# Weeks 1.5 – 3 — Image denoising + Image reconstruction (inverse problems, basics of Bayesian formulation)

> Calendar: **mid-Week 1.5 to end of Week 3.** The heart of the course: the
> Bayesian view of medical image computing, from denoising (the simplest inverse
> problem) to general image reconstruction. Take your time.

This block teaches the one idea behind denoising and reconstruction — *recover
the image that best explains the data and still looks like an image* — i.e. the
MAP estimate `argmin ½‖Gx − y‖² + λR(x)`. The **physics of the CT and MRI
operators `G`** (Beer–Lambert/Radon/FBP, Bloch/k-space) has its own focused
chapter in **`../week_3`**; here we only need them as examples of a forward
operator.

---

## 0. Start here: the theory handbook

Read **`theory/MIC_Denoising_and_Reconstruction.tex`** first — the primary,
self-contained reading. Compile to PDF:

- **Overleaf:** upload the `.tex`, set as main document, *Recompile*.
- **Locally:** `pdflatex MIC_Denoising_and_Reconstruction.tex` (run twice for the TOC).

Then do the three notebooks in `notebooks/` as you read.

---

## 1. What you should be able to do by the end

1. State Bayes' theorem for an inverse problem and name the likelihood/prior.
2. List the four medical-imaging noise models (Gaussian, Poisson, Compound
   Poisson, Rician) and say which modality each shows up in, and why.
3. Define an MRF / Gibbs prior on an image grid and state Hammersley–Clifford in
   one sentence.
4. Explain why a quadratic prior blurs edges and an edge-preserving (Huber / TV)
   prior does not.
5. Write the MAP objective `½‖Gx − y‖² + λR(x)` and derive
   `∇‖Gx − y‖² = 2Gᵀ(Gx − y)` by hand.
6. Explain *ill-posedness* (null space, conditioning, noise amplification) and
   why regularisation is not optional.

*(CT/MRI-specific objectives — Beer–Lambert, FBP, Bloch, k-space — are in
`../week_3`.)*

---

## 2. Topics

### 2A. Image denoising
- Noise models: **Gaussian** (thermal/CLT), **Poisson** (photon counting,
  Var = mean, SNR = √λ), **Compound Poisson** (polychromatic CT), **Rician**
  (MRI magnitude; Bessel `I₀`; → Rayleigh at zero signal), ultrasound speckle.
- SNR, averaging by √N, Anscombe variance stabilisation.
- Priors: random fields, neighbourhoods, cliques; **MRF**; **Gibbs/GRF**
  (energy, clique potentials, partition function, temperature);
  **Hammersley–Clifford**; Ising/Potts; edge-preserving priors (quadratic vs
  Huber vs generalised Gaussian).
- **Bayesian denoising = MAP**; prior ↔ regulariser (ℓ² ↔ Gaussian, ℓ¹ ↔
  Laplace/TV); ICM, gradient descent, simulated annealing.

### 2B. Inverse problems & Bayesian reconstruction
- Forward model `y = Gx + n`; denoising as `G = I`.
- Ill-posedness: rank deficiency, null space, condition number, noise blow-up.
- MAP reconstruction: Tikhonov/ridge (ℓ²) vs TV/Lasso (ℓ¹); why ℓ¹ → sparsity.
- Optimisation: matrix calculus, the `2Gᵀ(Gx−y)` gradient, gradient descent +
  adaptive step, line search, Newton, Gauss–Newton, Levenberg–Marquardt,
  projected gradient / POCS; complex derivatives & Cauchy–Riemann (for MRI).
- ART / Kaczmarz algebraic reconstruction.

### 2C. CT & MRI as forward operators
A short preview only: CT → `G` = Radon transform; MRI → `G` = Fourier transform.
**The full physics and modeling intuition are in `../week_3` (CT & MRI
fundamentals).**

---

## 3. Slide decks to read (in this order)

1. `slides/Slides_MIC_ImageModeling.pdf` — 88 slides. Bayes → random field →
   MRF → GRF → Hammersley–Clifford → edge-preserving priors → ridge/Lasso.
2. `slides/Slides_MIC_ImageDenoising.pdf` — 52 slides. Noise models → Bayesian
   denoising → ICM/gradient algorithms.
3. `slides/Slides_MIC_ImageReconstruction.pdf` — 38 slides. Forward model →
   matrix calculus → gradient descent / Newton / Gauss–Newton / LM → complex
   derivatives.

*(The `Slides_MIC_XrayCT.pdf` and `Slides_MIC_MRI.pdf` decks are read in
`../week_3`.)*

> **Reading note.** On the heavy-equation slides (e.g. the Rician derivation in
> `ImageDenoising` 21–22) the *copy-pasteable text* is garbled — the PDF stored
> those symbols as math glyphs. The **slide images are correct**; trust them
> (and the theory handbook) for the equations.

---

## 4. Curated resources (watch one, read one per row)

| Topic | Intuition (video) | Depth (text / paper) |
|---|---|---|
| Bayesian inverse problems | [Steve Brunton — Inverse problems](https://www.youtube.com/watch?v=Jl3Ftf6S5MQ) | [Mohammad-Djafari — *Regularization, Bayesian Inference & ML for Inverse Problems* (Entropy 2021)](https://www.mdpi.com/1099-4300/23/12/1673); [Inverse Problems in Computational Imaging (notes)](https://computational-imaging.de/book/06_InverseProblemsInCompimg.html) |
| MRFs / Gibbs on images | [Stanford CS228 — MRFs (notes)](https://ermongroup.github.io/cs228-notes/representation/undirected/) | Geman & Geman (1984), [*Stochastic Relaxation, Gibbs Distributions, and Bayesian Restoration of Images*](https://doi.org/10.1109/TPAMI.1984.4767596) (sections I–III) |
| Noise: Poisson / Rician | [Computerphile — photon/Poisson noise](https://www.youtube.com/watch?v=9DZ-NhFB6gA) | Gudbjartsson & Patz (1995), [*The Rician Distribution of Noisy MRI Data*](https://onlinelibrary.wiley.com/doi/10.1002/mrm.1910340618) (4 pages) |
| TV / ℓ¹ regularisation | [Steve Brunton — Sparsity & the L1 norm](https://www.youtube.com/watch?v=DLfMsBKaDOY) | [A. M.-C. So — ROF / Total Variation notes](https://angms.science/doc/TV/TV.pdf); [TV via Chambolle–Pock (tutorial)](https://sangillee.com/2026-01-06-total-variation-minimization/) |
| Non-local means | [Computerphile — Non-Local Means](https://www.youtube.com/watch?v=BttdQYltZJI) | Buades et al. (2005), [*A non-local algorithm for image denoising*](https://ieeexplore.ieee.org/document/1467423) |
| Optimisation / matrix calculus | [3Blue1Brown — Gradient descent](https://www.youtube.com/watch?v=IHZwWFHWa-w) | [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf); Boyd & Vandenberghe, [*Convex Optimization*](https://web.stanford.edu/~boyd/cvxbook/) ch. 9 |
| Model-based imaging (book) | — | C. Bouman, [*Model-Based Image Processing*](https://engineering.purdue.edu/~bouman/publications/pdf/MBIP-book.pdf) (free; ch. 1–2, 7–8) |

*(CT and MRI resources are in `../week_3`.)*

---

## 5. Notebooks

All **NumPy + Matplotlib only**, self-contained.

- `notebooks/01_noise_models.ipynb` — synthesise Gaussian, Poisson, Rician, and
  speckle noise on a phantom; histograms, signal-dependence, SNR; averaging by
  √N; the Anscombe transform.
- `notebooks/02_map_denoising_mrf.ipynb` — MAP denoising with a 4-neighbour MRF
  prior; ICM and gradient descent; **quadratic vs Huber** (watch the quadratic
  blur an edge while Huber keeps it); PSNR-vs-λ sweep.
- `notebooks/03_inverse_problems_reconstruction.ipynb` — the forward model
  `y = Gx + n` via **deblurring**: the naive inverse explodes (ill-posedness),
  then **Tikhonov (L2)** and **total variation (L1)** rescue it.
  *(CT Radon/FBP and MRI k-space hands-on are in `../week_3`.)*

---

## 6. Exercises (do at least four)

1. Plot the Rician PDF for ν = 0, 1, 5, 20 at σ = 1; mark where it turns from
   Rayleigh-like to Gaussian-like.
2. Add Rician noise to an MRI slice and MAP-denoise it with a quadratic prior and
   a Huber prior; compare edges with a line profile.
3. Derive by hand why ℓ¹ regularisation produces sparse solutions and ℓ² does
   not (use the geometry of the unit balls).
4. Derive `∇ₓ ½‖Gx − y‖² = Gᵀ(Gx − y)` element-wise and again with the chain
   rule.
5. Deblur a blurred+noisy image (Notebook 3): compare the naive inverse,
   Tikhonov, and TV; re-tune λ as you raise the noise.
6. Implement gradient descent on `½‖Gx − y‖² + λ·TV(x)` yourself and watch the
   objective decrease.

*(CT FBP and MRI k-space exercises are in `../week_3`.)*

---

## 7. What's next

**Week 3 (`../week_3`)** opens the CT and MRI black boxes — the physics and
modeling intuition behind the Radon and Fourier operators you used here. After
that, Week 4 moves to *structure-from-image*: shape analysis and segmentation
(and your first hands-on project).

---

*Built for the MIC Summer-of-Code from Prof. Suyash P. Awate's CS-736 decks,
with attribution. For mentee use on this project; please don't redistribute the
bundled decks outside it.*
