// src/components/GameStats.js
import React from 'react';
import './GameStats.css';

const GameStats = ({ winner, isDrawn, currentPlayer, playerNames }) => {
  let status;

  if (winner && playerNames?.[winner]) {
    status = `${playerNames[winner]} wins! 🏆`;
  } else if (isDrawn) {
    status = "Match Drawn 🤝";
  } else {
    status = `${playerNames?.[currentPlayer] || currentPlayer}'s Turn`;
  }

  return (
    <div className="game-stats">
      <h2>{status}</h2>
    </div>
  );
};

export default GameStats;
