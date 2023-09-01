import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScoresByLevel from "./ScoresByLevel";

export default Scores = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const url = "/api/v1/scores/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log("result of fetch is:", res);
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setScores(res))
      .catch(() => {
        console.log("THERE WAS AN ERROR");
        navigate("/")});
  }, []);

  console.log("scores are: ", scores);

  const newGameHandler = () => {
    navigate("/");
  };

  // do we want all of them to be open initially? 

  return (
    <div>
      <h1>Scores</h1>
      <div className="scores-category impossible">
        <h2>Impossible</h2>
        <p>No one has completed this level yet.</p>
        <button onClick={newGameHandler}>Be the first!</button>
      </div>
      <ScoresByLevel
        scores={scores}
        lastLevelCompleted={2}
        initiallyOpen={true}
      />
      <ScoresByLevel
        score={scores}
        lastLevelCompleted={1}
        initiallyOpen={true}
      />
      <ScoresByLevel
        score={scores}
        lastLevelCompleted={0}
        initiallyOpen={true}
      />
    </div>
  );
};
