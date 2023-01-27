import React, { createContext, useState } from 'react';
import { gameData, winData } from './game-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(gameData);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Time to play');
  const [active, setActive] = useState(false);
  const [winner, setWinner] = useState(false);
  const [turns, setTurns] = useState(9);

  const setTurn = () => {
    player === 'X' ? setPlayer('O') : setPlayer('X');
  };

  function checkWin(win) {
    const rows = (a, b, c) => {
      if (win[a].content === '' || win[b].content === '' || win[c].content === '')
        return false;
      return (
        win[a].content === win[b].content && win[b].content === win[c].content);
  
    };

    return rows(winData);
  }

  const resetGame = () => {
    setBoard(gameData);
    setPlayer('X');
    setWinner(false);
    setTurns(9);
  };

  const handleClick = (box) => {
    if (box.content !== '') return;
    const newBoard = board.map((squares) => {
      if (squares.space === box.space) {
        return {
          space: box.space,
          content: (player === 'X' ? 'X' : 'O') };
      }
      return squares;
    
    });

    setBoard(newBoard);
    setTurns(prev => prev - 1);

    if (checkWin(newBoard)) {
      setWinner(player);
    }
    setTurn();
  };
    
  return <GameContext.Provider
    value={{
      board,
      setBoard,
      player,
      setPlayer,
      active,
      setActive,
      message,
      setMessage,
      handleClick,
      resetGame, 
      winner,
      turns
  
    }}
  >{children}</GameContext.Provider>;
    


};

export { GameContext, GameProvider };
