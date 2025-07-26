import React, { useState } from 'react';
import Board from './components/Board';
import PlayerForm from './components/PlayerForm';
import './App.css';

function App() {
  const [playerNames, setPlayerNames] = useState({ X: '', O: '' });
  const [avatars, setAvatars] = useState({ X: '', O: '' });
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const [boardKey, setBoardKey] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const handleStartGame = (names, avatarChoices) => {
    setPlayerNames(names);
    setAvatars(avatarChoices);
    setGameStarted(true);
    setGameEnded(false);
  };

  const handleRestart = () => {
    setBoardKey(prev => prev + 1);
    setGameEnded(false);
  };

  const handleGameEnd = () => {
    setGameEnded(true);
  };

  const handleGoHome = () => {
    setGameStarted(false);
    setScores({ X: 0, O: 0, draw: 0 });
    setBoardKey(0);
    setGameEnded(false);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <PlayerForm onStartGame={handleStartGame} />
      ) : (
        <>
          <Board
            key={boardKey}
            playerNames={playerNames}
            avatars={avatars}
            scores={scores}
            setScores={setScores}
            onGameEnd={handleGameEnd}
            setGameStarted={setGameStarted}
            onRestartBoard={handleRestart}
          />
          <div className="button-group">
            <button className="restart-button" onClick={handleRestart}>
              Restart
            </button>
            {gameEnded && (
              <button className="go-home-button" onClick={handleGoHome}>
                Go Home
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
