import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PlayScreen from "../components/PlayScreen";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<PlayScreen />} />
    </Routes>
  </Router>
);
