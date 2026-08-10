# TDG Project 1089: A GenAI-Enabled Urban Design Teaching Workflow

This repository is a self-contained dissemination package for the Teaching Development Grant project **“GenAI-enabled Design Tools for Teaching Next-generation Urban Designers”** (Project 1089).

## Project attribution

**Principal Investigator / Project Lead:** Professor Waishan Qiu  
**Contributors:** Yuankai Wang, Laipeng Xu, Xiaotong Ye, Xinyi Kong and Chengxuan Zhang  
**Affiliation:** Department of Urban Planning and Design, Faculty of Architecture, The University of Hong Kong

The site presents one iterative urban design teaching workflow across the three critical phases named in the project proposal:

1. **Site Information Collection**
2. **Predictive User Behavior Analysis**
3. **Iterative Design Ideation**

It combines supplied project outputs, selected student studies and a clearly labelled integration framework. It does not claim that the selected morphology study is a completed causal solution to nighttime-light mismatch.

## What is included

- A responsive, dependency-free public website
- A paired real/NightDiff image comparison
- A six-dimension nightscape perception demonstration
- Browser-local response storage and CSV export
- Three sequential urban analyses connecting nighttime-light representations, observed activity and mismatch
- A morphology-generation and MVI-evaluation teaching case
- A compact, tested NightDiff-derived brightness-metrics teaching demo
- An evidence register and sharing checklist

## Open the site locally

The site must be served over HTTP because it uses JavaScript modules. From this repository folder, run:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

No package installation or build command is required.

## Run the automated checks

With Node.js available:

```powershell
npm test
```

The tests verify the formal phase language, rating-record behavior, CSV output, local asset paths and required delivery documents.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root. `index.html` must remain at the root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the GitHub repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait for the Pages deployment to complete. The site will normally appear at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

All internal resources use relative paths, so the site works under a project repository URL. The included `.nojekyll` file prevents Jekyll processing from changing the static directory structure.

## Interaction and data behavior

The page runs entirely in the visitor’s browser.

- Image comparison, analytical tabs and design-evidence tabs work on GitHub Pages.
- Rating responses are saved in `localStorage` on that device and browser only.
- Visitors can export their own responses as CSV.
- The site does not transmit ratings, identify visitors or aggregate responses across users.

Central collection of ratings would require a separately approved database, consent statement and data-management procedure. That functionality is intentionally outside this static dissemination package.

## Before public release

Complete [the sharing checklist](docs/SHARING_CHECKLIST.md), especially the checks for student-work permission, third-party imagery, personal identifiers and the TDG sharing level.

## Supporting documents

- [Project narrative](docs/PROJECT_NARRATIVE.md)
- [Project outcome summary](docs/PROJECT_OUTCOME_SUMMARY.md)
- [Evidence register](docs/EVIDENCE_REGISTER.md)
- [Sharing checklist](docs/SHARING_CHECKLIST.md)
- [NightDiff teaching-code supplement](teaching_code/README.md)
