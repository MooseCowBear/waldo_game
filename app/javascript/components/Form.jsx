import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTotalScoreAndLastLevel } from "../helpers/score_helpers";

export default Form = ({ score }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  console.log("score when you get to form", score);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("the form has been submitted");

    // need back end...
    const { time, level } = getTotalScoreAndLastLevel(score);
    const url = "/api/v1/scores/create";
    const body = {
      name,
      time,
      level,
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((res) => {
      if (res.ok) {
        return;
      }
      throw new Error("Network response was not ok.");
    })
    .then(() => {
      navigate("/scores");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add your score to the record book</h2>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" value={name} onChange={changeHandler} />
      </label>
      <input type="submit" />
      <button className="new-game" onClick={clickHandler} type="button">
        Or start over without recording your score.
      </button>
    </form>
  );
};
