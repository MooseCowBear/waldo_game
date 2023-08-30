import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="home wrapper">
    <h1>Welcome to Where's Waldo</h1>
    <h2>Dutch Masters Edition</h2>
    <p>To begin a new game, press the button below.</p>
    <Link to="/play" role="button">Ready to play</Link>
  </div>
)

