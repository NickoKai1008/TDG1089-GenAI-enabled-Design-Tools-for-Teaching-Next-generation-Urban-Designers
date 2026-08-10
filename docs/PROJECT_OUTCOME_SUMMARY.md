# Project Outcome Summary

## Project information

**Project title:** GenAI-enabled Design Tools for Teaching Next-generation Urban Designers  
**Project number:** 1089  
**PI:** Prof. Waishan Qiu  
**Core Members:** Yuankai Wang, Xiaotong Ye  
**Contributors:** Laipeng Xu, Xinyi Kong, Chengxuan Zhang  
**Affiliation:** Department of Urban Planning and Design, Faculty of Architecture, The University of Hong Kong  
**Project period:** 1 July 2025 – 30 June 2026

## Executive summary

This Teaching Development Grant project develops an integrated workflow for using generative artificial intelligence and computational urban analysis in urban design education. It addresses a recurring teaching problem: students encounter many digital tools and datasets, but the connection between observing an urban site, interpreting human use, generating alternatives and evaluating a proposal can remain fragmented.

The outcome resource organises verified research prototypes, validation evidence and selected student work around the three critical phases identified in the proposal: **Site Information Collection, Predictive User Behavior Analysis and Iterative Design Ideation**. The phases operate as one learning loop: **Reveal → Reconstruct → Ground → Interpret → Generate → Re-audit**.

## Phase 1 — Site Information Collection

NightDiff is presented as a trained GenAI research prototype for reconstructing nighttime street conditions. The public resource includes a model-workflow overview, representative model comparisons and physical illuminance validation. A direct real/synthetic image toggle enables close inspection.

Human perception is incorporated as an additional validation layer. The supplied protocol uses anonymised and randomised stimuli and records six ten-point ratings. The website contains a compact two-image demonstration; responses remain in the visitor’s browser and can be exported as CSV. The public site does not transmit or aggregate ratings.

The teaching principle is that synthetic imagery extends site observation only when its provenance, limitations and validation are explicit.

## Phase 2 — Predictive User Behavior Analysis

A selected student nighttime audit is organised as three connected analyses:

1. Compare satellite nighttime light and street-view-based illumination.
2. Examine relationships between environmental measures and nighttime mobile activity.
3. Map disagreement and interpret mismatch with FAR, NDVI, population density, Local Climate Zones and lighting configuration.

A separate satellite-to-bike-demand research prototype demonstrates the proposal-defined task of predicting how people may use space. Image-to-image learning translates urban-form context into travel-intensity and bikeshare-demand estimates, while the displayed workflow makes the predictive chain visible through input data, train/validation/test organisation, model comparison and mapped outputs.

The student study supports comparative and associational diagnosis; the prototype supports predictive anticipation. They are complementary teaching materials, not the same dataset or experiment.

## Phase 3 — Iterative Design Ideation

A selected student Mountain View Index study first demonstrates performance-led parametric exploration. Four morphology families—mixed, tower, courtyard and slab—are generated under a fixed plot ratio of 6.0 and a SCAP range of 0.10–0.30. One hundred alternatives are produced per family, resulting in 400 alternatives for comparison.

A separate project prototype then extends this logic to generative morphology scenarios, three-dimensional reconstruction and environmental-performance feedback. The extension shows that generated alternatives become useful when they can be compared and returned to evaluation.

The MVI work is described as a student outcome in traceable parametric design. It is not represented as a GAN-generated dataset or as a proven solution to nighttime-light mismatch.

## Integration across the phases

The project-level contribution is the connection between otherwise fragmented tools and evidence:

**Evidence gap → missing-condition reconstruction → physical and perceptual grounding → predictive and associational interpretation → design-variable formulation → generative and parametric alternatives → performance feedback → renewed urban audit**

The re-audit closes the teaching loop. It is an integration framework for future studio use, not a claim that every displayed source was produced through one continuous empirical experiment.

## Deliverables

The project outcome package contains:

- a responsive GitHub Pages-ready project website;
- NightDiff model, representative-generation and illuminance-validation previews;
- paired ground-truth and NightDiff nighttime stimuli;
- a compact six-dimension perception-rating interaction with local storage and CSV export;
- a selected student nighttime-audit case organised as Analysis 1–3;
- a satellite-to-bike-demand research prototype for predictive space-usage and user-demand mapping;
- a selected student morphology-generation and MVI-evaluation case;
- a generative morphology scenario extension with three-dimensional reconstruction and environmental feedback;
- a compact, tested nighttime-image metrics teaching script;
- a project narrative, outcome summary and evidence register;
- a sharing checklist covering rights, privacy, attribution and the selected TDG sharing level; and
- deployment instructions for direct publication through GitHub Pages.

## Teaching value

The package enables students to distinguish evidence by viewpoint and meaning, examine generated imagery critically, connect urban representation to observed behaviour, formulate controllable design variables, compare alternatives through explicit criteria and document uncertainty. The same loop can be used as a complete studio sequence or adapted for individual classes.

## Dissemination and sustainability

The repository can be served through GitHub Pages from the root of the `main` branch. All website assets use relative paths and core interactions run entirely in the browser. The package can also be archived as a ZIP file for submission to the TDG Resources Hub.

Before public release, the project team should confirm the selected sharing level, obtain permission for student work, verify imagery and data licences, retain attribution and remove personal identifiers. If those checks do not support public dissemination, the package should be hosted in an access-controlled HKU environment.

## Limitations

- Public research figures are reduced-resolution slide previews, not editable source figures.
- The public rating demonstration contains two curated images and does not claim completed participant results.
- Model comparisons, predictions and associations are not presented as causal effects.
- The NightDiff, nighttime-audit, behaviour-prediction, MVI and generative-morphology materials are related through a teaching workflow, not represented as one dataset.
- The full re-audit requires a future integrated studio exercise before learning-effectiveness or design-improvement claims can be made.
