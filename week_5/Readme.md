# Week 5 — Convolutional neural networks for medical images

> Calendar: **Week 5 to mid-Week 6.** First "deep" week. We narrow the
> scope: only CNNs, only the architectures that matter for medical
> imaging (classification, segmentation). VAEs/GANs are next week.

---

## 0. Start here: theory handbook

Read **`theory/MIC_Neural_Networks_for_Images.tex`** (compile with `pdflatex`
twice, or Overleaf) — the self-contained chapter: the neuron and why
nonlinearity matters, convolution as the right inductive bias, the supporting
layers, training (loss / backprop / optimisers / regularisation), the
architecture zoo (LeNet → ResNet → U-Net → nnU-Net → ViT/SAM, with the honest
"nnU-Net is still the benchmark" caveat), and the medical-imaging twists. Then do
**`notebooks/01_cnn_building_blocks_from_scratch.ipynb`**.

---

## 1. What you should be able to do by the end

1. Write the convolution-layer forward equation; explain why DL
   "convolution" is really cross-correlation and why it doesn't matter
   for learning.
2. Sketch a small CNN (Conv → ReLU → Pool → ...) and count its
   parameters.
3. Reason about receptive field, stride, padding, dilation.
4. Explain *why* CNNs beat fully-connected nets on images (translation
   equivariance, weight sharing, locality).
5. Describe **U-Net** and explain the role of skip connections in the
   medical-imaging context.
6. Train a small classifier and a small U-Net on a medical dataset
   in PyTorch (CPU is fine).
7. Evaluate with the correct metrics (accuracy / AUROC for classif,
   Dice / Hausdorff for segmentation).

## 2. Topics

### 2A. The CNN itself
- **Convolution layer.** Kernel, channels-in × channels-out, stride,
  padding, dilation; number of parameters.
- **Cross-correlation ≠ convolution.** What DL libraries actually
  compute; why it's fine.
- **Activation functions.** ReLU, GELU, sigmoid, softmax, softplus.
- **Pooling.** Max-pool, avg-pool, why we use stride instead these
  days.
- **Normalisation layers.** BatchNorm, GroupNorm (preferred for small
  medical batches), InstanceNorm.
- **Loss functions for medical tasks.**
  - Cross-entropy / focal loss for classification.
  - Dice loss, generalised Dice, Tversky for imbalanced segmentation.
- **Backpropagation.** Reverse-mode autodiff in one paragraph.
- **Optimisers.** SGD + momentum, Adam, AdamW; learning-rate schedules.

### 2B. Architectures you actually meet
- **LeNet / AlexNet / VGG** — historical, useful to read once.
- **ResNet** — residual connections; why they let depth scale.
- **U-Net** (Ronneberger et al., MICCAI 2015) — the *de facto*
  medical-image segmentation backbone. Encoder-decoder with
  scale-matched skip connections.
- **nnU-Net** (Isensee et al., 2021) — the engineering recipe that
  makes U-Net win nearly every medical-segmentation challenge.
- **Vision Transformers** (briefly): how attention replaces convolution;
  why CNNs are still preferred for small medical datasets.
- **MedSAM / SAM** (briefly): foundation-model segmentation, prompted.

### 2C. The medical-imaging twist
- **Small datasets.** Why 100 labelled scans is "a lot" in medical;
  augmentation, transfer learning, semi-supervised tricks.
- **3D vs. 2D.** Slice-by-slice 2D nets vs. true 3D nets;
  memory/compute trade-offs.
- **Distribution shift.** Scanner, site, vendor, protocol differences.
- **Evaluation.** Why accuracy is a terrible segmentation metric;
  Dice, IoU, Hausdorff 95, ASSD.

## 3. Slide deck to read

`slides/Slides_MIC_DeepGenerativeModeling.pdf` — **the first half
(slides 1 to ~30) is the CNN chapter**: conv layer → activations →
pooling → fully-connected → CNNs in the brain → encoder-decoder →
U-Net → autoencoders. Read these slides first; the VAE/GAN second half
is for Week 6.

## 4. Curated resources

| Topic | Intuition | Depth |
|---|---|---|
| What is a CNN | [3Blue1Brown — *But what is a neural network?* (ch. 1)](https://www.youtube.com/watch?v=aircAruvnKk) and [ch. 4 on backprop](https://www.youtube.com/watch?v=tIeHLnjs5U8) | [Stanford CS231n notes](https://cs231n.github.io/) — sections "Convolutional Networks" and "Optimisation" |
| Convolution arithmetic | [Dumoulin & Visin — *A guide to convolution arithmetic for DL*](https://arxiv.org/abs/1603.07285) | (same paper, in depth) |
| PyTorch starter | [PyTorch 60-minute blitz](https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html) | (same) |
| U-Net | [Walkthrough video — *U-Net explained*](https://www.youtube.com/watch?v=NhdzGfB1q74) | Ronneberger, Fischer & Brox (2015), [*U-Net: Convolutional Networks for Biomedical Image Segmentation*](https://arxiv.org/abs/1505.04597) |
| nnU-Net | [nnU-Net author talk](https://www.youtube.com/watch?v=enwBI4yPaa8) | Isensee et al. (2021), [*nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation*](https://www.nature.com/articles/s41592-020-01008-z) |
| MONAI (medical-imaging PyTorch) | [MONAI tutorials notebook 01](https://github.com/Project-MONAI/tutorials/tree/main/2d_segmentation) | [MONAI docs](https://docs.monai.io/) |
| Evaluation metrics | [Maier-Hein et al. — *Metrics Reloaded*](https://www.nature.com/articles/s41592-023-02151-z) | (same paper) |
| Survey of DL in medical imaging | (skip video) | Litjens et al. (2017), [*A survey on deep learning in medical image analysis*](https://www.sciencedirect.com/science/article/pii/S1361841517301135) |

## 5. Notebooks

- ✅ `notebooks/01_cnn_building_blocks_from_scratch.ipynb` — **done.** Convolution
  as a feature detector, then a tiny network trained from scratch with
  hand-written backprop on a non-linearly-separable dataset (loss curve +
  decision boundary, linear-vs-nonlinear). NumPy + Matplotlib only — the learning
  mechanics, demystified.
- ⏳ *(optional, PyTorch — run in the `mic_soc` env via the cited tutorials)*
  a CNN classifier (MedMNIST chest X-ray; accuracy / AUROC) and a tiny **U-Net**
  segmentation (MedMNIST; Dice / IoU). The MONAI 2D-segmentation tutorial is the
  fastest on-ramp.

## 6. Exercises

1. Implement 2D convolution by hand in NumPy (no `scipy.signal`). Match
   PyTorch output to 1e-6.
2. Count the parameters of a U-Net with 4 down-blocks and base width 32.
3. Train a U-Net with (i) cross-entropy and (ii) Dice loss on the same
   imbalanced task. Compare per-class Dice.
4. Re-read your Week-2 MAP-denoising notebook. Now denoise with a small
   CNN trained on (clean, noisy) pairs. Compare PSNR.

## 7. What's next

Week 6: **generative** deep models — VAEs and GANs. The course's
recurring theme returns one last time: a generative model **is a
prior**.
