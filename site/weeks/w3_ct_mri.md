# Week 3 — CT & MRI Fundamentals

*Where the forward operator comes from. In weeks 1.5–3 you reconstructed an image
from `y = Gx + n` treating `G` as a black box; this week opens the box — how an
X-ray beam becomes a sinogram (CT) and how a spinning proton becomes k-space (MRI).*

```{admonition} Goal for this week
:class: tip
Derive **Beer–Lambert** and read a **sinogram**; explain why plain back-projection
blurs and why the **|ω| ramp** in **filtered back-projection** fixes it; write CT
as `Ax = b`. Sketch the **Bloch equations**, explain **T1/T2** contrast and the
**Larmor** condition, and explain why MRI measures **k-space** (the Fourier
transform of the slice), recovered by inverse FFT.
```

## ▶ Watch (intuition first)

CT reconstruction — Radon, Fourier slice, back-projection:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/65LMqRUaGo0" title="CT Reconstruction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

MRI from picture to proton — Allen Q. Ye:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/djAxjtN_7VE" title="MRI from picture to proton" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **CT counts photons.** A thin slab attenuates the beam by `dI = −μ I dx`, so
  `−log(I₁/I₀)` is a **line integral** of the attenuation `μ`. Stack those over all
  angles → the **Radon transform** → a **sinogram**. **Hounsfield units** rescale
  `μ` to water = 0, air = −1000.
- **Plain back-projection blurs**; the **Fourier Slice Theorem** says each
  projection is a radial slice of the 2-D FT, so reconstruction needs a **|ω| ramp**
  filter (Ram-Lak / Shepp-Logan / cosine) → **filtered back-projection (FBP)**.
  Write it as `Ax = b` and switch to **iterative/ART** when views are few or noisy.
- **MRI listens to spins.** In a field `B₀`, net magnetisation precesses at the
  **Larmor** frequency `ω₀ = γB₀`; a resonant 90° RF pulse tips it. The
  **Bloch equations** give **T1** (recovery) and **T2** (dephasing) — the knobs that
  give MRI its soft-tissue contrast.
- **MRI measures k-space.** Gradient encoding means the receiver samples the
  **Fourier transform** of the slice; an **inverse FFT** gives the image. Magnitude
  reconstruction makes the noise **Rician**; under-sampling k-space → aliasing →
  the compressed-sensing story.

<p>📄 <b>Deep-dive PDF (auto-compiled):</b>
<a href="../pdfs/MIC_CT_and_MRI_Fundamentals.pdf">MIC_CT_and_MRI_Fundamentals.pdf</a>
— the full self-contained chapter with worked examples. (The long
<a href="../pdfs/handbook_main.pdf">handbook_main.pdf</a> has the same in context.)</p>

> **Primary slides:** `Slides_MIC_XrayCT` (92) and `Slides_MIC_MRI` (55) — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).
> On a few heavy-equation slides the copy-paste text is garbled; trust the slide
> images and the PDF above for the equations.

## 🧪 Do (hands-on)

**`01_ct_radon_fbp_and_mri_kspace.ipynb`** (NumPy + Matplotlib) — build the Radon
transform of a phantom, reconstruct with plain vs. filtered back-projection, drop
view angles to see streaks, then under-sample MRI k-space and watch aliasing appear.

[▶ Open in Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_3/notebooks/01_ct_radon_fbp_and_mri_kspace.ipynb)
 · [view on GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_3/notebooks/01_ct_radon_fbp_and_mri_kspace.ipynb)

> A solved, instructor-provided **CT reconstruction demo** (Radon / FBP / ART)
> accompanies this material as a run-and-observe reference.

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below (Form → Send → `<>` → copy the `<iframe>`).
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
