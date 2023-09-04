import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { levelFinished } from "../helpers/game_helpers";
import { levelDescription } from "../helpers/level_helpers";
import { hasCompletedLevel } from "../helpers/score_helpers";

export default Header = ({
  level,
  zoomLevel,
  setZoomLevel,
  time,
  setTime,
  running,
  setRunning,
  setHasQuit,
  score,
}) => {
  const navigate = useNavigate();

  const zoomInHandler = () => {
    if (zoomLevel < 2) {
      setZoomLevel((zoomLevel) => zoomLevel + 1);
    }
  };

  const zoomOutHandler = () => {
    if (zoomLevel > 0) {
      setZoomLevel((zoomLevel) => zoomLevel - 1);
    }
  };

  const clickHandler = () => {
    levelFinished(level, time, setRunning, score, null, false);
    setZoomLevel(0);
    setHasQuit(true);

    if (!hasCompletedLevel(score)) {
      /* 
        if the player has quit before completing any levels,
        go ahead and just navigate to the scores path. 
        Form will not be displayed, as there is no reason to record
        the non-existent score. In this case, hasQuit doesn't do anything
        since gameboard doesn't get rerendered.
      */
      navigate("/scores");
    }
  };

  return (
    <div className="header">
      <div className="title-div">
        <h1>{`Level ${level}: ${levelDescription(level)}`}</h1>
        <Timer time={time} setTime={setTime} running={running} />
      </div>
      <div className="action-div">
        <div className="button-wrapper">
          <button onClick={zoomInHandler} aria-label="zoom in">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill=""
                d="M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M8,5V8H5V10H8V13H10V10H13V8H10V5H8Z"
              />
            </svg>
          </button>
          <button onClick={zoomOutHandler} aria-label="zoom out">
            <svg
              className="out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M9,2A7,7 0 0,1 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M5,8V10H13V8H5Z"
              />
            </svg>
          </button>
        </div>
        <div className="inline">
          <p>You are looking for:</p>
          <img
            className="thumbnail"
            src={`images/thumb_level_${level}.jpeg`}
            alt=""
          />
        </div>
        <button className="quit" onClick={clickHandler}>
          I'm done.
        </button>
      </div>
    </div>
  );
};
