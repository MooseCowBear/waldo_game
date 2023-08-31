import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="home wrapper">
    <img
      src="images/the_triumph_of_death.jpeg"
      alt="the triump of death by Pieter Bruegel the Elder"
      className="home-image"
    />
    <div className="home-text">
      <h1>Welcome to Where's Waldo</h1>
      <h2>Dutch Masters Edition</h2>
      <p>To begin a new game, press the button below.</p>
      <Link to="/play" role="button">
        Ready to play
      </Link>
    </div>
  </div>
);
