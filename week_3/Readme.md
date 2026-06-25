# Week 3 — CT scan and MRI fundamentals (physics + modeling intuition)

> Calendar: **Week 3.** A focused week on *where the forward operator comes
> from*. In weeks 1.5–3 you learned to reconstruct an image from `y = Gx + n`
> treating `G` as a black box. This week opens the box: how an X-ray beam turns
> tissue into a sinogram (CT), and how a spinning proton turns tissue into
> k-space (MRI).

---

## 0. Start here: the theory handbook

Read **`theory/MIC_CT_and_MRI_Fundamentals.tex`** first — the self-contained,
primary reading. Compile to PDF:

- **Overleaf:** upload the `.tex`, set as main document, *Recompile*.
- **Locally:** `pdflatex MIC_CT_and_MRI_Fundamentals.tex` (run twice for the TOC).

Then do the notebook in `notebooks/`.

---

## 1. What you should be able to do by the end

1. Derive **Beer–Lambert** from a thin slab, and explain why `−log(I₁/I₀)` is a
   line integral of attenuation.
2. Explain why a single X-ray projection isn't enough, and what **Hounsfield
   units** mean.
3. State the **Radon transform** and read a **sinogram**.
4. Explain why plain back-projection blurs, state the **Fourier Slice Theorem**,
   and explain why the **|w| ramp** in **filtered back-projection** fixes it.
5. Write CT as `Ax = b` and say what `A`, `Aᵀ`, and `b` are; know when to drop
   FBP for iterative/ART reconstruction.
6. Sketch the **Bloch equations**; explain **T1/T2** relaxation and why MRI sees
   soft-tissue contrast CT can't.
7. State the **Larmor frequency** `ω₀ = γB₀` and explain **resonance** and the
   90° RF pulse.
8. Explain slice/phase/frequency encoding and why MRI measures **k-space**
   (= the Fourier transform of the slice), reconstructed by inverse FFT.

---

## 2. Topics

### 2A. CT (counting photons)
- Attenuation coefficient; Hounsfield units.
- Beer–Lambert law (derivation); projection = line integral; tomography.
- Radon transform & sinogram; back-projection and its blur.
- Fourier Slice Theorem; filtered back-projection; ramp + practical filters
  (Ram-Lak / Shepp-Logan / cosine); noise amplification.
- CT as `Ax = b`; Poisson/Gaussian noise; ART & model-based reconstruction.
- Modeling intuition: dose vs SNR, beam hardening, metal/limited-angle artefacts.

### 2B. MRI (listening to spins)
- Nuclear magnetism, `B₀`, net magnetisation.
- Bloch equations: precession + T1 + T2; `m_eq ∝` proton density.
- Larmor precession; T1/T2 tissue contrast and weighting.
- Faraday signal; RF pulse, resonance, rotating frame, 90° pulse.
- Spatial encoding (slice/phase/frequency); **k-space**; inverse-FFT recon;
  magnitude → Rician noise.
- Why MRI is slow; under-sampling → compressed-sensing preview.
- Modeling intuition: aliasing, motion ghosts, T2*, susceptibility.

---

## 3. Slide decks to read

1. `slides/Slides_MIC_XrayCT.pdf` — 92 slides. Beer–Lambert → Radon → FBP → ART.
   Budget two sittings.
2. `slides/Slides_MIC_MRI.pdf` — 55 slides. Bloch → resonance → encoding →
   k-space.

> **Reading note.** On heavy-equation slides (Beer's-law integral `XrayCT` 26,
> the Bloch solution `MRI` 28) the copy-pasteable text is garbled — the PDF
> stored those symbols as math glyphs. The **slide images are correct**; trust
> them and the theory handbook for the equations.

---

## 4. Curated resources (watch one, read one)

| Topic | Intuition | Depth |
|---|---|---|
| Attenuation / Beer's law / HU | [Radiopaedia — Beer–Lambert](https://radiopaedia.org/articles/beer-lambert-law-1) | [StatPearls — Hounsfield Unit](https://www.ncbi.nlm.nih.gov/books/NBK547721/); [NCBI — X-ray CT (ch. 3)](https://www.ncbi.nlm.nih.gov/books/NBK232484/) |
| Radon / Fourier Slice / FBP | [CT Reconstruction (Radon, Fourier Slice, Backprojection)](https://www.youtube.com/watch?v=65LMqRUaGo0) | Kak & Slaney, [*Principles of Computerized Tomographic Imaging*](https://www.slaney.org/pct/) (free, ch. 3); [FBP illustrated guide](https://howradiologyworks.com/filtered-backprojection-fbp-illustrated-guide-for-radiologic-technologists/) |
| Spins / Bloch / T1·T2 | [Allen Q. Ye — *MRI from picture to proton*](https://www.youtube.com/watch?v=djAxjtN_7VE) | UCSF [Spin Physics](https://larsonlab.github.io/MRI-education-resources/Spin%20Physics.html) + [Bloch Equation](https://larsonlab.github.io/MRI-education-resources/Bloch%20Equation.html); [Stanford Rad226 classical MR](https://web.stanford.edu/class/rad226a/Lectures/Lecture2-2017-Classical-MR.pdf) |
| k-space & MRI reconstruction | [K-space MRI explained](https://www.youtube.com/watch?v=hlTWxwYNmwY) | [MRIquestions — k-space](https://mriquestions.com/what-is-k-space.html); UCSF [Principles of MRI: K-space](https://larsonlab.github.io/MRI-education-resources/K-space.html); Lustig et al. (2007), [*Sparse MRI*](https://onlinelibrary.wiley.com/doi/10.1002/mrm.21391) |

---

## 5. Notebook

`notebooks/01_ct_radon_fbp_and_mri_kspace.ipynb` (NumPy + Matplotlib only):
build the **Radon transform** of a phantom (sinogram), reconstruct with **plain
vs filtered back-projection**, degrade by dropping view angles, then
**under-sample MRI k-space** and watch aliasing appear.

---

## 6. Exercises (do at least three)

1. Derive Beer–Lambert from the thin-slab ODE; explain the log step.
2. Compare FBP at 90, 30, 10 angles; describe the streaks.
3. Add a cosine roll-off to the ramp filter; compare noise vs sharpness on a
   noisy sinogram.
4. FFT a brain image to k-space, keep only the central 25%, inverse FFT, and
   describe the artefacts; repeat with a random 30% mask.
5. Sketch the Bloch equations in a static `B₀` only; solve `m_z(t)`, `m_xy(t)`;
   explain T1 vs T2.

> A solved, instructor-provided **CT reconstruction project (assignment a2:
> Radon / FBP / ART)** accompanies this material as a "run-and-observe" demo
> (see `Assignments/a2/`).

---

## 7. What's next

Week 4 leaves *image-as-output* problems for *structure-from-image*:
**shape analysis** and **image segmentation** (clustering, classical
approaches) — and your first hands-on **project** (a toned-down denoising
assignment).

---

*Built for the MIC Summer-of-Code from Prof. Suyash P. Awate's CS-736 decks,
with attribution. For mentee use on this project; please don't redistribute the
bundled decks outside it.*
