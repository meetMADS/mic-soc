# Week 6 · 📖 Read

- **VAE = autoencoder + probability.** Maximise the **ELBO** =
  `E_q[log pθ(x|z)] − KL(qφ(z|x) ‖ p(z))` — a reconstruction term + a KL regulariser.
  The **reparameterisation trick** `z = μ + σ⊙ε` makes the stochastic node
  differentiable. Train on healthy scans → flag anomalies by reconstruction error.
- **GAN = a two-player game.** `min_G max_D E[log D(x)] + E[log(1−D(G(z)))]`. Optimal
  `D` → Jensen–Shannon divergence. Training is unstable (mode collapse, vanishing
  gradients) — tamed by **WGAN-GP**, **spectral norm**, TTUR, EMA. **Conditional GANs**
  drive cross-modality synthesis (MRI ↔ CT).
- **Diffusion (preview).** Forward Gaussian noise chain; learned reverse denoiser
  (score-based). Has displaced GANs for many synthesis tasks.
- **The unifying thread (weeks 2–6).** A VAE/GAN/diffusion model is just another
  `R(x)` in `min_x ½‖Gx − y‖² + λR(x)` — the plug-and-play / score-based family.

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../../pdfs/MIC_VAEs_and_GANs.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../../pdfs/MIC_VAEs_and_GANs.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

> **Primary slides:** `Slides_MIC_DeepGenerativeModeling`, **second half (≈30→)** —
> autoencoders → VAEs → GANs — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

<div class="mic-mark" data-id="w6_read" data-label="Read"></div>

---
Next: do the notebook in the sidebar, then **[✅ Checkpoint](checkpoint.md)**.
