# Week 4 — Shape analysis + classical segmentation (+ registration & kernels)

> Calendar: **Week 4.** Wide topic, but each piece is small. The unifying
> idea: extracting *structure* (labels, contours, surfaces, shapes) from
> images using classical (non-deep) methods.

---

## ⭐ Project 1 (before midpoint): Bayesian image denoising

Your first **implementation project** falls around here (the course midpoint). It
consolidates the weeks 1.5–3 denoising material into a small reported result on
real medical data — a slimmed-down version of assignment `a1`. See
**[`project_denoising.md`](project_denoising.md)**; data is in
`../../Assignments/a1/data/`.

---

## 0. Start here: theory handbooks

Week 4 has **three built-out theory chapters** (compile each with `pdflatex`
twice, or Overleaf), each paired with a NumPy notebook:

- **`theory/MIC_Shape_Analysis.tex`** → `notebooks/01_shape_analysis_procrustes_pca.ipynb`
  — Procrustes → GPA mean shape → PCA modes of variation.
- **`theory/MIC_Image_Segmentation.tex`** → `notebooks/02_kmeans_gmm_em_segmentation.ipynb`
  — k-means → GMM/EM → MRF/ICM smoothing.
- **`theory/MIC_Kernel_Methods.tex`** → `notebooks/03_kernel_pca_toy.ipynb`
  — the kernel trick; linear PCA fails, RBF kernel PCA separates two moons.

> **Registration** stays a lighter, supplementary topic (slide deck + §2C/§4
> below); it has no standalone chapter.

---

## 1. What you should be able to do by the end

1. State the k-means objective and its two-step alternating optimisation.
2. Explain why k-means is NP-hard and how k-means++ helps in practice.
3. Derive (or at least recognise) the EM updates for a Gaussian Mixture
   Model.
4. Describe one graph-based segmentation method (graph cuts *or*
   spectral clustering) at a recipe level.
5. Define a *shape* as an equivalence class under similarity transforms,
   and explain why we use Procrustes / GPA before doing statistics on
   shapes.
6. Connect *Active Shape Models* to PCA on aligned landmark vectors.
7. Sketch the difference between rigid, affine, and diffeomorphic
   image-registration models and what similarity measure to use for
   intra-modal vs. inter-modal registration.
8. (Bonus: kernels) State why the kernel trick works without ever
   constructing the feature map; recognise RBF kernel as inducing an
   infinite-dimensional feature space.

## 2. Topics

### 2A. Classical segmentation
- **K-means clustering.** Objective, Voronoi partition, alternating
  optimisation, convergence to local optimum, NP-hardness for the
  global minimum, **k-means++** initialisation, **farthest-point**
  initialisation, **k-medoids** for robustness.
- **Distance choices.** Euclidean (\(\ell^2\)) vs. Manhattan (\(\ell^1\)),
  influence on the Voronoi cells.
- **Gaussian Mixture Models + Expectation–Maximisation (EM).** Soft
  assignments, full / diagonal / isotropic covariances, the
  E-step / M-step recipe.
- **Fuzzy C-means.** Soft k-means cousin.
- **Spectral clustering.** Graph Laplacian, eigenvectors, normalised
  cut.
- **Graph cuts.** Energy as a sum of unary + pairwise terms; max-flow
  / min-cut for binary labels (and \(α\)-expansion for multi-label).
- **Level sets.** Implicit-curve evolution driven by a PDE; the
  Chan–Vese energy.
- **(Modern bridge.)** U-Net for medical segmentation (2015); MedSAM
  (2024) — covered properly in Week 5.

### 2B. Statistical shape analysis
- **What is a shape?** Equivalence class under translation, rotation,
  isotropic scaling (the "similarity group"). Landmarks (anatomical,
  mathematical, pseudo). Pointset representation.
- **Procrustes analysis** — align two shapes by removing translation,
  scale, rotation. Closed-form solution via SVD of the
  cross-covariance.
- **Generalised Procrustes Analysis (GPA).** Align *all* shapes to a
  shared mean, iteratively.
- **Tangent-space approximation** of the shape space (so we can do
  Euclidean PCA on it).
- **Active Shape Models (ASM).** PCA on aligned landmark vectors;
  modes of variation = eigenvectors; you can *sample* synthetic shapes
  by walking along modes.
- **Active Appearance Models (AAM).** Joint geometry + texture model.
- Degrees of freedom of shape space:
  \( DN - D - 1 - \tfrac{D(D-1)}{2} \).

### 2C. Image registration (lighter coverage; supplementary deck)
- **Transformation models:** rigid → similarity → affine → linear →
  nonlinear → **diffeomorphic** (smooth & invertible). Parametric
  (B-splines) vs. dense (vector field per voxel).
- **Similarity measures:**
  - Same modality (T1 ↔ T1) → SSD.
  - Different modality (MRI ↔ CT) → normalised cross-correlation or
    **mutual information**.
- **Atlas building.** Iterate: register all to current mean → update
  mean → repeat. (Same recipe as GPA in shape space.)

### 2D. Kernel methods (lighter coverage; supplementary deck)
- **Generative vs. discriminative** classifiers.
- **SVM.** Maximum-margin hyperplane, the **KKT** conditions for the
  dual, support vectors.
