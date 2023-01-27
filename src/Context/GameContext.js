import { createContext, useContext, useState } from 'react';
import BoardData from '../game-data.js';

const = GameContext = createContext();

const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(BoardData);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameMessage, setGameMessage] = useState(null);
    const [active, setActive] = useState=(true);

    return(
        <GameContext.Provider vale={{ board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, setGameMessage, active, setActive }} >
            {children}
        </GameContext.Provider>

    );
};

export { GameContext, GameProvider };