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

::::{grid} 1 2 2 2
:gutter: 3

:::{grid-item-card} 🧰 Week 0 · Setup
:link: weeks/w0_setup
:link-type: doc
Environment, install, and the prereq refreshers. Start here.
:::

:::{grid-item-card} 📐 Week 1 – 1.5 · Foundations
:link: weeks/w1_foundations
:link-type: doc
Basics of images (pixels, intensity); probability & the math toolbox.
:::

:::{grid-item-card} 🧮 Week 1.5 – 3 · Denoising & Reconstruction
:link: weeks/w2_denoising_reconstruction
:link-type: doc
The Bayesian view: noise models, priors, ill-posed inverse problems.
:::

:::{grid-item-card} 🩻 Week 3 · CT & MRI
:link: weeks/w3_ct_mri
:link-type: doc
Where the forward operator comes from: sinograms, FBP, k-space.
:::

:::{grid-item-card} 🫀 Week 4 · Shape & Segmentation
:link: weeks/w4_shape_segmentation
:link-type: doc
Procrustes/GPA & shape PCA; k-means, GMM/EM; kernels. *(Project 1)*
:::

:::{grid-item-card} 🧠 Week 5 · CNNs
:link: weeks/w5_cnns
:link-type: doc
Convolutional nets for medical images; U-Net and friends.
:::

:::{grid-item-card} 🎨 Week 6 · VAEs & GANs
:link: weeks/w6_generative
:link-type: doc
Deep generative models as learned priors. *(Project 2)*
:::

:::{grid-item-card} 📄 Week 7 · Paper Reading
:link: weeks/w7_paper
:link-type: doc
Read one paper deeply; reproduce one result.
:::

:::{grid-item-card} 🏁 Week 8 · Final Project
:link: weeks/w8_final_project
:link-type: doc
Data + method + evaluation + write-up + talk.
:::

:::{grid-item-card} 🧪 Projects & Labs
:link: labs
:link-type: doc
The two implementation projects and every hands-on notebook in one place.
:::

::::

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
  Sheet that acts as your dashboard. To **release weeks gradually**, use the
  [Mentor admin](admin.md) page to lock/unlock sections.

> Want to publish or extend this site? See `HOW_TO_PUBLISH.md` in the `site/`
> folder — it's a ~5-minute one-time GitHub setup, then it updates itself.
