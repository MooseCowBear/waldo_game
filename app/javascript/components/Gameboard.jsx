import React, { useState, useRef } from "react";
import { found, levelFinished } from "../helpers/game_helpers";
import { levelInfo } from "../helpers/level_helpers"; //temp
import Form from "./Form";

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
  hasQuit
}) => {
  const [boundingBoxActive, setBoundingBoxActive] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const levelIncremented = useRef(false);

  // otherwise the bounding box shows up when it shouldn't
  if (levelIncremented.current) {
    levelIncremented.current = false;
    setBoundingBoxActive(false);
  }

  const winConditions = levelInfo();
  const normalizedWinningX = winConditions[level].x;
  const normalizedWinningY = winConditions[level].y;

  if (boundingBoxActive && running) {
    setTimeout(() => {
      setBoundingBoxActive(false);
      setErrorActive(false);
    }, 1000);
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

    if (charFound) {
      levelFinished(level, time, setRunning, score, setScore);
      setPosition({ x: x, y: y });
      setBoundingBoxActive(true);
    } else {
      setPosition({ x: x, y: y });
      setBoundingBoxActive(true);
      setErrorActive(true);
    }
  };

  const nextLevelClickHandler = () => {
    levelIncremented.current = true;
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
          src={`images/level_${level}.jpeg`}
          alt=""
        />
        {boundingBoxActive && (
          <div
            className="bounding-box"
            aria-label="bounding box"
            style={{ left: position.x, top: position.y }}
          >
            {errorActive && (
              <svg
                aria-label="wrong choice marker"
                className={`wrong-icon`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(245, 245, 245)"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            )}
          </div>
        )}
      </div>
      {!running && !hasQuit && (
        <button className="next-button" onClick={nextLevelClickHandler}>
          <p className="upper">You found the target!</p>
          <p className="lower">Click to move on to the next level.</p>
        </button>
      )}
      {hasQuit && (
        <div className="form-wrapper">
          <Form score={score} />
        </div>
      )}
    </div>
  );
};
