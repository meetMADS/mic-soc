# Week 6 — VAEs and GANs (deep generative modelling)

> Calendar: **mid-Week 6 to ~Week 6.5.** Two big ideas, both descendants
> of the denoising/prior-modelling story from weeks 1.5–3.

---

## ⭐ Project 2 (after midpoint): Brain MRI segmentation

Your second **implementation project** falls around here. It builds on Week 4's
clustering/EM/MRF material to segment a brain MR image into 3 tissues — a
slimmed-down version of assignment `a3`. See
**[`project_segmentation.md`](project_segmentation.md)**; data is in
`../../Assignments/a3/data/`.

---

## 0. Start here: theory handbook

Read **`theory/MIC_VAEs_and_GANs.tex`** (compile with `pdflatex` twice, or
Overleaf) — the self-contained chapter: the generative recipe, autoencoders,
**VAEs** (ELBO, reparameterisation, KL closed form), **GANs** (the min-max game,
optimal discriminator, instability + fixes, conditional GANs), a **diffusion**
preview, the unifying "a generative model is a learned prior" thread, medical
applications, and the trust/hallucination question. Then do
**`notebooks/01_generative_models_concepts.ipynb`**.

---

## 1. What you should be able to do by the end

1. State the variational lower bound (**ELBO**) and explain each term.
2. Explain the **reparameterisation trick** and why it is necessary to
   backprop through a stochastic node.
3. Derive the closed-form KL divergence between two Gaussians.
4. Sketch the GAN min-max objective and explain what the discriminator
   and generator are each optimising.
5. List 3 reasons why GAN training is unstable, and 1 fix for each
   (e.g., WGAN-GP for mode collapse, spectral norm for D, two-time-scale
   updates).
6. Connect this week's generative models back to Week 2's MRFs and
   Week 3's reconstruction priors: a VAE/GAN is *just another prior*
   for a Bayesian reconstruction / segmentation problem.
7. (Bonus) Place **diffusion models** in the picture (DDPM in one
   paragraph).

## 2. Topics

### 2A. The variational autoencoder (VAE)
- **Latent-variable models.** \(p_\theta(x)=\int p_\theta(x\mid z)\,p(z)\,dz\).
- **Why the integral is intractable.** Why we need a variational
  posterior \(q_\phi(z\mid x)\).
- **Evidence Lower Bound (ELBO):**
  \( \log p_\theta(x) \ge \mathbb{E}_{q_\phi}[\log p_\theta(x\mid z)]
       - \mathrm{KL}(q_\phi(z\mid x)\,\|\,p(z)) \).
- **Reconstruction term** vs. **KL term** (regulariser pulling the
  posterior toward the prior).
- **Reparameterisation trick.** \(z = \mu + \sigma\odot\epsilon\),
  \(\epsilon\sim\mathcal{N}(0,I)\).
- **β-VAE** and disentanglement (briefly).
- **VAE for medical anomaly detection** — train on healthy scans only,
  flag voxels with high reconstruction error.

### 2B. Generative adversarial networks (GAN)
- **The two-player game.** \( \min_G \max_D \, \mathbb{E}_{x\sim p_\mathrm{data}}\log D(x)
                              + \mathbb{E}_{z\sim p_z}\log(1-D(G(z))) \).
- **Optimal discriminator** when G is fixed; relation to
  Jensen–Shannon divergence.
- **Why training is hard.** Mode collapse, non-convergence,
  vanishing-gradient saddle points.
- **Stabilisations.** WGAN, WGAN-GP (Wasserstein + gradient penalty),
  spectral normalisation, TTUR, label smoothing, EMA generator.
- **Conditional GANs.** \(G(z, y)\), \(D(x, y)\). Pix2pix, CycleGAN.
- **Medical-imaging uses.** Cross-modality synthesis (MRI ↔ CT),
  super-resolution, data augmentation.

### 2C. Diffusion models (1 hour intro)
- Forward process = small noise added per step (Gaussian Markov chain).
- Reverse process = learnt denoiser → score-based interpretation.
- Why diffusion has displaced GANs for many synthesis tasks
  (sample quality, stability).
- Pointers only; deep dive is a project on its own.

