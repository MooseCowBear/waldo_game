import React from "react";
import Timer from "./Timer";
import { levelFinished } from "../helpers/game_helpers";

export default Header = ({
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
    // might not want to go out as far as -1
    if (zoomLevel > 0) {
      setZoomLevel((zoomLevel) => zoomLevel - 1);
    }
  };

  const clickHandler = () => {
    // note: if they quit, then won't actually update level or score so can pass dummy values
    levelFinished(
      null,
      time,
      setRunning,
      null,
      null,
      setTime,
      false
    );
    setZoomLevel(0);
    console.log("should be going to game over screen");
    // TODO: navigate to game over screen, where they can enter name to record score
  };

  return (
    <div className="header">
      <div className="button-wrapper">
        <button onClick={zoomInHandler}>zoom in</button>
        <button onClick={zoomOutHandler}>zoom out</button>
      </div>
      <div className="inline">
        <p>Find me!</p>
        <img className="thumbnail" src="images/thumb_level_0.jpeg" alt="" />
      </div>
      <Timer time={time} setTime={setTime} running={running} />
      <button onClick={clickHandler}>I'm done.</button>
    </div>
  );
};
