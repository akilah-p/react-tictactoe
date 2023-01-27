import React, { createContext, useState, useEffect } from 'react';
import { gameData, winData } from './game-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(gameData);
  const [player, setPlayer] = useState('X');
  const [message, setMessage] = useState('Time to play');
  const [active, setActive] = useState(true);
};

