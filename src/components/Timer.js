// src/components/Timer.js
import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ timeLimit = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isRunning, setIsRunning] = useState(true);
  const [currentTurn, setCurrentTurn] = useState('X');

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert(`${currentTurn}'s time ran out! Passing turn.`);
      setCurrentTurn((prev) => (prev === 'X' ? 'O' : 'X'));
      setTimeLeft(timeLimit);
    }
  }, [timeLeft, currentTurn, timeLimit]);

  const handleManualPass = () => {
    setCurrentTurn((prev) => (prev === 'X' ? 'O' : 'X'));
    setTimeLeft(timeLimit);
  };

  return (
    <div className="timer-box">
      <h3>⏳ {currentTurn}'s Turn</h3>
      <p className={timeLeft <= 3 ? 'warning' : ''}>
        Time Left: {timeLeft}s
      </p>
      <button onClick={handleManualPass} className="pass-btn">Pass Turn</button>
    </div>
  );
};

export default Timer;
