import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default Form = ({ score }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  console.log("score when you get to form", score);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("the form has been submitted");

    // need back end...

    navigate("/scores");
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
