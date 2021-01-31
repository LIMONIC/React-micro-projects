import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString("en-GB");
  const [currtime, setTime] = useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }

  return (
    <div className="container">
      <h1>{currtime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
