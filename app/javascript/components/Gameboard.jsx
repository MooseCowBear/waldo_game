import React, { useEffect, useState } from "react";
import { found, levelFinished } from "../helpers/game_helpers";

export default Gameboard = ({
  level,
  setLevel,
  zoomLevel,
  setZoomLevel,
  running,
  setRunning,
  time,
  setTime,
  score,
  setScore,
}) => {
  const [boundingBoxActive, setBoundingBoxActive] = useState(false);
  const [errorActive, setErrorActive] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // TEMP: this is for level 0 image, will FETCH this
  const normalizedWinningX = 0.138671875;
  const normalizedWinningY = 0.1605839416;

  if (boundingBoxActive && running) {
    setTimeout(() => {
      setBoundingBoxActive(false);
      setErrorActive(false);
    }, 1000)
  }

  const imageClickHandler = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const imageWidth = e.target.clientWidth;
    const imageHeight = e.target.clientHeight;

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
      levelFinished(level, time, setRunning, score, setScore);
      setPosition({ x: x, y: y });
      setBoundingBoxActive(true);
    } else {
      console.log("should make the box appear..."); 
      setPosition({ x: x, y: y });
      setBoundingBoxActive(true);
      setErrorActive(true);
    }
  };

  const nextLevelClickHandler = () => {
    setZoomLevel(0);
    setLevel(level + 1);
    setTime(0);
    setRunning(true);
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
        {boundingBoxActive && (
          <div
            className="bounding-box"
            style={{ left: position.x, top: position.y }}
          >
            {errorActive && <svg
              className={`wrong-icon`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>}
          </div>
        )}
      </div>
      {!running && (
        <button className="next-button" onClick={nextLevelClickHandler}>
          Take me to the next level
        </button>
      )}
    </div>
  );
};
