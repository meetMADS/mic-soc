# Week 0 — Setup & Prerequisites

*Do this once before Week 1. It gets your laptop ready and points you at the
intuition videos you'll lean on all course. You can read the whole site without
installing anything — these tools are only needed to **run** the notebooks.*

```{admonition} Goal
:class: tip
Have a working Python environment, be able to open a notebook, and have skimmed the
linear-algebra and probability refreshers.
```

## 1. Create the environment

We use Python 3.10 (most stable for the current PyTorch + MONAI stack).

```bash
conda create -n mic_soc python=3.10
conda activate mic_soc
```

> Activate `mic_soc` every time you open a new terminal for this project.

## 2. Classical-imaging stack (weeks 1–4)

```bash
conda install -c conda-forge numpy scipy matplotlib seaborn pandas \
    scikit-image scikit-learn statsmodels jupyter notebook
pip install nibabel pydicom SimpleITK
```

## 3. PyTorch + MONAI (weeks 5–8)

The most fragile step. With an NVIDIA GPU:

```bash
conda install pytorch torchvision pytorch-cuda=12.4 -c pytorch -c nvidia
```

CPU-only fallback:

```bash
conda install pytorch torchvision cpuonly -c pytorch
pip install monai tqdm einops
```

```{admonition} Don't want to install anything?
:class: note
Every hands-on notebook has an **Open in Colab** button (see **Labs**). Colab runs
in the browser with NumPy/Matplotlib already available — perfect for the
concept notebooks, and fine for the small PyTorch demos too.
```

## 4. Sanity check

```bash
jupyter notebook
```

Open `week_0_to_1.5/notebooks/01_image_basics_and_io.ipynb`. If the first cell loads
an image and shows it, you're set.

## 5. Prerequisites — skim, don't "complete"

Linear algebra intuition — 3Blue1Brown, *Essence of Linear Algebra*:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="3Blue1Brown: Essence of Linear Algebra" frameborder="0" allowfullscreen></iframe>

Probability vs likelihood — StatQuest:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/pYxNSUDSFH4" title="StatQuest: Probability vs Likelihood" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- **NumPy for images:** [scikit-image crash course](https://scikit-image.org/docs/stable/user_guide/numpy_images.html)
- **Calculus refresh:** [3Blue1Brown — *Essence of Calculus*](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)

When this is done, head to **Week 1 — Foundations**.
