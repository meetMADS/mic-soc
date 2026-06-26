# Week 4 — Shape Analysis & Classical Segmentation

*Structure-from-image: extracting labels, contours, and shapes with classical
(non-deep) methods. Wide topic, but each piece is small — and they share one idea:
align/cluster, then do statistics.*

```{admonition} ⭐ Project 1 is due around here (course midpoint)
:class: important
Your first implementation project — **Bayesian image denoising** on real medical
data, a slimmed-down version of assignment `a1` — falls at this point. Brief:
[`week_4/project_denoising.md`](https://github.com/meetMADS/mic-soc/blob/main/week_4/project_denoising.md).
```

```{admonition} Goal for this week
:class: tip
State the **k-means** objective and its two-step optimisation; recognise the
**EM** updates for a **GMM**; define a **shape** as an equivalence class under
similarity transforms and explain why we **Procrustes**-align before doing
statistics; connect **Active Shape Models** to PCA on aligned landmarks; and state
why the **kernel trick** works without ever building the feature map.
```

## ▶ Watch (intuition first)

K-means clustering — StatQuest:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/4b5d3muPQmA" title="StatQuest: K-means" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Gaussian Mixture Models & EM — StatQuest:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/REypj2sy_5U" title="StatQuest: GMM and EM" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **Segmentation = clustering pixels.** **K-means** alternates assign↔update
  (Voronoi partition; local optimum; **k-means++** init). **GMM + EM** softens it:
  E-step computes responsibilities, M-step re-fits Gaussians. Add an **MRF/ICM**
  smoothing pass so neighbours agree — your Week 2 prior, reused. Graph cuts, level
  sets (Chan–Vese), and spectral clustering are the other classical families.
- **A shape is what's left after removing pose.** Strip translation, scale, and
  rotation (the **similarity group**). **Procrustes** aligns two shapes via the SVD
  of their cross-covariance; **Generalised Procrustes (GPA)** aligns *all* shapes to
  an iteratively-updated mean.
- **Statistics on shapes = PCA on aligned landmarks.** That's an **Active Shape
  Model**: eigenvectors are modes of variation; walk along a mode to *sample*
  plausible shapes (mean ± 2σ).
- **Kernels (bonus).** `k(x,y) = ⟨φ(x), φ(y)⟩` lets linear methods act in a rich
  (even infinite-dim) feature space without ever computing `φ`. **Kernel PCA** runs
  PCA via the Gram matrix; the **RBF** kernel separates data linear PCA can't.

<p>📄 <b>The three full chapters (auto-compiled) — read inline:</b></p>

<details style="margin:0.4rem 0;">
<summary>📖 Shape analysis (or <a href="../pdfs/MIC_Shape_Analysis.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../pdfs/MIC_Shape_Analysis.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<details style="margin:0.4rem 0;">
<summary>📖 Image segmentation (or <a href="../pdfs/MIC_Image_Segmentation.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../pdfs/MIC_Image_Segmentation.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<details style="margin:0.4rem 0;">
<summary>📖 Kernel methods (or <a href="../pdfs/MIC_Kernel_Methods.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../pdfs/MIC_Kernel_Methods.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<p style="margin-top:6px;"><i>Registration is a lighter, supplementary topic (slide deck only).</i></p>

> **Primary slides:** `Slides_MIC_ImageSegmentation` (123, classical part first),
> `Slides_MIC_ShapeAnalysis` (57, in full), plus supplementary
> `Slides_MIC_Registration` (42) and `Slides_MIC_KernelMethods` (35) — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

## 🔬 Assignment a4 (provided) — run & observe

```{admonition} Shape analysis + kernel PCA *are* the instructor-provided a4 assignment
:class: note
a4 is already coded — **run it and observe** after the theory above. Two notebooks
cover it: shape analysis (Procrustes → GPA → PCA modes) and the kernel-PCA toy
(linear PCA fails on two moons; RBF kernel PCA separates them).

[Shape ▶ Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/01_shape_analysis_procrustes_pca.ipynb)
 · [Kernel PCA ▶ Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/03_kernel_pca_toy.ipynb)
```

## 🧪 Do (hands-on)

Three notebooks (NumPy + Matplotlib only):

1. **Shape analysis** — Procrustes-align two shapes (SVD/Umeyama), GPA for the mean
   shape, PCA for the modes of variation.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/01_shape_analysis_procrustes_pca.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_4/notebooks/01_shape_analysis_procrustes_pca.ipynb)
2. **Segmentation** — 3-tissue brain segmentation: k-means → GMM/EM (soft
   memberships + log-likelihood) → an MRF/ICM smoothing pass.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/02_kmeans_gmm_em_segmentation.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_4/notebooks/02_kmeans_gmm_em_segmentation.ipynb)
3. **Kernel PCA toy** — two moons: linear PCA fails, RBF kernel PCA separates them.
   [Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_4/notebooks/03_kernel_pca_toy.ipynb)
   · [GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_4/notebooks/03_kernel_pca_toy.ipynb)

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below — and attach your **Project 1 (denoising)**
report/result link.
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
