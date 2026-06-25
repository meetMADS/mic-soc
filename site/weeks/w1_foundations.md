# Week 1 – 1.5 — Foundations

*Basics of images (pixels, intensity, representation) and the probability & math
you'll lean on all course.*

```{admonition} Goal for this week
:class: tip
Be able to load and look at a medical image, reason about pixels/intensity/
colormaps, and state Bayes' theorem, MLE vs MAP, norms, and convolution — the
vocabulary every later week assumes.
```

## ▶ Watch (intuition first)

Probability & Bayes' theorem — StatQuest:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/9wCnvr7Xw4E" title="StatQuest: Bayes' Theorem" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Linear algebra — 3Blue1Brown, *Essence of Linear Algebra* (playlist):

<iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="3Blue1Brown: Essence of Linear Algebra" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **An image is data.** A digital image is an N-D array of numbers on a regular
  grid. A **pixel** (2D) / **voxel** (3D) is one entry; its value is the
  **intensity**. The colour you see is a **colormap** — a *visualisation*, not the
  data. Always inspect the **intensity histogram** alongside the picture.
- **Probability you need:** random variables, PDF/PMF, Gaussian and Poisson,
  expectation/variance, and **Bayes' theorem** — `posterior ∝ likelihood × prior`,
  the spine of the whole course.
- **MLE vs MAP:** the maximum-likelihood estimate fits the data; the
  maximum-a-posteriori estimate adds a prior. MAP = MLE + a prior.
- **Math toolbox:** vectors & matrices as linear maps, eigenvectors,
  positive-definite matrices, the **L1 vs L2 norm** (and why L1 → sparsity), and
  **2D convolution / the Fourier transform**.

<p>📄 <b>Deep-dive PDF (auto-compiled):</b> the
<a href="../pdfs/handbook_main.pdf">Long Technical Handbook</a>, Week 1 chapter
(this week has no separate theory file — the handbook is your reading).</p>

## 🧪 Do (hands-on)

Three notebooks (NumPy + Matplotlib):

1. **Image basics & I/O** — load images, intensity, histograms, colormap ≠ data.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/01_image_basics_and_io.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/01_image_basics_and_io.ipynb)
2. **Probability refresher** — simulate Gaussian/Poisson noise; MLE vs MAP.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/02_probability_refresher.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/02_probability_refresher.ipynb)
3. **Linear algebra & convolution** — norms, eigen/SVD, 2D convolution, the 2D DFT.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/03_linear_algebra_and_convolution.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_0_to_1.5/notebooks/03_linear_algebra_and_convolution.ipynb)

A rendered example notebook also lives under **Example notebook** in the sidebar.

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Answer a few quick questions so your mentor can see where you are. **Replace the
placeholder below with your Google Form's embed code** (Form → Send → `<>` →
copy the `<iframe>`), or just use the link.
```

<!-- Paste your Google Form embed iframe here, e.g.: -->
<!-- <iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true" width="100%" height="900" frameborder="0">Loading…</iframe> -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md` for the 2-minute setup.)*
