# Medical Image Computing — Summer of Code

A math-first, 8-week mentorship course in **Medical Image Computing**: from the
basics of images and probability, through Bayesian denoising and reconstruction
(CT & MRI), classical shape analysis and segmentation, and finally modern deep
learning (CNNs, VAEs/GANs) — built on Prof. Suyash P. Awate's CS-736 (IIT Bombay),
bundled with attribution.

```{admonition} How this site works
:class: tip
Each week page has four parts:
**Watch** a short video for intuition → **Read** the chapter (and the deep-dive
PDF) → **Do** the hands-on notebook → **Checkpoint**: submit a short form so your
mentor can see your progress. Work top to bottom.
```

## Learning roadmap

| Calendar | Topic | This site |
|---|---|---|
| **Week 1 – 1.5** | Basics of images; probability & math foundations | [Foundations](weeks/w1_foundations.md) |
| **Week 1.5 – 3** | Image denoising; reconstruction (inverse problems, Bayesian) | [Denoising & Reconstruction](weeks/w2_denoising_reconstruction.md) |
| **Week 3** | CT & MRI fundamentals (physics + modeling intuition) | [CT & MRI](weeks/w3_ct_mri.md) |
| **Week 4** | Shape analysis; segmentation (clustering, classical) | [Shape & Segmentation](weeks/w4_shape_segmentation.md) |
| **Week 5 – 6.5** | Neural networks for images; VAEs & GANs | [CNNs](weeks/w5_cnns.md) · [VAEs & GANs](weeks/w6_generative.md) |
| **Week 6.5 – 8** | Paper reading + guided implementation; final project | [Paper reading](weeks/w7_paper.md) · [Final project](weeks/w8_final_project.md) |

<p><b>Reference PDFs (auto-compiled on every push):</b>
<a href="pdfs/handbook_main.pdf">📘 Long Technical Handbook</a> ·
<a href="pdfs/syllabus_main.pdf">📗 Short Syllabus</a> — the big-picture reference
and the week-by-week checklist.</p>

```{note}
All eight weeks are now wired — video, reading, deep-dive PDF, notebook, and a
checkpoint slot. The only thing left is to paste a Google Form embed into each
checkpoint (see `HOW_TO_PUBLISH.md`).
```

## For mentees vs mentors

- **Mentees:** click a week, watch → read → do → submit the checkpoint form.
- **Mentors:** each checkpoint is a Google Form; responses collect in a Google
  Sheet that acts as your dashboard. (Future upgrade: real logins + a
  week-unlocking dashboard via a free Supabase backend.)

> Want to publish or extend this site? See `HOW_TO_PUBLISH.md` in the `site/`
> folder — it's a ~5-minute one-time GitHub setup, then it updates itself.
