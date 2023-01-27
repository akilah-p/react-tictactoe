import { createContext, useState } from 'react';
import BoardData from '../game-data.js';


const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameMessage, setGameMessage] = useState('');
    const [active, setActive] = useState(true);
    const [board, setBoard] = useState(Board);
    const [winner, setWinner] = useState('');
    

}