### 2D. The thread that ties weeks 2–6 together
- A VAE / GAN / diffusion model is a **learned image prior**.
- Plugged into Week 3's MAP reconstruction
  \( \min_x \tfrac12\|Gx-y\|^2 + \lambda R(x) \), the regulariser
  \(R(x)\) can be:
  - a Gibbs energy (Week 2), or
  - the negative log-likelihood of a VAE, or
  - a score-network gradient (diffusion priors).
- This is the *plug-and-play* / *score-based* reconstruction
  family — currently the hottest area in medical-image reconstruction.

## 3. Slide deck to read

`slides/Slides_MIC_DeepGenerativeModeling.pdf` — **the second half**
(slides ~30 onward): autoencoders → VAEs → GANs (and any later
diffusion content).

## 4. Curated resources

| Topic | Intuition | Depth |
|---|---|---|
| VAE | [Arxiv Insights — *VAEs in 5 minutes*](https://www.youtube.com/watch?v=9zKuYvjFFS8) ; [Lilian Weng — *From AE to β-VAE*](https://lilianweng.github.io/posts/2018-08-12-vae/) | Kingma & Welling (2013), [*Auto-Encoding Variational Bayes*](https://arxiv.org/abs/1312.6114) |
| KL divergence between Gaussians | [Mutual Information channel — KL explained](https://www.youtube.com/watch?v=SxGYPqCgJWM) | [Statlect — KL closed-form derivation](https://www.statlect.com/fundamentals-of-probability/Kullback-Leibler-divergence) |
| Reparameterisation trick | [Yannic Kilcher — Reparameterisation in VAEs](https://www.youtube.com/watch?v=NCgjcHLFNDg) | (Kingma & Welling section 2.4) |
| GAN | [Ian Goodfellow NIPS 2016 tutorial](https://www.youtube.com/watch?v=AJVyzd0rqdc) ; [Lilian Weng — *From GAN to WGAN*](https://lilianweng.github.io/posts/2017-08-20-gan/) | Goodfellow et al. (2014), [*Generative Adversarial Nets*](https://arxiv.org/abs/1406.2661) |
| WGAN-GP | (skip video) | Gulrajani et al. (2017), [*Improved Training of Wasserstein GANs*](https://arxiv.org/abs/1704.00028) |
| Diffusion models | [Yannic Kilcher — DDPM](https://www.youtube.com/watch?v=W-O7AZNzbzQ) ; [Lilian Weng — *What are Diffusion Models?*](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/) | Ho, Jain & Abbeel (2020), [*Denoising Diffusion Probabilistic Models*](https://arxiv.org/abs/2006.11239) |
| Generative priors for medical reconstruction | (skip video) | Jalal et al. (2021), [*Robust Compressed Sensing MRI with Deep Generative Priors*](https://arxiv.org/abs/2108.01368); Chung & Ye (2022), [*Score-based diffusion models for accelerated MRI*](https://www.sciencedirect.com/science/article/pii/S1361841522001268) |
| GANs in medical imaging — survey | (skip) | Yi, Walia & Babyn (2019), [*Generative Adversarial Network in Medical Imaging: A Review*](https://arxiv.org/abs/1809.07294) |

## 5. Notebooks

- ✅ `notebooks/01_generative_models_concepts.ipynb` — **done.** The generative
  ideas in NumPy: a linear autoencoder = PCA (reconstruct + latent spectrum),
  **sampling & interpolation** in a Gaussian latent space (the VAE recipe), and a
  2D **adversarial** toy (generator chases the real distribution while a
  discriminator separates them). NumPy + Matplotlib only.
- ⏳ *(optional, PyTorch — run in the `mic_soc` env via the MONAI Generative
  Models tutorials)* a small **VAE** on 2D brain slices (latent traversals,
  anomaly detection) and a small **GAN/diffusion** synthesis demo.

## 6. Exercises

1. Derive the closed-form
   \( \mathrm{KL}(\mathcal{N}(\mu,\sigma^2)\,\|\,\mathcal{N}(0,1)) \).
   You'll use it in *every* VAE implementation.
2. Implement the reparameterisation trick in PyTorch in 5 lines.
3. Replace your Week 5 segmentation U-Net's encoder with a
   pre-trained VAE encoder. Does Dice change?
4. Write one paragraph explaining why a *score-based* prior in a
   reconstruction problem is morally the same thing as the MRF prior
   you used in Week 2.

## 7. What's next

Weeks 7 and 8: read papers, implement one, present it. You now have
the entire vocabulary you need to read a MICCAI / MedIA paper end to
end. Time to prove it.
