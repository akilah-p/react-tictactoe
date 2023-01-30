import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';
import './Board.css';


export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} content={box.content} space={box.space} />
       
      ))}
    </div>
  );
}