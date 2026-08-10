# NightDiff Teaching-Code Supplement

This folder provides a compact, all-English teaching demonstration derived from the illumination-analysis ideas in the public [NightDiff repository](https://github.com/NickoKai1008/NightDiff-Eclipses_Navigate_Territories_of_Justice).

## Why this is a curated supplement

The upstream repository contains research scripts, project-specific directory structures, data assets and external-model dependencies. Copying the complete repository into a TDG dissemination page would make the package unnecessarily large and could encourage users to treat research code as a one-command classroom exercise.

The included script therefore isolates one transparent teaching concept: measuring the distribution of brightness in a nighttime image.

## Included demonstration

`nighttime_image_metrics_demo.py` reports:

1. mean grayscale brightness;
2. the share of pixels at or above a selected brightness threshold; and
3. the normalised distance between the global bright-pixel centroid and the image centre.

The third metric is intentionally simpler than the upstream contour-level calculation. It is suitable for explaining how a visual measure is constructed, but it is not a replacement for the complete NightDiff validation pipeline.

## Run the demonstration

Install the two lightweight dependencies:

```powershell
python -m pip install -r requirements.txt
```

Run the script on one image:

```powershell
python nighttime_image_metrics_demo.py ../assets/images/nightdiff-synthetic-0607.png --threshold 200
```

The script prints a JSON record that can be compared across real and synthetic stimuli.

## Run the tests

```powershell
python -m unittest test_nighttime_image_metrics_demo.py
```

## Suggested classroom use

- Ask students to predict how the three metrics will change when the threshold changes.
- Compare the real and synthetic stimulus before reading the numerical results.
- Discuss which aspects of nighttime experience the metrics capture and which they cannot represent.
- Relate pixel-level results to Phase 1 human perception ratings and Phase 2 spatial representations.

## Upstream methods for further study

- [Multimodal visuofunctional pipeline](https://github.com/NickoKai1008/NightDiff-Eclipses_Navigate_Territories_of_Justice/tree/main/01data_pipeline_multimodal_visuofunctional)
- [Nighttime SVI image evaluation](https://github.com/NickoKai1008/NightDiff-Eclipses_Navigate_Territories_of_Justice/blob/main/02data_pipeline_niteSVI_validation_pixel_visual_nitespatial/image_evaluation.py)
- [Nighttime SVI brightness metrics](https://github.com/NickoKai1008/NightDiff-Eclipses_Navigate_Territories_of_Justice/blob/main/02data_pipeline_niteSVI_validation_pixel_visual_nitespatial/nighttSVI_brightness_metrics.py)

## Attribution and licence

The NightDiff README credits the multimodal diffusion pipeline to Wang, Y., Xiang, Y., Ma, H. and Qiu, W., and describes additional contributors to the visuofunctional method and original day–night street-view imagery. Upstream code is distributed under the Apache License 2.0. The original licence is included as `UPSTREAM_NIGHTDIFF_LICENSE.txt`.

This teaching derivative records its modifications in the module header as required by the upstream licence. Image and dataset rights must be checked separately before public dissemination.

