# TDG Project 1089: The City as a Learning Loop

This repository is a self-contained dissemination package for the Teaching Development Grant project **“GenAI-enabled Design Tools for Teaching Next-generation Urban Designers”** (Project 1089).

## Project attribution

**PI:** Prof. Waishan Qiu  
**Core Members:** Yuankai Wang, Xiaotong Ye  
**Contributors:** Laipeng Xu, Xinyi Kong, Chengxuan Zhang  
**Affiliation:** Department of Urban Planning and Design, Faculty of Architecture, The University of Hong Kong

The website presents one urban-design learning loop across the three critical phases named in the project proposal:

1. **Site Information Collection**
2. **Predictive User Behavior Analysis**
3. **Iterative Design Ideation**

The phases are connected through six teaching actions: **Reveal → Reconstruct → Ground → Interpret → Generate → Re-audit**. Research prototypes, validation evidence and student outcomes are labelled separately so that the public narrative remains traceable.

## What is included

- A responsive, dependency-free public website
- NightDiff model-workflow, representative-comparison and measured-illuminance evidence
- A paired real/NightDiff image comparison
- A six-dimension nightscape-perception demonstration with browser-local storage and CSV export
- A selected student nighttime-audit study connecting representations, observed activity and spatial mismatch
- A satellite-to-bike-demand research prototype for predictive space-usage and user-demand mapping
- A selected student parametric morphology study with MVI and SCAP evaluation
- A generative morphology scenario extension with three-dimensional reconstruction and environmental feedback
- A complete project-evaluation section with year-on-year SFTL outcomes, departmental benchmarks and anonymous course and teacher feedback
- A compact, tested NightDiff-derived brightness-metrics teaching demo
- Project narrative, outcome summary, evidence register and sharing checklist

## Open the site locally

The site must be served over HTTP because it uses JavaScript modules. From this repository folder, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`. No package installation or build command is required.

## Run the automated checks

With Node.js available:

```powershell
npm test
```

The checks verify canonical phase language, evidence labels, SFTL evaluation evidence, public-asset boundaries, rating-record behaviour, CSV output, relative paths and required delivery documents.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root. `index.html` must remain at the root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait for the latest Pages deployment to complete.

All internal resources use relative paths, so the site works under a project repository URL. The included `.nojekyll` file preserves the static directory structure.

## Interaction and data behaviour

The page runs entirely in the visitor’s browser.

- Image comparison, analytical tabs and design-evidence tabs work on GitHub Pages.
- Rating responses are saved in `localStorage` on that device and browser only.
- Visitors can export their own responses as CSV.
- The site does not transmit ratings, identify visitors or aggregate responses across users.

Central collection of ratings would require a separately approved database, consent statement and data-management procedure. That functionality is intentionally outside this static dissemination package.

## Before public release

Complete [the sharing checklist](docs/SHARING_CHECKLIST.md), especially the checks for student-work permission, model and imagery rights, personal identifiers and the selected TDG sharing level.

## Supporting documents

- [Project narrative](docs/PROJECT_NARRATIVE.md)
- [Project outcome summary](docs/PROJECT_OUTCOME_SUMMARY.md)
- [Evidence register](docs/EVIDENCE_REGISTER.md)
- [Sharing checklist](docs/SHARING_CHECKLIST.md)
- [NightDiff teaching-code supplement](teaching_code/README.md)
