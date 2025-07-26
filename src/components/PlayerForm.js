import React, { useState } from 'react';
import './PlayerForm.css'; 

const avatarsList = [
  '/avatars/avatar1.png',
  '/avatars/avatar2.png',
  '/avatars/avatar3.png',
  '/avatars/avatar4.png',
];

function PlayerForm({ onStartGame }) {
  const [playerXName, setPlayerXName] = useState('');
  const [playerOName, setPlayerOName] = useState('');
  const [avatarX, setAvatarX] = useState('');
  const [avatarO, setAvatarO] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!playerXName || !playerOName || !avatarX || !avatarO) {
      alert('Please enter names and select avatars for both players.');
      return;
    }

    onStartGame(
      { X: playerXName, O: playerOName },
      { X: avatarX, O: avatarO }
    );
  };

  const renderAvatars = (selectedAvatar, setAvatar) => (
    <div className="avatar-selection">
      {avatarsList.map((avatar, idx) => (
        <img
          key={idx}
          src={avatar}
          alt={`Avatar ${idx + 1}`}
          className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
          onClick={() => setAvatar(avatar)}
        />
      ))}
    </div>
  );

  return (
    <div className="player-form">
      <h2>Enter Player Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Player X Name:</label>
          <input
            type="text"
            value={playerXName}
            onChange={(e) => setPlayerXName(e.target.value)}
          />
          <p>Select Avatar for X:</p>
          {renderAvatars(avatarX, setAvatarX)}
        </div>

        <div>
          <label>Player O Name:</label>
          <input
            type="text"
            value={playerOName}
            onChange={(e) => setPlayerOName(e.target.value)}
          />
          <p>Select Avatar for O:</p>
          {renderAvatars(avatarO, setAvatarO)}
        </div>

        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default PlayerForm;
