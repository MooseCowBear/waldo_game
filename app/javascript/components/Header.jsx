import React from "react";
import Timer from "./Timer";
import { levelFinished } from "../helpers/game_helpers";
import { levelDescription } from "../helpers/level_helpers";

export default Header = ({
  level,
  zoomLevel,
  setZoomLevel,
  time,
  setTime,
  running,
  setRunning,
}) => {

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
    levelFinished(
      null,
      time,
      setRunning,
      null,
      null,
      false
    );
    setZoomLevel(0);
    console.log("should be going to game over screen");
    // TODO: navigate to game over screen, where they can enter name to record score
  };

  return (
    <>
      <div className="header-title-div">
        <h1>{`Level ${level}: ${levelDescription(level)}`}</h1>
        <Timer time={time} setTime={setTime} running={running} />
      </div>
      <div className="header">
        <div className="button-wrapper">
          <button onClick={zoomInHandler}>zoom in</button>
          <button onClick={zoomOutHandler}>zoom out</button>
        </div>
        <div className="inline">
          <p>You are looking for:</p>
          <img className="thumbnail" src="images/thumb_level_0.jpeg" alt="" />
        </div>
        <button onClick={clickHandler}>I'm done.</button>
      </div>
    </>
  );
};
