import React from "react";
import { found, levelFinished } from "../helpers/game_helpers";

export default Gameboard = ({
  level,
  setLevel,
  zoomLevel,
  setZoomLevel,
  setRunning,
  time,
  setTime,
  score,
  setScore,
}) => {
  // temp, this is for level 0 image, will FETCH this
  const normalizedWinningX = 0.138671875;
  const normalizedWinningY = 0.1605839416;

  const imageClickHandler = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const imageWidth = e.target.clientWidth;
    const imageHeight = e.target.clientHeight;

    // TODO: can bounding box dimensions be determined by size of the image?

    const charFound = found(
      60,
      x,
      y,
      imageWidth,
      imageHeight,
      normalizedWinningX,
      normalizedWinningY
    );

    console.log("found?", charFound);

    if (charFound) {
      // stops timer, resets time, and updates score
      levelFinished(level, time, setRunning, score, setScore, setTime);
      setZoomLevel(0);

      if (level < 3) {
        setLevel(level + 1);
      }
    }
  };

  return (
    <div className="outer-image-wrapper">
      <div
        className={`image-wrapper zoom-${zoomLevel}`}
        onClick={imageClickHandler}
      >
        <img
          className={`image zoom-${zoomLevel}`}
          id="game-image"
          src="images/level_0.jpeg"
          alt=""
        />
      </div>
      <div className="bounding-box"></div>
    </div>
  );
};
