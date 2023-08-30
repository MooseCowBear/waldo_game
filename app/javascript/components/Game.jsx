import React, { useState } from "react";
import { found } from "../helpers/game_helpers";

export default Game = () => {
  const [level, setLevel] = useState(0); // will be used when we start fetching...
  const [zoomLevel, setZoomLevel] = useState(0);

  // TODO: need a timer

  // temp, this is for level 0 image
  const normalizedWinningX = 0.138671875;
  const normalizedWinningY = 0.1605839416;

  const imageClickHandler = (e) => {
    console.log("image div was clicked.");
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log("x, y", x, y);

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

    // TODO: if the click is successful need to stop the timer and then load the next level
  };

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
  }

  return (
    <div className="game wrapper">
      <div className="header">
        <div className="button-wrapper">
          <button onClick={zoomInHandler}>zoom in</button>
          <button onClick={zoomOutHandler}>zoom out</button>
        </div>
        <img className="thumbnail" src="images/thumb_level_0.jpeg" alt="" />
        <p>info</p>
      </div>
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
    </div>
  );
};
