import React, { createContext, useState, useEffect } from 'react';
import { gameData, winData } from '../game-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(gameData);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Time to play');
  const [active, setActive] = useState(false);
  const [winner, setWinner] = useState('');
  const [endGame, setEndGame] = useState(false);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    const checkWinner = () => {
      if (tie) {
        setMessage('It is a tie!');
      } else {
        winner && endGame ? setMessage(`${winner} wins this time!`) : setMessage(`${player} it's your turn`);
      }
    };
    checkWinner();
  }, [player, winner, endGame, tie]);


  function resetGame() {
    setBoard(gameData);
    setPlayer('X');
    setWinner();
    setMessage(`${player} it's your turn`);
    setEndGame(false);
  }

  const handleClick = (content, space) => {
    if (content !== '') return;
    if (endGame === true) return;

    board[space].content = player;
    resetGame();
    if (player === 'O') {
      setPlayer('X');
    } else {
      setPlayer('X');
    }

    //setting game logic 
    function handleEndGame() {
      if (
        board[0].content === player && 
        board[1].content === player &&
        board[2].content === player
      ) {
        setEndGame(true);
        setWinner(player);
       }
       if (
        board[0].content === player && 
        board[3].content === player &&
        board[6].content === player
      ) {
        setEndGame(true);
        setWinner(player); 
      }
      if (
    board[0].content === player && 
    board[4].content === player &&
    board[8].content === player
     ) {
    setEndGame(true);
    setWinner(player);
}  if (
  board[1].content === player && 
  board[4].content === player &&
  board[7].content === player
) {
  setEndGame(true);
  setWinner(player);
} if (
  board[2].content === player && 
  board[5].content === player &&
  board[8].content === player
) {
  setEndGame(true);
  setWinner(player);
    }
    if (
      board[3].content === player && 
      board[4].content === player &&
      board[5].content === player
    ) {
      setEndGame(true);
      setWinner(player);
  }
  if (
    board[6].content === player && 
    board[7].content === player &&
    board[8].content === player
  ) {
    setEndGame(true);
    setWinner(player);
}
if (
  board[6].content === player && 
  board[4].content === player &&
  board[2].content === player
) {
  setEndGame(true);
  setWinner(player);
    }
    handleTie();
  }

  
    
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
