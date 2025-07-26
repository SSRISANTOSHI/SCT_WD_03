
import React, { useState } from 'react';
import './Replay.css';

const Replay = ({ history, resetGame }) => {
  const [step, setStep] = useState(0);

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < history.length - 1) setStep(step + 1);
  };

  if (!history || history.length === 0 || !Array.isArray(history[step])) {
    return (
      <div className="replay-container">
        <h3>📽️ Replay</h3>
        <p>No moves available to replay.</p>
        <button onClick={resetGame} className="reset-btn">🔄 Play Again</button>
      </div>
    );
  }

  return (
    <div className="replay-container">
      <h3>📽️ Replay</h3>
      <div className="board-replay">
        {history[step].map((value, index) => (
          <div key={index} className="square-replay">
            {value}
          </div>
        ))}
      </div>

      <div className="replay-controls">
        <button onClick={handlePrev} disabled={step === 0}>⏪ Prev</button>
        <span>Step {step + 1} of {history.length}</span>
        <button onClick={handleNext} disabled={step === history.length - 1}>Next ⏩</button>
      </div>

      <button onClick={resetGame} className="reset-btn">🔄 Play Again</button>
    </div>
  );
};

export default Replay;
