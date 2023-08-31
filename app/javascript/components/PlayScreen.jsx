import React, { useState } from "react";
import Gameboard from "./Gameboard";
import Header from "./Header";

export default PlayScreen = () => {
  const [score, setScore] = useState({ 0: null, 1: null, 2: null, 3: null });
  const [level, setLevel] = useState(0); 
  const [zoomLevel, setZoomLevel] = useState(0);

  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);

  return (
    <div className="game wrapper">
      <Header
        level={level}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
        time={time}
        setTime={setTime}
        running={running}
        setRunning={setRunning}
      />
      <Gameboard
        level={level}
        setLevel={setLevel}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
        running={running}
        setRunning={setRunning}
        time={time}
        setTime={setTime}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};
