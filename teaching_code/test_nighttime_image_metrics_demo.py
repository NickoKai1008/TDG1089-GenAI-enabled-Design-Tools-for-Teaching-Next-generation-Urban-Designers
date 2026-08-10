import unittest

import numpy as np

from nighttime_image_metrics_demo import calculate_brightness_metrics


class BrightnessMetricsTests(unittest.TestCase):
    def test_black_image_has_no_bright_pixels(self):
        image = np.zeros((4, 4), dtype=np.uint8)

        metrics = calculate_brightness_metrics(image, threshold=200)

        self.assertEqual(metrics["mean_brightness"], 0.0)
        self.assertEqual(metrics["bright_pixel_share"], 0.0)
        self.assertIsNone(metrics["bright_centroid_distance"])

    def test_corner_highlight_has_maximum_normalised_centroid_distance(self):
        image = np.zeros((3, 3), dtype=np.uint8)
        image[0, 0] = 255

        metrics = calculate_brightness_metrics(image, threshold=200)

        self.assertAlmostEqual(metrics["mean_brightness"], 255 / 9)
        self.assertAlmostEqual(metrics["bright_pixel_share"], 1 / 9)
        self.assertAlmostEqual(metrics["bright_centroid_distance"], 1.0)

    def test_threshold_controls_bright_pixel_classification(self):
        image = np.array([[99, 100], [199, 200]], dtype=np.uint8)

        metrics = calculate_brightness_metrics(image, threshold=100)

        self.assertAlmostEqual(metrics["bright_pixel_share"], 0.75)


if __name__ == "__main__":
    unittest.main()
