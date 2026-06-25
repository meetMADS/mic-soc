# Week 1 — Image basics + probability & math foundations

> Calendar: **Week 1 to mid-Week 2** (1.5 weeks). Pace yourself; this week
> is *foundations*. Everything in weeks 2–6 assumes you are comfortable
> with the vocabulary introduced here.

## 1. What you should be able to do by the end

1. Load a 2D medical image and a 3D NIfTI volume in Python, show a slice,
   plot the intensity histogram.
2. Explain what a pixel/voxel is, what an intensity is, and why
   *colormap ≠ data*.
3. Compute a 2D convolution by hand on a 3×3 image and confirm it with NumPy.
4. State and use Bayes' theorem in words and equations.
5. Tell the difference between **MLE** and **MAP** estimation in one breath.
6. Know what a vector space, an inner product, a norm (L1 vs L2), an
   eigenvector, and a positive-definite matrix are.

## 2. Topics

- **Image as data.** Continuous signal → sampling → digital image. Pixel,
  voxel, intensity, resolution, bit-depth, colormap (a *visualisation*
  device, not the data).
- **2D / 3D coordinate conventions.** Row-column vs. (x, y), voxel
  spacing, image orientation (LPS vs. RAS in medical imaging).
- **Convolution & filtering.** 1D and 2D convolution, separability,
  Gaussian filter, mean filter, edge filters.
- **Fourier basics.** 1D DFT, 2D DFT, why frequency domain matters
  (later: MRI is acquired in frequency / *k-*space).
- **Linear algebra refresher.** Vectors and matrices, matrix-vector
  products as linear maps, transpose, inverse, rank, null space,
  eigenvalues/eigenvectors, symmetric / positive-definite matrices,
  SVD (just the *what*, not yet the *why*).
- **Norms.** \( \ell^1 \), \( \ell^2 \), \( \ell^\infty \); geometric
  meaning ("Manhattan" vs. Euclidean), why \( \ell^1 \) promotes
  sparsity (preview for TV regularisation in Week 3).
- **Probability refresher.** Sample space, random variable, PDF/PMF,
  CDF, expectation, variance, independence, conditional probability.
  Common distributions: **Gaussian, Poisson, uniform**. (We meet
  Rician in Week 2.)
- **Bayes' theorem.** Posterior ∝ likelihood × prior. Why this is the
  central object of the whole course.
- **MLE vs. MAP.** Two different optimisation problems, one prior
  away from each other.
- **Optimisation 101.** Gradient, gradient descent, step size, convex
  vs. non-convex, local vs. global optimum (intuitive only).

## 3. Slide deck to read

`slides/Slides_MIC_Introduction.pdf` — 54 slides. The first ~27
slides set context and prereqs; the rest (from "Signals, Images", slide
28 onwards) are the actual content.

Annotate slides 28 onwards. Do not skip the pages on analog vs digital,
because the rest of the course assumes you know what a voxel is.

## 4. Curated resources

Pick **one** from each row. Don't try to read everything.

| Topic | Intuition (video) | Depth (text/paper) |
|---|---|---|
| Linear algebra | [3Blue1Brown — *Essence of Linear Algebra*](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) | [Strang — *Linear Algebra* MIT OCW 18.06](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) (lectures 1–5 are enough for now) |
| Probability + Bayes | [StatQuest — Probability vs Likelihood](https://www.youtube.com/watch?v=pYxNSUDSFH4) and [StatQuest — Bayes' Theorem](https://www.youtube.com/watch?v=9wCnvr7Xw4E) | [Tsitsiklis — *Probabilistic Systems Analysis*, MIT OCW 6.041](https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/) (videos 1, 2, 6, 7) |
| Convolution / image filtering | [3Blue1Brown — Convolution](https://www.youtube.com/watch?v=KuXjwB4LzSA) | [scikit-image — Filter docs](https://scikit-image.org/docs/stable/auto_examples/index.html#filtering) |
| Fourier basics | [3Blue1Brown — Fourier Transform](https://www.youtube.com/watch?v=spUNpyF58BY) | [Better Explained — *An Interactive Guide to the Fourier Transform*](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/) |
| Medical-image I/O | (none; just do it) | [nibabel tutorial](https://nipy.org/nibabel/gettingstarted.html); [SimpleITK notebooks](https://simpleitk.org/SimpleITK-Notebooks/) (notebook 01 only) |
| Norms / sparsity preview | [StatQuest — Ridge & Lasso](https://www.youtube.com/watch?v=Q81RR3yKn30) | (defer depth to Week 3) |

## 5. Notebooks

- `notebooks/01_image_basics_and_io.ipynb` — load 2D images and a NIfTI
  volume; explore intensity, histograms, colormaps.
- `notebooks/02_probability_refresher.ipynb` — simulate Gaussian and
  Poisson noise; compute MLE and MAP for the mean of a Gaussian (the
  worked example on slides 10–11 of `Slides_MIC_ImageModeling.pdf`).
- `notebooks/03_linear_algebra_and_convolution.ipynb` — image-as-vector;
  L1/L2/L∞ norms (and why L1 is sparse); inner products; matrices as linear
  maps; eigenvectors & positive-definite matrices; the SVD as low-rank image
  compression; 2D convolution by hand vs. NumPy; and the 2D DFT of a delta and
  a sinusoid. Covers the goals #3 and #6 in §1 and exercise 5 in §6. NumPy +
  Matplotlib only.

## 6. Exercises (do at least three)

1. Open a brain MRI volume. Show the central axial, sagittal, and
   coronal slices side-by-side.
2. Make a synthetic 256×256 image of a disk on a background. Add
   *i.i.d.* Gaussian noise at three different σ values; show the
   resulting histograms.
3. Apply a 5×5 mean filter and a 5×5 Gaussian filter (σ=1.5) to the
   noisy image from (2). Compare PSNRs.
4. By hand, derive the MAP estimate of the mean μ of a Gaussian
   likelihood with a Gaussian prior on μ. (See `Slides_MIC_ImageModeling.pdf`,
   slides 10–11 — try it *before* peeking.)
5. Code the 2D DFT of a single delta image and a single sinusoidal
   image; explain what you see.

## 7. What's next

Week 2 introduces **statistical priors on images** (Markov Random Fields
and Gibbs distributions) and uses them to formulate **image denoising**
as a Bayesian inverse problem. Every concept above (Bayes, MLE/MAP,
gradients, norms) will be used immediately.
