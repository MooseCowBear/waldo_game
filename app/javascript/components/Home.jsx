import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div class="home wrapper">
    <h1>Welcome to GAME NAME.</h1>
    <p>To begin a new game, press the button below.</p>
    <Link to="/one" role="button">Ready to play</Link>
  </div>
)

