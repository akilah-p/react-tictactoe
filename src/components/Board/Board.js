import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';


export default function Board() {
  const { board, handleClick, active } = useContext(GameContext);

 
  return (
    <div className ='board'>
      {board.map}
    </div>
  )
  
}
