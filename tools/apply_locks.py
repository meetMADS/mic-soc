#!/usr/bin/env python3
"""Build-time gating for the MIC-SoC course site.

Reads site/_static/locks.json and, for every section marked locked (true):
  - overwrites its page(s) with a "locked" stub — markdown pages get a markdown
    stub, notebooks get a minimal locked-notebook — so the real content is NEVER
    published; and
  - records that section's PDF(s) in locked_pdfs.txt so the workflow's "collect
    PDFs" step withholds them.

Real gating: locked content is absent from the deployed site. Unlock by setting a
key to false in locks.json and pushing. Run from the repo root before the build.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "site")
LOCKS = os.path.join(SITE, "_static", "locks.json")

# section key -> (page files relative to site/, pdf basenames)
MAP = {
    "w0_setup": (["weeks/w0_setup.md"], []),
    "w1_foundations": (
        ["weeks/w1_foundations.md", "weeks/w1/watch.md", "weeks/w1/read.md", "weeks/w1/checkpoint.md",
         "notebooks/w1/01_image_basics_and_io.ipynb", "notebooks/w1/02_probability_refresher.ipynb",
         "notebooks/w1/03_linear_algebra_and_convolution.ipynb"],
        ["handbook_main.pdf"],
    ),
    "w2_denoising_reconstruction": (
        ["weeks/w2_denoising_reconstruction.md", "weeks/w2/watch.md", "weeks/w2/read.md", "weeks/w2/checkpoint.md",
         "notebooks/w2/01_noise_models.ipynb", "notebooks/w2/02_map_denoising_mrf.ipynb",
         "notebooks/w2/03_inverse_problems_reconstruction.ipynb"],
        ["MIC_Denoising_and_Reconstruction.pdf"],
    ),
    "w3_ct_mri": (
        ["weeks/w3_ct_mri.md", "weeks/w3/watch.md", "weeks/w3/read.md", "weeks/w3/checkpoint.md",
         "notebooks/w3/01_ct_radon_fbp_and_mri_kspace.ipynb"],
        ["MIC_CT_and_MRI_Fundamentals.pdf"],
    ),
    "w4_shape_segmentation": (
        ["weeks/w4_shape_segmentation.md", "weeks/w4/watch.md", "weeks/w4/read.md", "weeks/w4/checkpoint.md",
         "notebooks/w4/01_shape_analysis_procrustes_pca.ipynb", "notebooks/w4/02_kmeans_gmm_em_segmentation.ipynb",
         "notebooks/w4/03_kernel_pca_toy.ipynb"],
        ["MIC_Shape_Analysis.pdf", "MIC_Image_Segmentation.pdf", "MIC_Kernel_Methods.pdf"],
    ),
    "w5_cnns": (
        ["weeks/w5_cnns.md", "weeks/w5/watch.md", "weeks/w5/read.md", "weeks/w5/checkpoint.md",
         "notebooks/w5/01_cnn_building_blocks_from_scratch.ipynb"],
        ["MIC_Neural_Networks_for_Images.pdf"],
    ),
    "w6_generative": (
        ["weeks/w6_generative.md", "weeks/w6/watch.md", "weeks/w6/read.md", "weeks/w6/checkpoint.md",
         "notebooks/w6/01_generative_models_concepts.ipynb"],
        ["MIC_VAEs_and_GANs.pdf"],
    ),
    "w7_paper": (["weeks/w7_paper.md"], ["Paper_To_Implement_PLACEHOLDER.pdf"]),
    "w8_final_project": (["weeks/w8_final_project.md"], []),
    "p1_denoising": (["projects/p1_denoising.md"], []),
    "p2_segmentation": (["projects/p2_segmentation.md"], []),
}

MD_STUB = """# 🔒 Locked

```{{admonition}} This section is locked
:class: warning
Your mentor has not opened **{title}** yet. It will appear here automatically once
they unlock it. Check back soon, or ask your mentor.
```

[← Back to the course home]({intro})
"""

NB_STUB = {
    "cells": [{
        "cell_type": "markdown", "metadata": {},
        "source": ["# 🔒 Locked\n", "\n",
                   "Your mentor has not opened this notebook yet. It will appear here once unlocked."],
    }],
    "metadata": {}, "nbformat": 4, "nbformat_minor": 5,
}


def title_for(path):
    return os.path.basename(path).rsplit(".", 1)[0].replace("_", " ").title()


def main():
    if not os.path.exists(LOCKS):
        print("no locks.json — nothing to gate")
        return
    with open(LOCKS, "r", encoding="utf-8") as f:
        locks = json.load(f)

    locked_pdfs, n = [], 0
    for key, locked in locks.items():
        if not locked:
            continue
        pages, pdfs = MAP.get(key, ([], []))
        for rel in pages:
            p = os.path.join(SITE, rel)
            if not os.path.exists(p):
                continue
            if rel.endswith(".ipynb"):
                with open(p, "w", encoding="utf-8") as fh:
                    json.dump(NB_STUB, fh)
            else:
                intro = "../" * rel.count("/") + "intro.md"
                with open(p, "w", encoding="utf-8") as fh:
                    fh.write(MD_STUB.format(title=title_for(rel), intro=intro))
            n += 1
            print(f"locked -> stub: {rel}")
        locked_pdfs.extend(pdfs)

    with open(os.path.join(ROOT, "locked_pdfs.txt"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(sorted(set(locked_pdfs))) + ("\n" if locked_pdfs else ""))

    print(f"done: {n} page(s) stubbed, {len(set(locked_pdfs))} pdf(s) withheld")


if __name__ == "__main__":
    sys.exit(main())
