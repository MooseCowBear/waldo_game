import React, { useEffect } from "react";
import { hours, minutes, seconds } from "../helpers/time_helpers";

export default Timer = ({ time, setTime, running }) => {
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="timer">
      <span>{hours(time)}:</span>
      <span>{minutes(time).toString().padStart(2, "0")}:</span>
      <span>{seconds(time).toString().padStart(2, "0")}</span>
    </div>
  );
};
