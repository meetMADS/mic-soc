#!/usr/bin/env python3
"""Build-time gating for the MIC-SoC course site.

Reads site/_static/locks.json and, for every section marked locked (true):
  - overwrites its page markdown (and any sub-pages) with a small "locked" stub,
    so the real content is NEVER published to the live site; and
  - records that section's PDF(s) in locked_pdfs.txt, so the workflow's
    "collect PDFs" step skips them (the PDF isn't published either).

This is REAL gating: locked content is absent from the deployed site. Unlock a
section by setting it to false in locks.json and pushing (the site rebuilds).

Run from the repo root (the folder that contains site/), before `jupyter-book build`.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "site")
LOCKS = os.path.join(SITE, "_static", "locks.json")

# section key -> (page markdown files relative to site/, pdf basenames)
MAP = {
    "w0_setup": (["weeks/w0_setup.md"], []),
    "w1_foundations": (
        ["weeks/w1_foundations.md", "weeks/w1/watch.md", "weeks/w1/read.md",
         "weeks/w1/do.md", "weeks/w1/checkpoint.md"],
        ["handbook_main.pdf"],
    ),
    "w2_denoising_reconstruction": (
        ["weeks/w2_denoising_reconstruction.md"],
        ["MIC_Denoising_and_Reconstruction.pdf"],
    ),
    "w3_ct_mri": (
        ["weeks/w3_ct_mri.md", "weeks/w3/ct_video.md", "weeks/w3/mri_video.md",
         "weeks/w3/read.md", "weeks/w3/lab.md", "weeks/w3/checkpoint.md"],
        ["MIC_CT_and_MRI_Fundamentals.pdf"],
    ),
    "w4_shape_segmentation": (
        ["weeks/w4_shape_segmentation.md"],
        ["MIC_Shape_Analysis.pdf", "MIC_Image_Segmentation.pdf", "MIC_Kernel_Methods.pdf"],
    ),
    "w5_cnns": (["weeks/w5_cnns.md"], ["MIC_Neural_Networks_for_Images.pdf"]),
    "w6_generative": (["weeks/w6_generative.md"], ["MIC_VAEs_and_GANs.pdf"]),
    "w7_paper": (["weeks/w7_paper.md"], ["Paper_To_Implement_PLACEHOLDER.pdf"]),
    "w8_final_project": (["weeks/w8_final_project.md"], []),
    "p1_denoising": (["projects/p1_denoising.md"], []),
    "p2_segmentation": (["projects/p2_segmentation.md"], []),
}

STUB = """# 🔒 Locked

```{{admonition}} This section is locked
:class: warning
Your mentor has not opened **{title}** yet. It will appear here automatically once
they unlock it. Check back soon, or ask your mentor.
```

[← Back to the course home](../intro.md)
"""


def title_for(path):
    base = os.path.basename(path).replace(".md", "").replace("_", " ")
    return base.title()


def main():
    if not os.path.exists(LOCKS):
        print("no locks.json — nothing to gate")
        return
    with open(LOCKS, "r", encoding="utf-8") as f:
        locks = json.load(f)

    locked_pdfs = []
    n_pages = 0
    for key, locked in locks.items():
        if not locked:
            continue
        pages, pdfs = MAP.get(key, ([], []))
        for rel in pages:
            p = os.path.join(SITE, rel)
            if os.path.exists(p):
                depth_prefix = "../" * (rel.count("/"))  # back to site/ root then intro
                stub = STUB.format(title=title_for(rel)).replace("../intro.md", depth_prefix + "intro.md")
                with open(p, "w", encoding="utf-8") as fh:
                    fh.write(stub)
                n_pages += 1
                print(f"locked page -> stub: {rel}")
        locked_pdfs.extend(pdfs)

    with open(os.path.join(ROOT, "locked_pdfs.txt"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(sorted(set(locked_pdfs))) + ("\n" if locked_pdfs else ""))

    print(f"done: {n_pages} page(s) stubbed, {len(set(locked_pdfs))} pdf(s) will be withheld")


if __name__ == "__main__":
    sys.exit(main())
