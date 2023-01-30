import React, { createContext, useState, useEffect } from 'react';
import { gameData } from '../game-data';
 
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(gameData);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Time to play');
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    const checkWinner = () => {
      if (tie) {
        setMessage('It is a tie!');
      } else {
        winner && gameOver ? setMessage(`${winner} wins this time!`) : setMessage(`${player} it's your turn`);
      }
    };
    checkWinner();
  }, [player, winner, gameOver, tie]);


  function resetGameButton() {
    setBoard(gameData);
    setPlayer('X');
    setWinner();
    setTie(false);
    setMessage(`${player} it's your turn`);
    setGameOver(false);
  }

  function handleClick(content, space) {
    if (content !== '') return;
    if (gameOver === true) return;

    board[space].content = player;
    handleGameOver();
    if (player === 'O') {
      setPlayer('X');
    } else {
      setPlayer('O');
    }
  }
  // 

    //setting game logic 
  function handleGameOver() {
    if (
      board[0].content === player && 
        board[1].content === player &&
        board[2].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    }
    if (
      board[0].content === player && 
        board[3].content === player &&
        board[6].content === player
    ) {
      setGameOver(true);
      setWinner(player); 
    }
    if (
      board[0].content === player && 
      board[4].content === player &&
      board[8].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    } if (
      board[1].content === player && 
    board[4].content === player &&
    board[7].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    } if (
      board[2].content === player && 
    board[5].content === player &&
    board[8].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    }
    if (
      board[3].content === player && 
    board[4].content === player &&
    board[5].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    }
    if (
      board[6].content === player && 
    board[7].content === player &&
    board[8].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    }
    if (
      board[6].content === player && 
  board[4].content === player &&
  board[2].content === player
    ) {
      setGameOver(true);
      setWinner(player);
    }
    handleTie();
  }

  function handleTie() {
    if (
      winner === undefined && 
      board[0].content !== '' &&
      board[1].content !== '' &&
      board[2].content !== '' &&
      board[3].content !== '' &&
      board[4].content !== '' &&
      board[5].content !== '' &&
      board[6].content !== '' &&
      board[7].content !== '' &&
      board[8].content !== '' 
    ) {
      setGameOver(true);
      setTie(true);
    }

  }
  return ( 
    <GameContext.Provider
      value={{
        board,
        handleClick,
        message,
        resetGameButton
  
      }}>
      {children}
    </GameContext.Provider>
  );
};
export { GameContext, GameProvider };
