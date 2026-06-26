# Week 5 · 📖 Read

- **A conv layer is the right inductive bias.** Sharing one small kernel gives
  **locality**, **weight sharing**, and **translation equivariance** — far fewer
  parameters than a dense layer. (DL "convolution" is really cross-correlation; it
  doesn't matter for learning.)
- **The supporting cast:** ReLU/GELU, pooling (or strided conv), **GroupNorm**
  (preferred for small medical batches), and task-matched losses — cross-entropy/focal
  for classification, **Dice/Tversky** for imbalanced segmentation. Train with
  **Adam/AdamW**; backprop is reverse-mode autodiff.
- **The architecture that matters:** **U-Net** (encoder–decoder + skip connections)
  is the *de facto* medical-segmentation backbone; **nnU-Net** is the recipe that
  wins most challenges. ViT/SAM are worth knowing; CNNs still win on small data.
- **The medical twist:** small datasets (augment/transfer); 2-D vs 3-D trade-offs;
  scanner/site **distribution shift**; never report accuracy for segmentation — use
  **Dice, IoU, Hausdorff-95, ASSD**.

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../../pdfs/MIC_Neural_Networks_for_Images.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../../pdfs/MIC_Neural_Networks_for_Images.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

> **Primary slides:** `Slides_MIC_DeepGenerativeModeling`, **first half (≈1–30)** is
> the CNN chapter — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).

<div class="mic-mark" data-id="w5_read" data-label="Read"></div>

---
Next: do the notebook in the sidebar, then **[✅ Checkpoint](checkpoint.md)**.