- **Kernel trick.** \(k(x,y)=\langle\phi(x),\phi(y)\rangle\) without
  ever computing \(\phi\).
- **RBF / Gaussian kernel** → infinite-dimensional Hilbert space.
- **Reproducing Kernel Hilbert Space (RKHS)** and **Moore–Aronszajn**
  theorem (one-line statement).
- **Mercer / positive-definite** kernels.
- **Kernel PCA** — PCA in feature space via the **Gram matrix**.
  Gram–Schmidt for orthonormalisation.

## 3. Slide decks to read

1. `slides/Slides_MIC_ImageSegmentation.pdf` — 123 slides. Skim the
   later modern-DL part for now; the *classical* methods (k-means →
   GMM/EM → graph cuts → level sets) are the priority.
2. `slides/Slides_MIC_ShapeAnalysis.pdf` — 57 slides. Read in full.
3. `slides/Slides_MIC_Registration.pdf` — 42 slides. Supplementary.
4. `slides/Slides_MIC_KernelMethods.pdf` — 35 slides. Supplementary,
   but worth reading even if just for the KKT / RKHS vocabulary you'll
   hear repeatedly in ML courses.

## 4. Curated resources

| Topic | Intuition | Depth |
|---|---|---|
| K-means + GMM/EM | [StatQuest — K-means](https://www.youtube.com/watch?v=4b5d3muPQmA), [StatQuest — GMM/EM](https://www.youtube.com/watch?v=REypj2sy_5U) | Bishop, *PRML* ch. 9 (full) |
| Graph cuts | [Boykov & Kolmogorov demo (paper figures)](https://vision.cs.uwaterloo.ca/code/) | Boykov & Funka-Lea (2006), [*Graph Cuts and Efficient N-D Image Segmentation*](https://link.springer.com/article/10.1007/s11263-006-7934-5) |
| Spectral clustering | [Luxburg slides](https://people.csail.mit.edu/dsontag/courses/ml13/slides/lecture21.pdf) | von Luxburg (2007), [*A Tutorial on Spectral Clustering*](https://arxiv.org/abs/0711.0189) |
| Level sets / Chan–Vese | [Pascal Getreuer — Chan–Vese explainer (IPOL)](https://www.ipol.im/pub/art/2012/g-cv/) | Chan & Vese (2001), *Active Contours Without Edges* |
| Procrustes / GPA / ASM | (no good 10-min video; read instead) | Cootes et al. (1995), [*Active Shape Models — Their Training and Application*](https://www.sciencedirect.com/science/article/pii/S1077314285710041) |
| Diffeomorphic registration | [Voxelmorph blog](https://voxelmorph.csail.mit.edu/) | Beg et al. (2005), [*Computing large deformation metric mappings via geodesic flows of diffeomorphisms*](https://link.springer.com/article/10.1023/B%3AVISI.0000043755.93987.aa) |
| Mutual information for registration | [Wikipedia: Mutual information](https://en.wikipedia.org/wiki/Mutual_information) | Pluim, Maintz & Viergever (2003), [*Mutual-information-based registration of medical images: a survey*](https://ieeexplore.ieee.org/document/1217670) |
| Kernels & RKHS | [Cosma Shalizi notes — *Mercer's theorem & RKHS*](https://www.stat.cmu.edu/~cshalizi/350/lectures/16/lecture-16.pdf) | Schölkopf & Smola, *Learning with Kernels* (ch. 1–2) |
| SVM + KKT | [MIT 6.034 — Lecture on SVM (Patrick Winston)](https://www.youtube.com/watch?v=_PwhiWxHK8o) | Boyd & Vandenberghe, *Convex Optimization* ch. 5 (KKT) |
| Kernel PCA | [scikit-learn — kPCA example](https://scikit-learn.org/stable/auto_examples/decomposition/plot_kernel_pca.html) | Schölkopf, Smola & Müller (1998), *Kernel PCA* |

## 5. Notebooks

- ✅ `notebooks/01_shape_analysis_procrustes_pca.ipynb` — Procrustes-align two
  shapes (SVD / Umeyama), GPA to recover the mean shape, PCA for the modes of
  variation (mean ± 2σ).
- ✅ `notebooks/02_kmeans_gmm_em_segmentation.ipynb` — 3-tissue brain segmentation
  with k-means, then GMM/EM (soft memberships + log-likelihood curve), then an
  MRF/ICM smoothing pass.
- ✅ `notebooks/03_kernel_pca_toy.ipynb` — two moons: linear PCA fails, RBF kernel
  PCA (centred Gram matrix) separates the classes.

All three are NumPy + Matplotlib only.

## 6. Exercises

1. Show that, for k-means, fixing the assignments makes the objective
   convex in the cluster means.
2. Implement EM for a 2-component 1D GMM from scratch (no sklearn).
3. Given two pointsets, code Procrustes alignment (you'll need an SVD
   on \(\sum_n y_n x_n^T\)).
4. Derive the KKT conditions of the soft-margin SVM (one page; this is
   the rite of passage).

## 7. What's next

Week 5 introduces **convolutional neural networks** as a (very
powerful) class of learned models for medical image tasks. Frame
everything you learn in DL through the lens you've built in
weeks 1–4: forward model, prior, optimisation.
