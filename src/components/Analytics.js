import React from 'react';
import './Analytics.css';

const Analytics = ({ stats }) => {
  return (
    <div className="analytics-container">
      <h3>📊 Game Stats</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <h4>❌ Player X</h4>
          <p>Wins: {stats.xWins}</p>
        </div>
        <div className="stat-card">
          <h4>⭕ Player O</h4>
          <p>Wins: {stats.oWins}</p>
        </div>
        <div className="stat-card">
          <h4>🤝 Draws</h4>
          <p>{stats.draws}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
