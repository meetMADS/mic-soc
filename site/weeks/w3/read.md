# Week 3 · 📖 Read

- **CT** — Beer–Lambert → line integral → Radon transform → sinogram; Fourier Slice
  Theorem → filtered back-projection (Ram-Lak / Shepp-Logan / cosine); write CT as
  `Ax = b` and switch to iterative/ART when views are few or noisy. **Hounsfield
  units** rescale `μ` (water = 0, air = −1000).
- **MRI** — Larmor `ω₀ = γB₀`; Bloch equations → T1/T2 contrast; gradient encoding →
  **k-space** → inverse FFT. Magnitude reconstruction → **Rician** noise;
  under-sampling → aliasing → compressed sensing.

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../../pdfs/MIC_CT_and_MRI_Fundamentals.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../../pdfs/MIC_CT_and_MRI_Fundamentals.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

```{admonition} Assignment a2 (provided) — run & observe
:class: note
You don't implement a2 from scratch — it's already coded as the **notebook** for this
week (in the sidebar). Run it and study each step: it builds the Radon transform,
reconstructs with plain vs filtered back-projection, drops view angles to show
streaks, then under-samples MRI k-space so aliasing appears.
```

> **Primary slides:** `Slides_MIC_XrayCT` (92) and `Slides_MIC_MRI` (55) — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

<div class="mic-mark" data-id="w3_read" data-label="Read"></div>

---
Next: do the notebook in the sidebar, then **[✅ Checkpoint](checkpoint.md)**.
