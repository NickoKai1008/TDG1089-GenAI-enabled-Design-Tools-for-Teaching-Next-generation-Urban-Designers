# Project Outcome Summary

## Project information

**Project title:** GenAI-enabled Design Tools for Teaching Next-generation Urban Designers  
**Project number:** 1089  
**Principal Investigator / Project Lead:** Professor Waishan Qiu  
**Contributors:** Yuankai Wang, Laipeng Xu, Xiaotong Ye, Xinyi Kong and Chengxuan Zhang  
**Affiliation:** Department of Urban Planning and Design, Faculty of Architecture, The University of Hong Kong  
**Project period:** 1 July 2025 – 30 June 2026

## Executive summary

This Teaching Development Grant project develops an integrated workflow for using generative artificial intelligence and computational urban analysis in urban design education. The project responds to a recurring teaching problem: students encounter many digital tools, datasets and visualisations, but the connection between observing an urban site, interpreting human use, generating design alternatives and evaluating a proposal can remain fragmented.

The resulting teaching resource organises supplied project tools and selected student work around the three critical phases identified in the original proposal: Site Information Collection, Predictive User Behavior Analysis and Iterative Design Ideation. The phases are connected as one evidence-led learning loop. Students begin with multi-scale observation, test how urban environments are represented and perceived, identify spatial mismatch, translate the diagnosis into design variables and constraints, and evaluate generated morphology alternatives. Evaluation returns the student to renewed observation rather than ending with a single generated image.

The dissemination package includes a GitHub Pages-ready website, a participatory nightscape perception demonstration, selected urban-analysis and morphology-design cases, a compact teaching-code supplement, and documentation covering evidence status, sharing rights and deployment.

## Educational problem addressed

Urban environments operate as dynamic, multi-layered systems. Day and night conditions, overhead and street-level viewpoints, physical measurements, human perception and observed activity each reveal different aspects of the same place. Conventional course workflows can separate these components into independent software exercises. Generative AI can create another isolated exercise if it is introduced only as a method for producing images.

The project therefore positions GenAI within a complete urban design workflow. Generated material is treated as a testable representation that must be compared, interpreted and connected to a design decision. The teaching emphasis is on traceability: students should be able to explain what an input represents, how an output was produced, which claim it supports, what uncertainty remains and how the evidence informs the next stage of design.

## Implemented teaching workflow

### Phase 1 — Site Information Collection

The first phase extends site observation toward a 24-hour environmental audit. The NightDiff materials demonstrate how nighttime street views can be synthesised from daytime imagery and compared with ground-truth nighttime scenes. The website provides a direct real/synthetic image toggle so that differences can be inspected rather than hidden.

Human perception is incorporated as a validation layer. The supplied full protocol uses anonymised and randomised stimuli and records six ten-point ratings: perceived safety, liveliness, beauty, wealthiness, depressing quality and boring quality. The public page contains a compact two-image version. Responses remain in the visitor’s browser and can be exported as CSV. The demonstration does not transmit or aggregate visitor data.

### Phase 2 — Predictive User Behavior Analysis

The second phase is represented by a selected student nighttime audit. The website restructures the study as three sequential analyses:

1. Compare satellite nighttime light and street-view-based illumination, including the need for standardisation.
2. Examine the relationship between environmental measures and nighttime mobile activity across spatial and temporal scales.
3. Map absolute and relative disagreement and interpret mismatch in relation to FAR, NDVI, population density, Local Climate Zones and lighting configuration.

This phase teaches students to distinguish constructs. Measured brightness is not equated with perceived safety, observed activity, social interaction or urban quality. The supplied material supports comparative and associational analysis. The dissemination package does not claim that a validated predictive behavior model has been completed unless additional model results are supplied.

### Phase 3 — Iterative Design Ideation

The third phase is represented by a selected student Mountain View Index study. Four morphology families—mixed, tower, courtyard and slab—are generated under a fixed plot ratio of 6.0 and a SCAP range of 0.10–0.30. One hundred alternatives are produced per family, resulting in 400 alternatives for comparison.

The case demonstrates a reproducible design-search sequence: define constraints, parameterise the design space, generate comparable alternatives, evaluate MVI and SCAP-related performance, identify candidates, and refine the parameters. The supplied work is described as parametric and AI-ready design exploration unless evidence of a trained generative model is added.

## Integration across the phases

The project-level contribution is the connection between the supplied outputs:

**Observation → perception validation → comparison of environmental representations → relationship with observed activity → mismatch diagnosis → design-variable formulation → morphology generation and evaluation → renewed observation**

The transition from nighttime mismatch to morphology optimisation is presented as an integrated teaching framework. The nighttime study identifies analytical questions and possible built-environment contributors. The MVI study demonstrates a method of constrained morphology exploration. The current evidence does not establish that the MVI alternatives directly solve nighttime-light mismatch.

A future integrated studio exercise can select morphology alternatives, represent them under day and night scenarios, collect human perception ratings, compare those ratings with performance criteria and use the resulting feedback for another design iteration.

## Deliverables

The project outcome package contains:

- a responsive GitHub Pages-ready project website;
- paired ground-truth and NightDiff nighttime stimuli;
- a compact six-dimension perception-rating interaction with local storage and CSV export;
- a selected student nighttime-audit case organised as Analysis 1–3;
- a selected student morphology-generation and MVI-evaluation case;
- a compact, tested, all-English nighttime-image metrics teaching script adapted from the Apache-licensed NightDiff workflow;
- a project narrative and outcome summary;
- an evidence register separating existing outputs, student work and the new integration framework;
- a sharing checklist covering student permission, image and data rights, privacy, accessibility and the selected TDG sharing level; and
- deployment instructions for direct publication through GitHub Pages.

## Teaching value

The package supports several transferable learning outcomes. Students can learn to distinguish datasets by viewpoint and meaning, evaluate generated imagery rather than accept it uncritically, incorporate human perception alongside physical measurement, interpret association and mismatch without overclaiming causality, formulate controllable design variables, and compare generated alternatives using explicit performance criteria.

The workflow can be used as a complete sequence or adapted for individual classes. The static website requires no server, and the code demonstration uses lightweight dependencies. This lowers the technical barrier for project sharing while retaining links to the more extensive NightDiff research repository.

## Dissemination and sustainability

The repository can be uploaded directly to GitHub and served through GitHub Pages from the root of the `main` branch. All website assets use relative paths. Core interactions run entirely in the browser. The package can also be archived as a ZIP file for submission to the TDG Resources Hub.

Before public release, the project team should confirm the selected sharing level, obtain permission for selected student work, verify imagery and data licences, retain required attribution, and remove personal identifiers. If those checks do not support public dissemination, the same package should be hosted in an access-controlled HKU environment rather than on public GitHub Pages.

## Limitations and next development steps

- The public rating demonstration contains two curated images; it is not the full 400-image stimulus package.
- The supplied rating protocol is presented as a working method. No completed human-rating results are claimed from the supplied zero-response coverage record.
- Phase 2 predictive-model claims require additional model evidence.
- The Phase 2–Phase 3 integration requires a future design experiment before causal or performance-improvement claims can be made.
- Central aggregation of visitor ratings would require a separately approved database, consent statement and data-management process.

These limitations are retained in the public narrative so that the resource remains academically credible and suitable for future extension.
