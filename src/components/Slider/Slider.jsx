import React, { useState } from "react";
import styles from "./Slider.module.css";

const Sliders = () => {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const [slider3, setSlider3] = useState(0);

  const getSliderBackground = (value, min, max, type = "default") => {
    const percent = ((value - min) / (max - min)) * 100;

    if (type === "default") {
      const activeColor = value >= 5 ? "#28a745" : "#aaa";
      return `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${percent}%, #ddd ${percent}%, #ddd 100%)`;
    }

    if (type === "bipolar") {
      const zeroPercent = ((0 - min) / (max - min)) * 100;
      const currentPercent = ((value - min) / (max - min)) * 100;

      if (value < 0) {
        return `linear-gradient(to right,
        #ddd 0%,
        #ddd ${currentPercent}%,
        #dc3545 ${currentPercent}%,
        #dc3545 ${zeroPercent}%,
        #ddd ${zeroPercent}%,
        #ddd 100%)`;
      } else if (value > 0) {
        return `linear-gradient(to right,
        #ddd 0%,
        #ddd ${zeroPercent}%,
        #28a745 ${zeroPercent}%,
        #28a745 ${currentPercent}%,
        #ddd ${currentPercent}%)`;
      } else {
        return `linear-gradient(to right, #ddd 0%, #ddd 100%)`;
      }
    }

    return "#ddd";
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <label>Slider 1 (0 → +)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={slider1}
          onChange={(e) => setSlider1(Number(e.target.value))}
          className={styles.slider}
          style={{
            background: getSliderBackground(slider1, 0, 100, "default"),
          }}
        />
        <span>{slider1}</span>
      </div>

      <div className={styles.sliderWrapper}>
        <label>Slider 2 (-1 → +1)</label>
        <input
          type="range"
          min="-1"
          max="1"
          step="0.1"
          value={slider2}
          onChange={(e) => setSlider2(parseFloat(e.target.value))}
          className={`${styles.slider} ${
            slider2 > 0
              ? styles.greenThumb
              : slider2 < 0
              ? styles.redThumb
              : styles.neutralThumb
          }`}
          style={{
            background: getSliderBackground(slider2, -1, 1, "bipolar"),
          }}
        />
        <span>{slider2.toFixed(1)}</span>
      </div>

      <div className={styles.sliderWrapper}>
        <label>Slider 3 (0 → +)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={slider3}
          onChange={(e) => setSlider3(Number(e.target.value))}
          className={styles.slider}
          style={{
            background: getSliderBackground(slider3, 0, 100, "default"),
          }}
        />
        <span>{slider3}</span>
      </div>
    </div>
  );
};

export default Sliders;
