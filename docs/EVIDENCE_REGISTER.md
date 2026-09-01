# Evidence Register

This register records the source and public-page role of each curated visual. File names are relative to the repository root.

| Website asset | Supplied source | Page role | Evidence status | Public-release note |
|---|---|---|---|---|
| `assets/images/tdg-nightdiff-workflow.png` | `10-22present.pptx`, slide 51 | NightDiff model and evaluation workflow | Research Prototype | Reduced-resolution slide preview; confirm rights for embedded imagery and model diagrams |
| `assets/images/tdg-nightdiff-comparison.png` | `10-22present.pptx`, slide 47 | Representative NightDiff and baseline comparison | Research Prototype | Reduced-resolution slide preview; do not present a representative panel as comprehensive benchmarking |
| `assets/images/tdg-nightdiff-lux-validation.png` | `10-22present.pptx`, slide 48 | Image-derived and measured illuminance comparison | Validation Evidence | Report as supplied validation evidence; do not imply perfect physical reconstruction |
| `assets/images/nightdiff-ground-truth-0607.png` | NightDiff materials supplied in the project workspace | Ground-truth member of the paired comparison and anonymous rating demonstration | Research Prototype | Confirm imagery and derivative-use rights before public release |
| `assets/images/nightdiff-synthetic-0607.png` | NightDiff materials supplied in the project workspace | Synthetic member of the paired comparison and anonymous rating demonstration | Research Prototype | Confirm model-output and source-imagery rights before public release |
| `assets/images/likert-rating-interface.png` | `VLM-expert_Appendix_B8_human_likert_rating_web` | Preview of the supplied human-rating interface | Validation Evidence | Present as a protocol and working tool, not as completed participant results |
| `assets/images/tdg-behaviour-prediction.png` | `10-22present.pptx`, slide 25 | Satellite-to-bike-demand model workflow and outputs | Research Prototype | Reduced-resolution preview; prediction is not described as causation |
| `assets/images/night-audit-satellite-vs-svi.jpg` | Supplied student nighttime-audit presentation | Analysis 1: comparison of satellite and street-view NTL | Student Outcome | Reduced-resolution teaching preview; obtain permission and verify embedded map/data licences |
| `assets/images/night-audit-human-activity.jpg` | Supplied student nighttime-audit presentation | Analysis 2: relationship between environmental measures and nighttime mobile activity | Student Outcome | Confirm that activity information is aggregated and suitable for the chosen sharing level |
| `assets/images/night-audit-mismatch-map.jpg` | Supplied student nighttime-audit presentation | Analysis 3: absolute and relative NTL mismatch | Student Outcome | Obtain permission and verify data-source attribution |
| `assets/images/night-audit-mismatch-factors.jpg` | Supplied student nighttime-audit presentation | Analysis 3: FAR, NDVI, population-density and LCZ gradients | Student Outcome | Obtain permission and verify data-source attribution |
| `assets/images/night-audit-mismatch-scenarios.jpg` | Supplied student nighttime-audit presentation | Analysis 3: interpretation of built-form and lighting scenarios | Student Outcome | Obtain permission before public dissemination |
| `assets/images/mvi-parametric-generation.png` | Supplied student urban-morphology presentation | Parametric morphology-generation workflow | Student Outcome | Obtain permission before public dissemination; do not label as GAN-generated |
| `assets/images/mvi-overall-results.png` | Supplied student urban-morphology presentation | MVI and SCAP performance evaluation | Student Outcome | Obtain permission before public dissemination |
| `assets/images/tdg-gan-morphology-scenarios.png` | `10-22present.pptx`, slide 16 | Generative morphology scenarios and three-dimensional reconstruction | Research Prototype | Reduced-resolution preview; do not imply all scenarios are implemented designs |
| `assets/images/tdg-gan-environment-feedback.png` | `10-22present.pptx`, slide 18 | Scenario comparison and environmental-performance feedback | Validation Evidence | Present as model/design evaluation evidence, not a causal urban intervention study |
| `assets/images/sftl-year-on-year-improvement.png` | `TDG1089_Final report_WQiu.docx`, embedded SFTL comparison chart | 2023-24, 2024-25 and 2025-26 SFTL comparison | Project Evaluation | 2025-26 asterisk identifies the course iteration incorporating TDG-supported upgrades and experiments |
| `assets/images/sftl-overall-course-effectiveness.png` | `TDG1089_Final report_WQiu.docx`, embedded SFTL report extract | Overall course-effectiveness score and departmental average | Project Evaluation | Course mean 95.0; departmental average 91.6; 45 returned forms |
| `assets/images/sftl-course-dimensions.png` | `TDG1089_Final report_WQiu.docx`, embedded SFTL report extract | Course-specific dimensions and departmental averages | Project Evaluation | All six course-specific dimensions exceed their corresponding departmental averages |
| `assets/images/sftl-course-feedback.png` | `TDG1089_Final report_WQiu.docx`, embedded anonymous course feedback | Anonymous qualitative feedback on the course | Project Evaluation | Presented without student identifiers |
| `assets/images/sftl-teacher-feedback.png` | `TDG1089_Final report_WQiu.docx`, embedded anonymous teacher feedback | Anonymous qualitative feedback on the teacher | Project Evaluation | Presented without student identifiers |

## Claim boundaries

### Supported by supplied material

- NightDiff is a trained GenAI model with paired day–night data, representative output comparisons and measured-illuminance validation evidence.
- The rating package provides an anonymised Likert protocol with browser-local data export.
- The student nighttime audit compares environmental representations, relates them to mobile activity and diagnoses spatial mismatch.
- A satellite-to-bike-demand research prototype demonstrates predictive space-usage and user-demand mapping from satellite imagery.
- The student morphology study generates four parametric morphology families and evaluates 400 alternatives using MVI and SCAP-related criteria.
- A project prototype extends performance-led search to generative morphology scenarios, reconstruction and environmental feedback.
- The March-May 2026 MUDP2020A SFTL exercise recorded 45 returned forms from 57 enrolled students, a 79% response rate.
- The seven 2025-26 SFTL dimensions scored 92.2-95.0, increased by 7.2-14.2 points over 2024-25 and exceeded their departmental averages by 1.2-4.4 points.

### Presented with qualification

- Representative comparison panels are not described as exhaustive benchmarking.
- Image-derived light estimates are not described as perfect physical reconstruction.
- Predictive and associational outputs are not described as causal mechanisms.
- The MVI study is not described as a GAN output.
- SFTL results are presented as course-level project-evaluation evidence associated with the TDG-supported upgrades.

### Teaching integration

- The loop connecting missing-condition reconstruction, behaviour analysis, morphology generation and renewed audit is a project-level teaching synthesis.
- Research prototypes and student studies remain separate evidence sources; the website does not fabricate continuity between their datasets.

## Teaching-code supplement

`teaching_code/nighttime_image_metrics_demo.py` is a simplified, English-language teaching derivative of the upstream NightDiff illumination-analysis concept. It operates on one image and is used to explain metric construction, not as a substitute for the complete research pipeline.

## Source files retained outside the public repository

The original presentations, editable figures, full-resolution student work, full rating corpus, raw trajectories and any personal or restricted datasets remain outside the public repository. The public site uses curated, reduced-resolution previews.
