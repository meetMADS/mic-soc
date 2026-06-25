# Week 7 — Paper reading + guided implementation

> Calendar: **late Week 6.5 to mid-Week 7.** Goal: read one paper deeply,
> reproduce one experiment from it.

---

## 📄 The paper to implement — provided by your mentor

The specific paper you'll reproduce this block is **supplied by your mentor**. A
placeholder notice is in **`theory/Paper_To_Implement_PLACEHOLDER.tex`** (compile
to a short PDF) — it says *"to be updated; please wait for the upload"* and lists
what to prepare meanwhile. Everything else (how to read a paper, a starter pool,
datasets, deliverables) is below and stays valid whatever paper you're given.

---

## 1. What you should be able to do by the end

1. Apply a structured paper-reading method to a MICCAI / MedIA / TMI
   paper and produce a one-page summary.
2. Set up a small experiment that *reproduces* one figure or one
   number from the paper.
3. Run a baseline (classical or simple CNN) against the paper's method
   on the *same* data, to give context.
4. Have a defensible answer to: *"why does the proposed method
   actually work?"*

## 2. How to read a paper

Use Andrew Ng's [three-pass method](https://www.youtube.com/watch?v=733m6qBH-jI):

1. **Pass 1 (5–10 min).** Title, abstract, figures, conclusions. Decide
   if it's worth a deeper read.
2. **Pass 2 (~1 h).** Read carefully but skip proofs. Write a one-page
   summary covering: problem, prior work, key idea, math, evaluation,
   limitations.
3. **Pass 3 (a day).** Re-implement the key equation or experiment.
   Where you're stuck, that's where you don't yet understand it.

Keep a personal `paper_summaries/` folder.

## 3. How to pick a paper

You want something:

- Solves a problem you've already touched in weeks 2–6
  (denoising / reconstruction / segmentation / generation).
- Published in **MICCAI, MedIA, TMI, IPMI, MIDL, NeurIPS** (any year
  ≥ 2018).
- Has **public code** (search [paperswithcode.com](https://paperswithcode.com/area/medical))
  and a **public dataset** — otherwise you'll waste a week getting
  data access.
- Is **at most 12 pages**. Save the 30-page diffusion theory papers
  for after the project.

## 4. Recommended starting paper pool

Pick **one**. All have code and reasonable compute requirements.

| Theme | Paper | Why it's a good first reproduction |
|---|---|---|
| Reconstruction | Aggarwal, Mani & Jacob (2018), [*MoDL: Model-Based Deep Learning Architecture for Inverse Problems*](https://ieeexplore.ieee.org/document/8434321) | Cleanly bridges Week 3 (model-based) and Weeks 5–6 (learned). |
| Segmentation | Isensee et al. (2021), [*nnU-Net*](https://www.nature.com/articles/s41592-020-01008-z) | The most-used recipe in medical segmentation; reproducing on a small dataset is feasible. |
| Self-supervised pre-training | Tang et al. (2022), [*Self-Supervised Pre-Training of Swin Transformers for 3D Medical Image Analysis*](https://arxiv.org/abs/2111.14791) | Modern, transformer-based, but well-engineered. |
| Generative prior for reconstruction | Chung & Ye (2022), [*Score-based diffusion models for accelerated MRI*](https://www.sciencedirect.com/science/article/pii/S1361841522001268) | Connects every week of the course. Most ambitious option. |
| Foundation segmentation | Ma et al. (2024), [*Segment anything in medical images*](https://www.nature.com/articles/s41467-024-44824-z) — **MedSAM** | Already in the slide deck; published code, lots of tutorials. |
| Registration | Balakrishnan et al. (2019), [*VoxelMorph: A Learning Framework for Deformable Medical Image Registration*](https://arxiv.org/abs/1809.05231) | Bridges Week 4 (classical registration) and Week 5 (CNNs). |
| Shape | Bhalodia et al. (2018), [*DeepSSM: A Deep Learning Framework for Statistical Shape Modeling*](https://arxiv.org/abs/1810.00111) | Bridges Week 4 (ASM) and Weeks 5–6 (DL). |

## 5. Datasets you can actually get this week

- **MedMNIST v2** — `pip install medmnist`. 28×28 and 64×64 medical
  classification + segmentation; runs on a laptop.
- **OASIS-1 / OASIS-3** — brain MRI; needs free registration.
- **BraTS** challenge data — brain tumour segmentation; multi-modal MRI.
- **NIH Chest X-rays** — chest X-rays; large.
- **fastMRI** — MRI k-space; the standard for reconstruction work.
- **Grand-Challenge** — index of dozens of medical-imaging challenges
  with data: [grand-challenge.org](https://grand-challenge.org/challenges/).

## 6. Deliverables for this week

In your `week_7/` folder, create:

- `paper.md` — the one-page paper summary (template below).
- `notes/` — derivations of the paper's key equations, in your own
  handwriting (or LaTeX).
- `reproduction/` — the code that reproduces the *one* experiment you
  picked.
- `report.md` — short note: what did the paper claim, what did you
  reproduce, what was the gap, what does it teach you.

### Paper-summary template (copy into `paper.md`)

```markdown
# <Title>
- Venue / year:
- Authors:
- One-line summary:
- Problem:
- Prior work and its limitation:
- Key idea:
- Method (math, in your words):
- Experimental setup:
- Headline result:
- Why does it work? (your hypothesis)
- Limitations / failure modes:
- What I want to reproduce:
```

## 7. Resources

- Andrew Ng — [*How to Read a Paper*](https://www.youtube.com/watch?v=733m6qBH-jI).
- S. Keshav — [*How to Read a Paper* (1-page classic)](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf).
- Papers with Code — [Medical](https://paperswithcode.com/area/medical).
- MONAI — [model zoo & tutorials](https://github.com/Project-MONAI/tutorials).
- Connected Papers — [https://www.connectedpapers.com](https://www.connectedpapers.com)
  (lets you graph a paper's citation neighbourhood).
- `slides/Slides_ProjectTopicExamples.pdf` — Prof. Awate's curated
  list of project ideas with seminal references; treat it as a starter
  menu.

## 8. What's next

Week 8: build it into a complete final project (data + method +
evaluation + write-up + 10-min talk).
