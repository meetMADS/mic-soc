# Week 4 — Shape Analysis & Classical Segmentation

*Structure-from-image: extracting labels, contours, and shapes with classical
(non-deep) methods — align/cluster, then do statistics.*

```{admonition} ⭐ Project 1 is due around here (course midpoint)
:class: important
Your first implementation project — **Bayesian image denoising** — falls at this
point. See **[Project 1 · Denoising](../projects/p1_denoising.md)**.
```

```{admonition} Goal for this week
:class: tip
State the **k-means** objective; recognise the **EM** updates for a **GMM**; define a
**shape** as an equivalence class under similarity transforms and why we
**Procrustes**-align before statistics; connect **Active Shape Models** to PCA on
landmarks; and state why the **kernel trick** works without building the feature map.
```

## This week, step by step

1. **[▶ Watch](w4/watch.md)** — k-means and GMM/EM.
2. **[📖 Read](w4/read.md)** — the core ideas + the three full chapters.
3. **🧪 Do** — three notebooks (the provided **a4** run-and-observe), rendered here:
   - [Shape analysis — Procrustes / GPA / PCA](../notebooks/w4/01_shape_analysis_procrustes_pca.ipynb)
   - [k-means / GMM-EM / MRF segmentation](../notebooks/w4/02_kmeans_gmm_em_segmentation.ipynb)
   - [Kernel PCA (two moons)](../notebooks/w4/03_kernel_pca_toy.ipynb)
4. **[✅ Checkpoint](w4/checkpoint.md)** — submit (+ your Project 1 result).

<div class="mic-mark" data-id="w4_shape_segmentation" data-label="Week 4 overview"></div>
