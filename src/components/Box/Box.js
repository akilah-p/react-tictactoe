import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';

export default function Box({ space, content }) {
  const { handleClick } = useContext(GameContext);
  return (
    <div className="board-box" onClick={() => handleClick(content, space)}>
      <h2>{content}</h2>
    </div>
  );
}
