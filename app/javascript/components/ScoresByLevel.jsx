import React, { useState } from "react";
import { levelDescription } from "../helpers/level_helpers";
import { displayName } from "../helpers/score_helpers";

export default ScoresByLevel = ({
  scores,
  lastLevelCompleted,
  initiallyOpen,
}) => {
  console.log(
    "scores when they get into scores by level",
    scores,
    lastLevelCompleted
  );

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

  const levelScores = scores.filter((score) => {
    return score.level === lastLevelCompleted;
  });

  const scoresToDisplay = levelScores.slice(0, displaying);

  return (
    <div className="scores-category">
      <div className="scores-header">
        <div className="title-wrapper">
          <p>last completed level</p>
          <h2>{levelDescription(lastLevelCompleted)}</h2>
        </div>
        <button className="open-button" onClick={handleOpenClose}>
          <svg
            className={open ? "arrow up" : "arrow"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=""
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </button>
      </div>
      {open && (
        <ol>
          {scoresToDisplay.map((score, index) => {
            return (
              <li key={index} className="score">
                <p>
                  <span>{displayName(score.name)}</span>
                  <span>{score.time}</span>
                </p>
              </li>
            );
          })}
        </ol>
      )}
      {open && scores.length > displaying && (
        <button className="see-more" onClick={handleSeeMore}>
          see more
        </button>
      )}
    </div>
  );
};
