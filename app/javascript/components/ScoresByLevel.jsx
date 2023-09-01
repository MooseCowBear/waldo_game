import React, { useState } from "react";
import { levelDescription } from "../helpers/level_helpers";

export default ScoresByLevel = ({
  scores,
  lastLevelCompleted,
  initiallyOpen,
}) => {
  console.log("scores when they get into scores by level", scores);

  const [open, setOpen] = useState(initiallyOpen);
  const [displaying, setDisplaying] = useState(5);

  // would like: if the section is open for it to display upto the top 5 results
  // and then have a see more button to expand

  const handleOpenClose = () => {
    if (open) {
      setDisplaying(5);
    }
    setOpen((curr) => !curr);
  };

  const handleSeeMore = () => {
    if (displaying < scores.length) {
      setDisplaying((curr) => curr + 5);
    }
  };

  const levelScores = scores.filter(
    (score) => score.level === lastLevelCompleted
  );

  const scoresToDisplay = levelScores.slice(0, displaying);

  return (
    <div className="scores-category">
      <div className="header">
        <h2>{levelDescription(lastLevelCompleted)}</h2>
        <button onClick={handleOpenClose}>
          {open ? "collapse" : "expand"}
        </button>
      </div>
      {open && (
        <ol>
          {scoresToDisplay.map((score, index) => {
            return (
              <li key={index} className="score">
                <p>{score.name}</p>
                <p>{score.time}</p>
              </li>
            );
          })}
        </ol>
      )}
      {open && scores.length > displaying && (
        <button onClick={handleSeeMore}>see more</button>
      )}
    </div>
  );
};
