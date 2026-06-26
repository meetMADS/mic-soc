# Week 1.5–3 · 📖 Read

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
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../../pdfs/MIC_Denoising_and_Reconstruction.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../../pdfs/MIC_Denoising_and_Reconstruction.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<div class="mic-mark" data-id="w2_read" data-label="Read"></div>

---
Next: do the three notebooks in the sidebar, then **[✅ Checkpoint](checkpoint.md)**.
