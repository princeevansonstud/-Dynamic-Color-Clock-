import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  // Store the current date/time in state
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div className="clock-container">
      <h1>Current Date & Time</h1>
      <p className="time-display">
        {format(currentTime, "MMMM do, yyyy 'at' h:mm:a")}
      </p>
    </div>
  );
}

export default App;