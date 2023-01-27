import React, { createContext, useState, useEffect } from 'react';
import { gameData, winData } from './game-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(gameData);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Time to play');
  const [active, setActive] = useState(false);



  
  const handleClick = (box) => {
    const currentBox = board.findIndex((square) => square.space === box.space);
    const newGame = board;
    if (!newGame[currentBox].content) {
      newGame[currentBox] = { space: newGame[currentBox].space, content: player,

      };
      setBoard(newGame);
    }
    setPlayer(player === 'X' ? 'O' : 'X' );
    setMessage(`Your turn ${player === 'X' ? 'O' : 'X'}`);
  };








  return <GameContext.Provider>{children}</GameContext.Provider>;
    


};

