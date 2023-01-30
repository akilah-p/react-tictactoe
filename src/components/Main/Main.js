import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';

export default function Main() {
  const { message, resetGameButton } = useContext(GameContext);
  return (
    <div className="main">
      <h2 className="message">{message}</h2>
      <button className="reset-game" onClick={resetGameButton}>
        Reset Game
      </button>
    </div>

  );
}
