# Week 6 — VAEs & GANs (Deep Generative Modelling)

*Two big ideas — and both are descendants of the denoising/prior-modelling story
from weeks 1.5–3. The course's recurring theme returns one last time: a generative
model **is a learned prior**.*

```{admonition} ⭐ Project 2 is due around here
:class: important
Your second implementation project — **brain MRI segmentation** into 3 tissues,
building on Week 4's clustering/EM/MRF (a slimmed-down version of assignment `a3`).
Brief:
[`week_6/project_segmentation.md`](https://github.com/meetMADS/mic-soc/blob/main/week_6/project_segmentation.md).
```

```{admonition} Goal for this week
:class: tip
State the **ELBO** and explain its two terms; explain the **reparameterisation
trick** and why it's needed; derive the closed-form **KL** between Gaussians; sketch
the **GAN min-max** game and what `D` and `G` each optimise; list 3 reasons GAN
training is unstable with a fix for each; and place **diffusion** in one paragraph.
```

## ▶ Watch (intuition first)

Variational autoencoders in 5 minutes — Arxiv Insights:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9zKuYvjFFS8" title="VAEs in 5 minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Generative adversarial networks — Ian Goodfellow (NIPS tutorial):

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AJVyzd0rqdc" title="Ian Goodfellow: GANs" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **VAE = autoencoder + probability.** The marginal `pθ(x) = ∫ pθ(x|z) p(z) dz` is
  intractable, so we bound it: maximise the **ELBO** =
  `E_q[log pθ(x|z)] − KL(qφ(z|x) ‖ p(z))` — a **reconstruction** term plus a **KL**
  regulariser pulling the posterior toward the prior. The
  **reparameterisation trick** `z = μ + σ⊙ε` makes the stochastic node
  differentiable. Train a VAE on *healthy* scans → flag anomalies by high
  reconstruction error.
- **GAN = a two-player game.** `min_G max_D E[log D(x)] + E[log(1−D(G(z)))]`. The
  optimal `D` turns the objective into a Jensen–Shannon divergence. Training is
  unstable (mode collapse, vanishing gradients, non-convergence) — tamed by
  **WGAN-GP**, **spectral norm**, TTUR, EMA. **Conditional GANs** (pix2pix,
  CycleGAN) drive cross-modality synthesis (MRI ↔ CT).
- **Diffusion (preview).** A forward Gaussian Markov chain adds noise; a learned
  reverse denoiser inverts it (score-based view). It has displaced GANs for many
  synthesis tasks on quality and stability.
- **The unifying thread (weeks 2–6).** A VAE/GAN/diffusion model is just another
  `R(x)` in `min_x ½‖Gx − y‖² + λR(x)` — the **plug-and-play / score-based**
  reconstruction family, today's hottest area in medical reconstruction.

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../pdfs/MIC_VAEs_and_GANs.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../pdfs/MIC_VAEs_and_GANs.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

> **Primary slides:** `Slides_MIC_DeepGenerativeModeling`, **second half (≈30→)** —
> autoencoders → VAEs → GANs — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

## 🧪 Do (hands-on)

**`01_generative_models_concepts.ipynb`** (NumPy + Matplotlib) — the generative
ideas without a GPU: a linear autoencoder = PCA, **sampling & interpolation** in a
Gaussian latent space (the VAE recipe), and a 2-D **adversarial** toy where a
generator chases the real distribution while a discriminator separates them.

[▶ Open in Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_6/notebooks/01_generative_models_concepts.ipynb)
 · [view on GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_6/notebooks/01_generative_models_concepts.ipynb)

> **Optional (PyTorch):** a small **VAE** on 2-D brain slices (latent traversals,
> anomaly detection) and a small **GAN/diffusion** demo via the MONAI Generative
> Models tutorials.

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below — and attach your **Project 2
(segmentation)** report/result link.
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
