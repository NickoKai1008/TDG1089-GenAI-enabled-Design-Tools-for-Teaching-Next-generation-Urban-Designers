# Evidence Register

This register records the source and public-page role of each curated visual. File names are relative to the repository root.

| Website asset | Supplied source | Page role | Evidence status | Public-release note |
|---|---|---|---|---|
| `assets/images/nightdiff-ground-truth-0607.png` | NightDiff materials supplied in the project workspace | Ground-truth member of the paired nighttime comparison and anonymous rating demonstration | Existing project output | Confirm imagery and derivative-use rights before public release |
| `assets/images/nightdiff-synthetic-0607.png` | NightDiff materials supplied in the project workspace | Synthetic member of the paired nighttime comparison and anonymous rating demonstration | Existing project output | Confirm model-output and source-imagery rights before public release |
| `assets/images/likert-rating-interface.png` | `VLM-expert_Appendix_B8_human_likert_rating_web` | Preview of the supplied full human-rating interface | Existing project output | The supplied coverage file recorded zero completed ratings; present this as a protocol and working tool, not as human-rating results |
| `assets/images/night-audit-satellite-vs-svi.jpg` | Supplied student nighttime-audit presentation | Analysis 1: comparison of satellite and street-view NTL | Selected student study | Reduced-resolution teaching preview; obtain permission and verify embedded map/data licences |
| `assets/images/night-audit-human-activity.jpg` | Supplied student nighttime-audit presentation | Analysis 2: relationship between environmental measures and nighttime mobile activity | Selected student study | Reduced-resolution teaching preview; confirm that mobile-activity information is aggregated and suitable for the chosen sharing level |
| `assets/images/night-audit-mismatch-map.jpg` | Supplied student nighttime-audit presentation | Analysis 3: absolute and relative NTL mismatch | Selected student study | Reduced-resolution teaching preview; obtain permission and verify data-source attribution |
| `assets/images/night-audit-mismatch-factors.jpg` | Supplied student nighttime-audit presentation | Analysis 3: FAR, NDVI, population-density and LCZ gradients | Selected student study | Reduced-resolution teaching preview; obtain permission and verify data-source attribution |
| `assets/images/night-audit-mismatch-scenarios.jpg` | Supplied student nighttime-audit presentation | Analysis 3: interpretation of built-form and lighting scenarios | Selected student study | Reduced-resolution teaching preview; obtain permission before public dissemination |
| `assets/images/mvi-parametric-generation.png` | Supplied student urban-morphology presentation | Phase 3 morphology-generation workflow | Selected student study | Obtain permission before public dissemination |
| `assets/images/mvi-overall-results.png` | Supplied student urban-morphology presentation | Phase 3 MVI and SCAP performance evaluation | Selected student study | Obtain permission before public dissemination |

## Claim boundaries

### Supported by supplied material

- NightDiff provides paired ground-truth and synthetic nighttime stimuli.
- The human-rating package provides an anonymised Likert-rating protocol with browser-local data export.
- The nighttime audit compares satellite and street-view NTL, relates measures to mobile activity and examines spatial mismatch.
- The morphology study generates four parametric morphology families and evaluates 400 alternatives using MVI and SCAP-related criteria.

### Presented with qualification

- The Phase 2 material supports comparative and associational analysis. The page does not present it as a validated predictive behavior model unless additional model evidence is added.
- The Phase 3 material demonstrates parametric generation and performance-led design search. It should be described as AI-ready or AI-enhanced design exploration unless evidence of a trained generative model is supplied.

### New integration framework

- The loop connecting nighttime mismatch diagnosis to morphology variables and renewed perception assessment is a project-level teaching synthesis.
- It is not presented as a completed empirical test showing that the MVI alternatives solve nighttime-light mismatch.

## Teaching-code supplement

`teaching_code/nighttime_image_metrics_demo.py` is a simplified, English-language teaching derivative of the upstream NightDiff illumination-analysis concept. It removes project-specific paths, operates on one image and replaces contour-level bright-spot centroids with one global bright-pixel centroid. It is distributed with the upstream Apache License 2.0 and a modification notice. It should be used to explain metric construction, not as a substitute for the complete research pipeline.

## Source files retained outside the public repository

The original presentations, full-resolution student work, full 400-image rating corpus, raw trajectories and any personal or restricted datasets remain outside the public repository. The public site uses a curated set of reduced-resolution teaching previews.
