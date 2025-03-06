import React from 'react';

function PlayerIndicator({ currentPlayer }) {
  return (
    <div className="player-indicator">
      <p>Current Player: {currentPlayer}</p>
    </div>
  );
}

export default PlayerIndicator;