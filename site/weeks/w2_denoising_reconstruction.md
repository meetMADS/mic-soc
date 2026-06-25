# Week 1.5 – 3 — Image Denoising & Reconstruction

*The heart of the course: the Bayesian view, from denoising (the simplest inverse
problem) to general image reconstruction.*

```{admonition} Goal for this week
:class: tip
Write the MAP objective `argmin ½‖Gx − y‖² + λR(x)`, know the four noise models
(Gaussian, Poisson, Rician, compound-Poisson), explain why an edge-preserving
prior beats a quadratic one, and explain why reconstruction is ill-posed and
needs a prior.
```

## ▶ Watch (intuition first)

Inverse problems — Steve Brunton:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Jl3Ftf6S5MQ" title="Steve Brunton: Inverse Problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Sparsity & the L1 norm — Steve Brunton:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/DLfMsBKaDOY" title="Steve Brunton: Sparsity and the L1 norm" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **One idea, three costumes:** we never observe the image `x`; we observe
  `y = Gx + n`. Recover `x` by maximising `p(y|x) p(x)` — i.e. minimising
  `½‖Gx − y‖² + λR(x)`. Denoising is the case `G = I`.
- **Noise = the likelihood.** Gaussian (thermal/CLT), **Poisson** (photon
  counting, SNR = √λ), **Rician** (MRI magnitude), compound-Poisson (CT). Pick the
  model that matches the physics.
- **Priors & regularisation are the same thing.** A negative-log Gibbs/MRF prior
  *is* a regulariser: **L2 ↔ Gaussian (Tikhonov)**, **L1 ↔ Laplace/TV**. Quadratic
  priors blur edges; **edge-preserving** (Huber/TV) priors keep them.
- **Ill-posedness:** `G` has a null space / bad conditioning, so the naive inverse
  explodes — the prior is what makes the problem solvable. The key gradient:
  `∇‖Gx − y‖² = 2Gᵀ(Gx − y)`.

<p>📄 <b>Deep-dive PDF (auto-compiled):</b>
<a href="../pdfs/MIC_Denoising_and_Reconstruction.pdf">MIC_Denoising_and_Reconstruction.pdf</a>
— the full chapter, with worked examples.</p>

## 🧪 Do (hands-on)

Notebooks (NumPy + Matplotlib):

1. **Noise models** — Gaussian/Poisson/Rician/speckle; SNR; the Anscombe transform.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/01_noise_models.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/01_noise_models.ipynb)
2. **MAP denoising with an MRF prior** — ICM + gradient descent; quadratic vs
   **Huber** (watch the quadratic blur an edge while Huber keeps it).
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb)
3. **Inverse problems** — deblurring: the naive inverse explodes, then Tikhonov
   and total variation rescue it.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/03_inverse_problems_reconstruction.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/03_inverse_problems_reconstruction.ipynb)

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below (Form → Send → `<>` → copy the `<iframe>`).
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
