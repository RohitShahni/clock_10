import React, { useState, useEffect } from "react";
import TimeBox from "./TimeBox";

const getTimeInTimeZone = (timeZone) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: timeZone,
  };

  return new Intl.DateTimeFormat("en-US", options).format(new Date());
};

function App() {
  const [time, setTime] = useState({
    india: getTimeInTimeZone("Asia/Kolkata"),
    usa: getTimeInTimeZone("America/New_York"),
    uk: getTimeInTimeZone("Europe/London"),
    srilanka: getTimeInTimeZone("Asia/Colombo"),
    zimbabwe: getTimeInTimeZone("Africa/Harare"),
    ireland: getTimeInTimeZone("Europe/Dublin"),
    westindies: getTimeInTimeZone("America/Port_of_Spain"),
    england: getTimeInTimeZone("Europe/London"),
    nepal: getTimeInTimeZone("Asia/Kathmandu"),
    germany: getTimeInTimeZone("Europe/Berlin"),
  });

  useEffect(() => {
    const updateClock = () => {
      setTime({
        india: getTimeInTimeZone("Asia/Kolkata"),
        usa: getTimeInTimeZone("America/New_York"),
        uk: getTimeInTimeZone("Europe/London"),
        srilanka: getTimeInTimeZone("Asia/Colombo"),
        zimbabwe: getTimeInTimeZone("Africa/Harare"),
        ireland: getTimeInTimeZone("Europe/Dublin"),
        westindies: getTimeInTimeZone("America/Port_of_Spain"),
        england: getTimeInTimeZone("Europe/London"),
        nepal: getTimeInTimeZone("Asia/Kathmandu"),
        germany: getTimeInTimeZone("Europe/Berlin"),
      });
    };

    const intervalId = setInterval(updateClock, 1000);

    // Initial call to set the time immediately
    updateClock();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: "flex", flexFlow: "wrap", gap:'4px'}}>
      {Object.entries(time).map(([country, timeValue]) => (
        <TimeBox key={country} country={country} time={timeValue} />
      ))}
    </div>
  );
}

export default App;
