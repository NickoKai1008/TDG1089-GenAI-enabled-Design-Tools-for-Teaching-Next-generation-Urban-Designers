"""A compact teaching demonstration for nighttime-image brightness metrics.

Adapted from the NightDiff repository's illumination-analysis workflow:
https://github.com/NickoKai1008/NightDiff-Eclipses_Navigate_Territories_of_Justice

Upstream code is licensed under Apache License 2.0. This file is a modified
teaching derivative: it uses English documentation, removes project-specific
paths, accepts one image through a command-line interface, and reports a
simplified global bright-pixel centroid rather than contour-level centroids.
See UPSTREAM_NIGHTDIFF_LICENSE.txt.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image


def calculate_brightness_metrics(
    grayscale: np.ndarray,
    threshold: int = 200,
) -> dict[str, float | None]:
    """Calculate three interpretable metrics from a grayscale image.

    The metrics are mean pixel brightness, the share of pixels at or above the
    selected threshold, and the distance between the bright-pixel centroid and
    the image centre. Centroid distance is normalised to the interval 0–1.
    """

    pixels = np.asarray(grayscale, dtype=np.float64)
    if pixels.ndim != 2 or pixels.size == 0:
        raise ValueError("grayscale must be a non-empty two-dimensional array")
    if not 0 <= threshold <= 255:
        raise ValueError("threshold must be between 0 and 255")

    bright_mask = pixels >= threshold
    bright_coordinates = np.argwhere(bright_mask)

    centroid_distance = None
    if bright_coordinates.size:
        centroid_y, centroid_x = bright_coordinates.mean(axis=0)
        centre_y = (pixels.shape[0] - 1) / 2
        centre_x = (pixels.shape[1] - 1) / 2
        maximum_distance = float(np.hypot(centre_y, centre_x))
        raw_distance = float(np.hypot(centroid_y - centre_y, centroid_x - centre_x))
        centroid_distance = 0.0 if maximum_distance == 0 else raw_distance / maximum_distance

    return {
        "mean_brightness": float(pixels.mean()),
        "bright_pixel_share": float(bright_mask.mean()),
        "bright_centroid_distance": centroid_distance,
    }


def load_grayscale_image(image_path: Path, size: int) -> np.ndarray:
    """Load an image, convert it to grayscale and resize it to a square."""

    if size < 1:
        raise ValueError("size must be a positive integer")
    with Image.open(image_path) as image:
        grayscale = image.convert("L").resize((size, size), Image.Resampling.LANCZOS)
        return np.asarray(grayscale, dtype=np.uint8)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Calculate teaching-scale brightness metrics for one nighttime image.",
    )
    parser.add_argument("image", type=Path, help="Path to a JPEG or PNG image")
    parser.add_argument("--threshold", type=int, default=200, help="Bright-pixel threshold from 0 to 255")
    parser.add_argument("--size", type=int, default=512, help="Square analysis size in pixels")
    args = parser.parse_args()

    grayscale = load_grayscale_image(args.image, args.size)
    result = {
        "image": str(args.image),
        "threshold": args.threshold,
        "analysis_size": args.size,
        **calculate_brightness_metrics(grayscale, args.threshold),
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()

