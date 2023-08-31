import React, { useEffect } from "react";

export default Timer = ({ time, setTime, running }) => {
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const seconds = (time) => {
    return (time / 1000) % 60;
  };

  const minutes = (time) => {
    return Math.floor(time / 60000) % 60;
  };

  const hours = (time) => {
    return Math.floor(time / 3600000);
  };

  return (
    <div>
      <span>{hours(time)}:</span>
      <span>{minutes(time).toString().padStart(2, "0")}:</span>
      <span>{seconds(time).toString().padStart(2, "0")}</span>
    </div>
  );
};
