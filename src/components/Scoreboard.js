
import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ scores, playerNames, avatars }) => {
  return (
    <div className="scoreboard">
      <div className="player-score">
        <img src={avatars.X} alt="X avatar" className="avatar" />
        <h3>{playerNames.X} (X)</h3>
        <p>Wins: {scores.X}</p>
      </div>

      <div className="draw-score">
        <h3>Draws</h3>
        <p>{scores.draw}</p>
      </div>

      <div className="player-score">
        <img src={avatars.O} alt="O avatar" className="avatar" />
        <h3>{playerNames.O} (O)</h3>
        <p>Wins: {scores.O}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
