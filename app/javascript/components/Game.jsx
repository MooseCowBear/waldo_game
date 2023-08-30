import React, { useState } from "react";
import { found } from "../helpers/game_helpers";

export default Game = () => {
  const [level, setLevel] = useState(0); // will be used when we start fetching...

  // temp, this is for level 0 image
  const normalizedWinningX = 0.138671875;
  const normalizedWinningY = 0.1605839416;

  const clickHandler = (e) => {
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
  };

  return (
    <div className="game wrapper">
      <div className="header">
        <p>zoom</p>
        <img className="thumbnail" src="images/thumb_level_0.jpeg" alt="" />
        <p>info</p>
      </div>
      <div className="outer-image-wrapper">
        <div className="image-wrapper" onClick={clickHandler}>
          <img className="image" src="images/level_0.jpeg" alt="" />
        </div>
        <div className="bounding-box"></div>
      </div>
    </div>
  );
};
