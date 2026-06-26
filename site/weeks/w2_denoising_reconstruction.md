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

## This week, step by step

1. **[▶ Watch](w2/watch.md)** — intuition: denoising & sparsity.
2. **[📖 Read](w2/read.md)** — the core ideas + the full chapter.
3. **🧪 Do** — three notebooks, rendered right here on the site:
   - [Noise models](../notebooks/w2/01_noise_models.ipynb)
   - [MAP denoising with an MRF prior](../notebooks/w2/02_map_denoising_mrf.ipynb)
   - [Inverse problems (deblurring)](../notebooks/w2/03_inverse_problems_reconstruction.ipynb)
4. **[✅ Checkpoint](w2/checkpoint.md)** — submit to your mentor.

<div class="mic-mark" data-id="w2_denoising_reconstruction" data-label="Week 1.5–3 overview"></div>
