import { useContext } from 'react';
import { GameContext } from '../../Context/GameContext';
import './Message.css';

export default function Message() {
  const { winner, resetGame, turns } = useContext(GameContext);
  return (
    <div className='message'>
      <h2>Tic/Tac/Toe!</h2>
      {winner !== false ? 
        <div>
          <span>{winner} is the victor!</span>
          <button onClick={() => resetGame()}>Game Over, play again?</button>
        </div> : 
        <></>
      }
      {(winner === false) && (turns <= 0) ? 
        <div>
          <span>A draw! Hoozah!</span>
          <button onClick={() => resetGame()}>Game over, play again?</button>
        </div> : 
        <></>
      }
    </div>
  );
}
