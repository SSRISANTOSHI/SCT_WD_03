import React from 'react';
import './SettingsPanel.css';

const avatarOptions = [
  '/avatars/avatar1.png',
  '/avatars/avatar2.png',
  '/avatars/avatar3.png',
  '/avatars/avatar4.png',
];

const SettingsPanel = ({ playerNames, setPlayerNames, avatars, setAvatars, theme, setTheme }) => {
  const handleNameChange = (player, value) => {
    setPlayerNames((prev) => ({ ...prev, [player]: value }));
  };

  const handleAvatarChange = (player, value) => {
    setAvatars((prev) => ({ ...prev, [player]: value }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="settings-panel">
      <h2>🎮 Game Settings</h2>

      <div className="player-settings">
        {['X', 'O'].map((player) => (
          <div key={player} className="player-section">
            <label>{player} Name:</label>
            <input
              type="text"
              value={playerNames[player]}
              onChange={(e) => handleNameChange(player, e.target.value)}
            />

            <label>{player} Avatar:</label>
            <div className="avatar-options">
              {avatarOptions.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`avatar${idx}`}
                  className={`avatar-option ${avatars[player] === src ? 'selected' : ''}`}
                  onClick={() => handleAvatarChange(player, src)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="theme-selector">
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
  <option value="light">Light</option>
  <option value="glass">Glass</option>
  <option value="cyberpunk">Cyberpunk</option>
  <option value="pastel">Pastel</option>
  <option value="halloween">Halloween</option>
  <option value="galaxy">Galaxy</option>
  <option value="forest">Forest</option>
  <option value="matrix">Matrix</option>
  <option value="ocean">Ocean</option>
</select>

      </div>
    </div>
  );
};

export default SettingsPanel;
