# Week 8 — Final project

> Calendar: **mid-Week 7 to end of Week 8.** Pull everything together.

> **Note:** the paper your project may build on is **provided by your mentor** —
> see the placeholder `../week_7/theory/Paper_To_Implement_PLACEHOLDER.tex`
> ("to be updated" until the paper is uploaded). The rubric and deliverables below
> apply regardless of the specific paper/topic.

## 1. Deliverables (what you submit to your mentor)

1. **`report.pdf`** — 6–10 pages. Use the template in
   `../Overview/`. Structure: introduction, related work, method
   (with math), experiments, results (with at least one quantitative
   table and one qualitative figure), discussion, references.
2. **`slides.pdf`** — 10–15 slides for a 10-minute talk.
3. **`code/`** — clean, reproducible. Include `requirements.txt` (or
   `environment.yml`), `README.md` with the *exact* commands to run,
   and a tiny example dataset (or a download script) so the mentor
   can rerun.
4. **`results/`** — figures, tables, predictions.
5. **A short live demo** — show one inference end-to-end.

## 2. Project rubric (mirrors Prof. Awate's CS-736 grading)

The instructor (CS-736) lists these factors, paraphrased here:

| Dimension | What "good" looks like |
|---|---|
| Difficulty of chosen topic | You picked a non-trivial problem, not just "run nnU-Net". |
| Theoretical reading & understanding | You can derive the central equation and place it in the Bayesian / inverse-problem framework. |
| Empirical analysis | You compared against at least one baseline; you have quantitative numbers, not just pretty pictures. |
| Quality of slides | One key idea per slide; figures > bullets; you tell a story. |
| Code quality | A peer could clone and run it. Naming is sensible. README explains how. |

## 3. Suggested project shapes (any one)

These map cleanly to weeks 2–6 so you reuse the math you already know.

- **Bayesian denoising** with a learned prior — train a small CNN
  denoiser on (clean, noisy) pairs of a real medical dataset; compare
  against MRF-prior MAP from Week 2.
- **Under-sampled MRI reconstruction** — implement a model-based
  unrolled network (e.g., MoDL or a tiny ADMM-Net) on fastMRI knee
  data; compare against zero-filled and FBP-like baselines.
- **Brain-tumour segmentation** — train and evaluate a U-Net on a
  BraTS subset; compare to nnU-Net out-of-the-box; analyse failure
  cases.
- **Shape-prior segmentation** — combine an ASM (Week 4) with a CNN
  initialiser; show the ASM regularises away unrealistic predictions.
- **Cross-modality synthesis** — train a small CycleGAN (or pix2pix
  if you have paired data) to synthesise CT-from-MRI on a small
  paired dataset.
- **VAE anomaly detection** — train a VAE on healthy chest X-rays;
  detect pneumonia by reconstruction error; compare to a supervised
  classifier on the same data.

## 4. Project timing (recommended)

| Day(s) | Task |
|---|---|
| 1 | Pin the problem, the dataset, the baseline, the proposed method. Write a 1-paragraph project plan. |
| 2 | Make a dataloader + a "tiny smoke test" that runs end-to-end on 5 examples. |
| 3 | Implement the baseline. |
| 4–5 | Implement the proposed method. |
| 6 | Hyperparameter sweep on a held-out validation split. |
| 7 | Final results table + figures. |
| 8 | Draft report. |
| 9 | Slides + practice talk. |
| 10 | Polish, submit. |

## 5. Common mistakes to avoid

- **No baseline.** Your number means nothing without one.
- **Training loss as the headline metric.** Always report on the
  *held-out test set* in *task-appropriate metrics* (Dice, AUROC,
  PSNR/SSIM, …).
- **Tiny test set.** Cross-validate or bootstrap; report confidence
  intervals if you can.
- **No qualitative failure analysis.** Always show two cases the
  method *fails* on and discuss why.
- **Forgetting reproducibility.** Pin seeds; commit your environment
  file; save the model weights.

## 6. Resources

- `slides/Slides_ProjectTopicExamples.pdf` — Prof. Awate's project-ideas
  menu. Start here.
- [Papers with Code — Medical](https://paperswithcode.com/area/medical)
- [Grand-Challenge](https://grand-challenge.org/challenges/) — dataset
  + leaderboard combos.
- [MONAI tutorials](https://github.com/Project-MONAI/tutorials)
- [Distill — *How to write a research paper*](https://distill.pub/2017/research-debt/)
  (a bit philosophical, but the right vibe).
- [Stanford CS230 — *Tips on grading & structure for a final project*](https://cs230.stanford.edu/blog/finalproject/)

## 7. What's after

If you've enjoyed this, the natural follow-ons are:

- Apply to a **MICCAI Educational Challenge** or a Grand-Challenge
  competition.
- Take a *full* DL course (CS231n, fast.ai) to deepen the DL side.
- Take a *full* image-processing or inverse-problems course (CS-736
  itself, if you're at IIT Bombay; Bouman MBIP online, otherwise).
- Read a *book* end-to-end: Bouman's *Model-Based Image Processing*,
  Bishop's *PRML*, or Murphy's *Probabilistic Machine Learning*.

Good luck.
