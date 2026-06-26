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

```{admonition} Layout C — "tick each item"
:class: note
This week stays on one page — tick the green box beside each resource as you finish
it, so you can track yourself without leaving the page.
```

## ▶ Watch (intuition first)

Denoising data with the FFT — Steve Brunton:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/s2K1JfNR7Sc" title="Steve Brunton: Denoising Data with the FFT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<span class="mic-check" data-id="w2_watch1">watched: Denoising with FFT</span>

Why images are compressible (sparsity & the L1 idea) — Steve Brunton:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Dt2WYkqZfbs" title="Steve Brunton: Why images are compressible" frameborder="0" allowfullscreen></iframe>

<span class="mic-check" data-id="w2_watch2">watched: Why images are compressible</span>

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

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../pdfs/MIC_Denoising_and_Reconstruction.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../pdfs/MIC_Denoising_and_Reconstruction.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<span class="mic-check" data-id="w2_read">read: the chapter</span>

## 🧪 Do (hands-on)

Notebooks (NumPy + Matplotlib):

1. **Noise models** — Gaussian/Poisson/Rician/speckle; SNR; the Anscombe transform.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/01_noise_models.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/01_noise_models.ipynb)
   <br><span class="mic-check" data-id="w2_nb1">done: Noise models</span>
2. **MAP denoising with an MRF prior** — ICM + gradient descent; quadratic vs
   **Huber** (watch the quadratic blur an edge while Huber keeps it).
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/02_map_denoising_mrf.ipynb)
   <br><span class="mic-check" data-id="w2_nb2">done: MAP denoising</span>
3. **Inverse problems** — deblurring: the naive inverse explodes, then Tikhonov
   and total variation rescue it.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/03_inverse_problems_reconstruction.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_1.5_to_3/notebooks/03_inverse_problems_reconstruction.ipynb)
   <br><span class="mic-check" data-id="w2_nb3">done: Inverse problems</span>

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below (Form → Send → `<>` → copy the `<iframe>`).
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*

<span class="mic-check" data-id="w2_checkpoint">submitted: checkpoint</span>

<div class="mic-mark" data-id="w2_denoising_reconstruction" data-label="Week 1.5–3"></div>
