# Week 3 · ▶ CT video

CT reconstruction — Radon, Fourier slice, back-projection:

<iframe width="100%" height="440" src="https://www.youtube.com/embed/65LMqRUaGo0" title="CT Reconstruction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**CT counts photons.** A thin slab attenuates the beam by `dI = −μ I dx`, so
`−log(I₁/I₀)` is a **line integral** of attenuation. Stack those over all angles →
the **Radon transform** → a **sinogram**. Plain back-projection blurs; the **|ω|
ramp** filter fixes it → **filtered back-projection (FBP)**.

<div class="mic-mark" data-id="w3_ct_video" data-label="CT video"></div>

---
Next: **[▶ MRI video →](mri_video.md)**
