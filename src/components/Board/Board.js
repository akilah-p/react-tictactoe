import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';
import './Board.css';


export default function Board() {
  const { board, handleClick, winner } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((box) => (
        <div className='box'
          onClick={winner === false ? () => handleClick(box) : undefined}
          key={box.space}>
          {box.content}
        </div>
      ))}
    </div>
  );
}