# Week 4 · 📖 Read

- **Segmentation = clustering pixels.** **K-means** alternates assign↔update;
  **GMM + EM** softens it (E-step responsibilities, M-step re-fit). Add an
  **MRF/ICM** smoothing pass so neighbours agree — your Week 2 prior, reused.
- **A shape is what's left after removing pose.** Strip translation, scale, rotation.
  **Procrustes** aligns two shapes via the SVD of their cross-covariance; **GPA**
  aligns all shapes to an iteratively-updated mean.
- **Statistics on shapes = PCA on aligned landmarks** (an **Active Shape Model**):
  eigenvectors are modes of variation; walk a mode to sample plausible shapes.
- **Kernels (bonus).** `k(x,y) = ⟨φ(x), φ(y)⟩` lets linear methods act in a rich
  feature space without computing `φ`. **Kernel PCA** runs PCA via the Gram matrix.

<p>📄 <b>The three full chapters (auto-compiled) — read inline:</b></p>

<details style="margin:0.4rem 0;">
<summary>📖 Shape analysis (or <a href="../../pdfs/MIC_Shape_Analysis.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../../pdfs/MIC_Shape_Analysis.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<details style="margin:0.4rem 0;">
<summary>📖 Image segmentation (or <a href="../../pdfs/MIC_Image_Segmentation.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../../pdfs/MIC_Image_Segmentation.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

<details style="margin:0.4rem 0;">
<summary>📖 Kernel methods (or <a href="../../pdfs/MIC_Kernel_Methods.pdf" target="_blank">open ↗</a>)</summary>
<iframe src="../../pdfs/MIC_Kernel_Methods.pdf" width="100%" height="760" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

> **Primary slides:** `Slides_MIC_ImageSegmentation` (123), `Slides_MIC_ShapeAnalysis`
> (57), plus supplementary `Slides_MIC_Registration` (42) and
> `Slides_MIC_KernelMethods` (35) — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

<div class="mic-mark" data-id="w4_read" data-label="Read"></div>

---
Next: do the three notebooks in the sidebar, then **[✅ Checkpoint](checkpoint.md)**.
