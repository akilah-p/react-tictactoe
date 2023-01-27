import React, { useContext } from 'react';
import { GameContext} from '../../Context';
import './Box.css';

export default function Box({ content, space }) {
  const { handleClick } = useContext(GameContext);

  return (
    <div className="box" onClick {() => handleClick(content, space)}>
      <p>{content}</p>
    </div>
  );
}
