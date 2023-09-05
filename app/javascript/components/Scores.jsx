import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScoresByLevel from "./ScoresByLevel";
import useScores from "../helpers/scores_fetcher";

export default Scores = () => {
  const navigate = useNavigate();

  const { scores, error, loading } = useScores();

  const newGameHandler = () => {
    navigate("/");
  };

  if (error) return <p className="text-center">Something went wrong.</p>;
  if (loading) return <p className="text-center">getting scores...</p>;

  return (
    <div className="scores-wrapper">
      <div className="scores">
        <div className="scores-header">
          <h1>Scores</h1>
          <button className="play-again" onClick={newGameHandler}>
            Play again
          </button>
        </div>
        <div className="scores-category impossible">
          <div className="title-wrapper">
            <p>last completed level</p>
            <h2>Impossible</h2>
          </div>
          <p>No one has completed this level yet.</p>
          <button className="new-game" onClick={newGameHandler}>
            Be the first!
          </button>
        </div>
        {scores && (
          <>
            <ScoresByLevel
              scores={scores}
              lastLevelCompleted={2}
              initiallyOpen={true}
            />

            <ScoresByLevel
              scores={scores}
              lastLevelCompleted={1}
              initiallyOpen={true}
            />

            <ScoresByLevel
              scores={scores}
              lastLevelCompleted={0}
              initiallyOpen={true}
            />
          </>
        )}
      </div>
    </div>
  );
};
