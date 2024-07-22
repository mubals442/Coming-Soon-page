import React, { useState, useEffect } from "react";

function Counter() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(8);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds by 1
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // Reset seconds and decrease minutes
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          // Reset minutes and decrease hours
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            // Reset hours and decrease days
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              // Countdown has reached zero, do something here
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [days, hours, minutes, seconds]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
        sec
      </div>{" "}
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}>{minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}>{hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        days
      </div>
    </div>
  );
}

export default Counter;
