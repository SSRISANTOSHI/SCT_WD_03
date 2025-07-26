// src/components/Board.js
import React, { useState, useEffect } from 'react';
import Square from './Square';
import { checkWinner, isDraw } from '../utils/gameLogic';
import './Board.css';

const Board = ({
  playerNames,
  avatars,
  scores,
  setScores,
  setGameStarted,
  onRestartBoard,
}) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(null);
  const [isDrawn, setIsDrawn] = useState(false);

  const currentPlayer = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = currentPlayer;
    setHistory((prev) => [...prev, squares]);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleUndo = () => {
    if (history.length === 0 || winner || isDrawn) return;
    const prevSquares = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setSquares(prevSquares);
    setXIsNext((prev) => !prev);
  };

  const handleGoHome = () => {
    setGameStarted(false);
  };

  const handleStartAgain = () => {
    onRestartBoard(); // triggers remount from App.js
  };

  useEffect(() => {
    const win = checkWinner(squares);
    if (win) {
      setWinner(win);
      setScores((prev) => ({
        ...prev,
        [win]: prev[win] + 1,
      }));
    } else if (isDraw(squares)) {
      setIsDrawn(true);
      setScores((prev) => ({
        ...prev,
        draw: prev.draw + 1,
      }));
    }
  }, [squares]);

  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  return (
    <div className="board-container">
      <div className="status">
        {winner ? (
          <h2>{playerNames[winner]} wins! 🏆</h2>
        ) : isDrawn ? (
          <h2>Match Drawn 🤝</h2>
        ) : (
          <h2>{playerNames[currentPlayer]}'s Turn</h2>
        )}
      </div>

      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>

      <button onClick={handleUndo} className="undo-btn">Undo</button>

      {(winner || isDrawn) && (
        <div className="post-game-buttons">
          <button onClick={handleGoHome} className="home-btn">🏠 Go Home</button>
          <button onClick={handleStartAgain} className="restart-btn">🔁 Start Again</button>
        </div>
      )}
    </div>
  );
};

export default Board;
