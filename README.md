# MIC-SoC: Medical Image Computing — Summer of Code

A mentee handbook + code repo for an 8-week Summer-of-Code project on
**Medical Image Computing (MIC)**. The curriculum is built on top of
*CS-736 Medical Image Computing* (IIT Bombay, Prof. Suyash P. Awate) and
extends it with a small dose of modern deep learning at the end.

> **Course philosophy.** This is **not** "apply AI to medical images". It is
> a math-first course. You will spend most of your time on
> probability, linear algebra, optimisation, signal processing, and
> physics-based image formation models. Deep learning shows up only in the
> last two content weeks (CNNs / VAEs / GANs), and even there it is framed
> as *one* class of priors and *one* class of optimisers in the broader
> Bayesian picture you'll have built up by then.

---

## 1. Who this is for

- Audience: **interdisciplinary undergraduates** (CS / EE / mech / bio /
  physics / math). You do not need a deep ML background. You **do** need
  to be comfortable with basic linear algebra and calculus, and willing
  to brush up probability.
- Time commitment: ~8 weeks, ~10–15 hours/week.
- One mentor + one (or a few) mentees.

If you've never written a Python program with NumPy, do
[Week 0](#week-0-setup--prerequisites) first.

---

## 2. How to use this repo

Read in this order:

1. **`Overview/handbook_main.tex` — the Long Technical Handbook.** This
   is your *big-picture-first* reference. For every week it gives you a
   moderately technical overview of every term you will encounter, and
   then links you out to deeper material. **Read the relevant week's
   chapter end-to-end before opening any link.** The handbook exists so
   you don't waste time hopping between blog posts just to figure out
   what a word means.
2. **`Overview/syllabus_main.tex` — the Short Syllabus.** One-page-per-week
   tables of topics + curated links. Use it as a checklist while you
   work through the week.
3. **`week_N/Readme.md`** — concrete week-by-week plan: topics,
   resources, exercises, and which slide deck (in `slides/`) to read.
4. **`slides/`** — the **primary reading material**: Prof. Awate's
   CS-736 decks. The PDFs are too large for GitHub; **download them
   from this Drive folder** and drop them into `slides/`:
   <https://drive.google.com/drive/folders/1_yKltLUl4Zzi2coX6aGSsHBDPAwPPgZd?usp=sharing>.
   Each week's `Readme.md` tells you exactly which deck and which slide
   range to focus on. Treat the linked external resources as *intuition
   builders*; the slides are the source of truth.
5. **`week_N/notebooks/`** — Jupyter notebooks. Try them, modify them,
   break them.

---

## 3. Repo layout

```
MIC-SoC/
├── README.md                          ← you are here
├── slides/                            ← CS-736 slide decks (primary reading)
│   └── SLIDES_INDEX.md                ← which deck maps to which week
├── Overview/                          ← two LaTeX documents (the handbooks)
│   ├── handbook_main.tex              ← LONG technical handbook (read first each week)
│   ├── syllabus_main.tex              ← SHORT syllabus (week-by-week tables)
│   ├── handbook_main.pdf              ← compiled output (also shared with mentees)
│   ├── syllabus_main.pdf              ← compiled output
│   ├── references.bib
│   ├── sections/                      ← syllabus chapters (reserved for future split)
│   └── handbook_sections/             ← handbook chapters (reserved for future split)
├── week_0_to_1.5/   Image basics + probability & math foundations
├── week_1.5_to_3/   Image denoising + reconstruction (inverse problems, Bayesian)
├── week_3/          CT & MRI fundamentals (physics + modelling intuition)
├── week_4/          Shape analysis + classical segmentation   (+ Project 1: denoising)
├── week_5/          CNNs for medical images
├── week_6/          VAEs + GANs (deep generative modelling)    (+ Project 2: segmentation)
├── week_7/          Paper reading + guided implementation
└── week_8/          Final project
```

---

## 4. Calendar mapping (mentor's timeline ↔ folder)

| Calendar | Folder | Topics |
|---|---|---|
| **Week 1 – 1.5** | `week_0_to_1.5/` | Basics of images (pixels, intensity, representation); probability & mathematical foundations |
| **Week 1.5 – 3** | `week_1.5_to_3/` | Image denoising; image reconstruction (inverse problems, basics of Bayesian formulation) |
| **Week 3** | `week_3/` | CT scan and MRI fundamentals (physics + modeling intuition) |
| **Week 4** | `week_4/` | Shape analysis; image segmentation (clustering, classical approaches) — *Project 1 (denoising) due* |
| **Week 5 – 6.5** | `week_5/`, `week_6/` | Neural networks for images; VAEs and GANs (concept + applications) — *Project 2 (segmentation) due in `week_6`* |
| **Week 6.5 – 8** | `week_7/`, `week_8/` | Paper reading + guided implementation; final project work |

> Folder names carry the calendar span (e.g. `week_0_to_1.5`, `week_1.5_to_3`);
> the numbering deliberately mirrors the schedule above rather than a strict
> 1..8 count.

---

## Week 0: Setup & Prerequisites

### 0.1 Create the environment

We use Python 3.10 (most stable for the current PyTorch + MONAI stack).

```bash
conda create -n mic_soc python=3.10
conda activate mic_soc
```

> Activate `mic_soc` every time you open a new terminal for this project.

### 0.2 Install the classical-imaging stack (used in weeks 1–4)

```bash
conda install -c conda-forge numpy scipy matplotlib seaborn pandas \
    scikit-image scikit-learn statsmodels jupyter notebook
pip install nibabel pydicom SimpleITK
```

### 0.3 Install PyTorch + MONAI (used in weeks 5–8)

This step is the most fragile. If you have an NVIDIA GPU:

```bash
conda install pytorch torchvision pytorch-cuda=12.4 -c pytorch -c nvidia
```

CPU-only fallback:

```bash
conda install pytorch torchvision cpuonly -c pytorch
```

Then:

```bash
pip install monai tqdm einops
```

### 0.4 Sanity check

Open Jupyter:

```bash
jupyter notebook
```

Run `week_0_to_1.5/notebooks/01_image_basics_and_io.ipynb`. If the first cell
loads a NIfTI volume and shows a slice, you're set.

### 0.5 Prerequisites (skim before starting Week 1)

Don't try to "complete" these — skim, return as needed.

- **Linear algebra (intuition):**
  [3Blue1Brown — *Essence of Linear Algebra* playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
- **Probability (intuition):**
  [StatQuest — Probability vs Likelihood](https://www.youtube.com/watch?v=pYxNSUDSFH4),
  [StatQuest — Bayes' Theorem](https://www.youtube.com/watch?v=9wCnvr7Xw4E)
- **NumPy:**
  [scikit-image — A crash course on NumPy for images](https://scikit-image.org/docs/stable/user_guide/numpy_images.html)
- **Calculus refresh (if rusty):**
  [3Blue1Brown — *Essence of Calculus*](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)

---

## 5. Acknowledgement

The slide decks in `slides/` are © Prof. Suyash P. Awate and were
produced for CS-736 at IIT Bombay. They are bundled here with attribution,
as primary reading material for mentees, and should not be redistributed
outside this project.
