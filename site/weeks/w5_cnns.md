# Week 5 — Convolutional Neural Networks for Medical Images

*The first "deep" week. We keep the scope tight: only CNNs, and only the
architectures that matter for medical imaging (classification, segmentation).
Frame everything through the lens you built in weeks 1–4: forward model, prior,
optimisation.*

```{admonition} Goal for this week
:class: tip
Write the conv-layer forward pass and count a small net's parameters; reason about
receptive field, stride, padding, dilation; explain *why* CNNs beat fully-connected
nets on images (locality, weight sharing, translation equivariance); describe
**U-Net** and the role of **skip connections**; and pick the right metric
(AUROC for classification, **Dice/Hausdorff** for segmentation).
```

## ▶ Watch (intuition first)

But what *is* a neural network? — 3Blue1Brown:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aircAruvnKk" title="3Blue1Brown: Neural networks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

U-Net explained:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/NhdzGfB1q74" title="U-Net explained" frameborder="0" allowfullscreen></iframe>

## 📖 Read (the core ideas)

- **A conv layer is the right inductive bias.** Sharing one small kernel across the
  image gives **locality**, **weight sharing**, and **translation equivariance** —
  far fewer parameters than a dense layer, and the prior that "a feature is a
  feature wherever it appears." (DL "convolution" is really cross-correlation; it
  doesn't matter for learning.)
- **The supporting cast:** ReLU/GELU nonlinearities, pooling (or strided conv),
  **GroupNorm** (preferred over BatchNorm for small medical batches), and
  task-matched losses — cross-entropy/focal for classification, **Dice/Tversky**
  for imbalanced segmentation. Train with **Adam/AdamW** + a schedule; backprop is
  just reverse-mode autodiff.
- **The architecture that matters:** **U-Net** (encoder–decoder with scale-matched
  skip connections) is the *de facto* medical-segmentation backbone; **nnU-Net** is
  the engineering recipe that still wins most challenges. ResNet's residuals let
  depth scale; ViT/SAM are worth knowing, but CNNs remain preferred on small
  medical datasets.
- **The medical twist:** 100 labelled scans is "a lot" (augment, transfer,
  semi-supervise); 2-D vs 3-D is a memory trade-off; beware scanner/site
  **distribution shift**; and never report accuracy for segmentation — use
  **Dice, IoU, Hausdorff-95, ASSD**.

<details style="margin:0.6rem 0;">
<summary>📖 <b>Read the full chapter here</b> — auto-compiled PDF (or <a href="../pdfs/MIC_Neural_Networks_for_Images.pdf" target="_blank">open in a new tab ↗</a>)</summary>
<iframe src="../pdfs/MIC_Neural_Networks_for_Images.pdf" width="100%" height="780" style="border:1px solid #ddd;border-radius:6px;margin-top:8px;"></iframe>
</details>

> **Primary slides:** `Slides_MIC_DeepGenerativeModeling`, **first half (≈1–30)** is
> the CNN chapter — from the
> [course slide Drive folder](https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing).
> (The VAE/GAN second half is Week 6.)

## 🧪 Do (hands-on)

**`01_cnn_building_blocks_from_scratch.ipynb`** (NumPy + Matplotlib) — convolution
as a feature detector, then a tiny network trained from scratch with hand-written
backprop on a non-linearly-separable dataset (loss curve + decision boundary). The
learning mechanics, demystified.

[▶ Open in Colab](https://colab.research.google.com/github/meetMADS/mic-soc/blob/main/week_5/notebooks/01_cnn_building_blocks_from_scratch.ipynb)
 · [view on GitHub](https://github.com/meetMADS/mic-soc/blob/main/week_5/notebooks/01_cnn_building_blocks_from_scratch.ipynb)

> **Optional (PyTorch):** train a CNN classifier (MedMNIST chest X-ray; AUROC) and a
> tiny **U-Net** (MedMNIST; Dice/IoU). The
> [MONAI 2D-segmentation tutorial](https://github.com/Project-MONAI/tutorials/tree/main/2d_segmentation)
> is the fastest on-ramp.

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below (Form → Send → `<>` → copy the `<iframe>`).
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
