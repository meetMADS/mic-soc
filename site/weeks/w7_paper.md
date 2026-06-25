# Week 7 — Paper Reading + Guided Implementation

*Read one paper deeply, reproduce one experiment from it. You now have the whole
vocabulary needed to read a MICCAI / MedIA / TMI paper end to end — time to prove it.*

```{admonition} 📄 The paper to implement is provided by your mentor
:class: important
The specific paper for this block is **supplied by your mentor**. The placeholder
notice (<a href="../pdfs/Paper_To_Implement_PLACEHOLDER.pdf">Paper_To_Implement_PLACEHOLDER.pdf</a>)
says *"to be updated — please wait for the upload"* and lists what to prepare
meanwhile. Everything below stays valid whatever paper you're given.
```

```{admonition} Goal for this week
:class: tip
Apply a structured reading method and produce a one-page summary; reproduce **one**
figure or number from the paper; run a baseline (classical or simple CNN) on the
*same* data for context; and have a defensible answer to *"why does this method
actually work?"*
```

## ▶ Watch (intuition first)

How to read a research paper — Andrew Ng:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/733m6qBH-jI" title="Andrew Ng: How to read a paper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 📖 Read (the method)

- **The three-pass method.** Pass 1 (5–10 min): title, abstract, figures,
  conclusions — decide if it's worth more. Pass 2 (~1 h): read carefully, skip
  proofs, write a one-page summary (problem, prior work, key idea, math, evaluation,
  limitations). Pass 3 (a day): re-implement the key equation/experiment — where you
  get stuck is where you don't yet understand it.
- **Pick well.** Something that (a) solves a problem you touched in weeks 2–6,
  (b) is in a strong venue (MICCAI/MedIA/TMI/IPMI/MIDL/NeurIPS, year ≥ 2018),
  (c) has **public code** and a **public dataset**, and (d) is **≤ 12 pages**. Save
  the 30-page diffusion-theory papers for later.

### Starter paper pool (pick one — all have code)

| Theme | Paper | Why it's a good first reproduction |
|---|---|---|
| Reconstruction | [MoDL (Aggarwal et al., 2018)](https://ieeexplore.ieee.org/document/8434321) | Bridges Week 3 (model-based) and Weeks 5–6 (learned). |
| Segmentation | [nnU-Net (Isensee et al., 2021)](https://www.nature.com/articles/s41592-020-01008-z) | Most-used recipe; feasible on a small dataset. |
| Foundation seg. | [MedSAM (Ma et al., 2024)](https://www.nature.com/articles/s41467-024-44824-z) | In the slide deck; public code, many tutorials. |
| Registration | [VoxelMorph (Balakrishnan et al., 2019)](https://arxiv.org/abs/1809.05231) | Bridges Week 4 (registration) and Week 5 (CNNs). |
| Shape | [DeepSSM (Bhalodia et al., 2018)](https://arxiv.org/abs/1810.00111) | Bridges Week 4 (ASM) and Weeks 5–6. |
| Generative prior | [Score-based MRI (Chung & Ye, 2022)](https://www.sciencedirect.com/science/article/pii/S1361841522001268) | Connects every week; most ambitious. |

### Datasets you can actually get this week

- **MedMNIST v2** (`pip install medmnist`) — runs on a laptop.
- **OASIS** (brain MRI, free registration), **BraTS** (tumour seg.),
  **fastMRI** (k-space recon), and the
  [Grand-Challenge index](https://grand-challenge.org/challenges/).

## 🧪 Do (deliverables)

In your `week_7/` folder: `paper.md` (one-page summary, template in the repo),
`notes/` (your derivations of the key equations), `reproduction/` (code for the one
experiment), and `report.md` (claim vs. what you reproduced vs. the gap).

More detail + the summary template:
[`week_7/Readme.md`](https://github.com/meetMADS/mic-soc/blob/main/week_7/Readme.md).

## ✅ Checkpoint — submit to your mentor

```{admonition} Submit before moving on
:class: important
Paste your Google Form embed code below — attach your **one-page paper summary** and
the link to your reproduction repo.
```

<!-- Paste your Google Form embed iframe here. -->

*(Checkpoint form to be added — see `HOW_TO_PUBLISH.md`.)*
