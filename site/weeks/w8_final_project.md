# Week 8 — Final Project

*Pull everything together: data + method + evaluation + write-up + a 10-minute talk.*

```{admonition} The paper your project builds on may be mentor-provided
:class: note
See the Week 7 placeholder
(<a href="../pdfs/Paper_To_Implement_PLACEHOLDER.pdf">Paper_To_Implement_PLACEHOLDER.pdf</a>),
"to be updated" until the paper is uploaded. The rubric and deliverables below apply
regardless of the specific paper or topic.
```

```{admonition} Goal for this block
:class: tip
Ship a non-trivial project with a **baseline**, **quantitative** results on a
held-out test set in **task-appropriate metrics**, a clear write-up that places the
method in the Bayesian / inverse-problem framework, and a short live demo.
```

## 📋 Deliverables (what you submit)

1. **`report.pdf`** — 6–10 pages (template in `Overview/`): introduction, related
   work, method (with math), experiments, results (≥1 quantitative table + ≥1
   qualitative figure), discussion, references.
2. **`slides.pdf`** — 10–15 slides for a 10-minute talk.
3. **`code/`** — clean and reproducible: `requirements.txt`/`environment.yml`, a
   README with the *exact* run commands, and a tiny example dataset or download
   script.
4. **`results/`** — figures, tables, predictions.
5. **A short live demo** — one inference, end to end.

## 🧭 Rubric (mirrors Prof. Awate's CS-736 grading)

| Dimension | What "good" looks like |
|---|---|
| Difficulty of topic | A non-trivial problem, not just "run nnU-Net". |
| Theory & understanding | You can derive the central equation and place it in the Bayesian / inverse-problem frame. |
| Empirical analysis | Compared against ≥1 baseline; real numbers, not just pretty pictures. |
| Slides | One key idea per slide; figures > bullets; you tell a story. |
| Code quality | A peer can clone and run it; sensible names; README explains how. |

## 💡 Suggested project shapes (pick one)

These reuse the math you already know:

- **Bayesian denoising with a learned prior** — small CNN denoiser vs. Week 2's
  MRF-prior MAP.
- **Under-sampled MRI reconstruction** — a model-based unrolled net (MoDL / tiny
  ADMM-Net) on fastMRI vs. zero-filled / FBP-like baselines.
- **Brain-tumour segmentation** — U-Net on a BraTS subset vs. nnU-Net out-of-the-box;
  analyse failure cases.
- **Shape-prior segmentation** — ASM (Week 4) + CNN initialiser; show the ASM
  regularises away unrealistic predictions.
- **Cross-modality synthesis** — small CycleGAN/pix2pix for CT-from-MRI.
- **VAE anomaly detection** — VAE on healthy chest X-rays; detect pneumonia by
  reconstruction error vs. a supervised baseline.

## 🗓 Timing (recommended)

Day 1: pin problem/dataset/baseline/method (1-paragraph plan). Day 2: dataloader +
end-to-end smoke test on 5 examples. Day 3: baseline. Days 4–5: proposed method.
Day 6: validation sweep. Day 7: final tables/figures. Day 8: draft report. Day 9:
slides + practice. Day 10: polish, submit.

## ⚠️ Common mistakes to avoid

No baseline · training loss as the headline metric (report held-out test metrics:
Dice/AUROC/PSNR/SSIM) · a tiny test set (cross-validate; report intervals) · no
qualitative failure analysis (always show two failures and discuss) · forgetting
reproducibility (pin seeds; commit the environment; save weights).

Full details, resources, and "what's after this course":
[`week_8/Readme.md`](https://github.com/meetMADS/mic-soc/blob/main/week_8/Readme.md).

## ✅ Final submission — to your mentor

```{admonition} Submit your project
:class: important
Paste your Google Form embed code below — attach links to your `report.pdf`,
`slides.pdf`, and code repository.
```

<!-- Paste your Google Form embed iframe here. -->

*(Submission form to be added — see `HOW_TO_PUBLISH.md`.)*
