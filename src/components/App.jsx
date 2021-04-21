import React, { useState } from "react";

function App(props) {
  var currentTime = new Date().toLocaleTimeString().slice(0, -2);

  const [time, setTime] = useState(currentTime);

  function getCurrentTime() {
    return new Date().toLocaleTimeString().slice(0, -2);
  }

  function updateTime() {
    setTime(getCurrentTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
