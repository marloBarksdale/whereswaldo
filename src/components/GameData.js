import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import Glasses from '../assets/Eye-Glasses.svg';
import Head from '../assets/waldo-head.png';
import { useGame } from '../hooks/useGameContext';
import { useTime } from '../hooks/useTime';
import './GameData.css';
import Timer from './Timer';

const GameData = () => {
  const modalFocus = useRef(null);

  const { user, dispatch, modal } = useGame();
  const { time } = useTime();

  const navigate = useNavigate();

  return (
    <div className='game-data'>
      <nav>
        <ul>
          <li
            className='logo'
            onClick={() => {
              dispatch({ type: 'END', payload: null });
              navigate('/');
            }}
          >
            <img src={Glasses} alt='glasses' />

            <span>Find Waldo</span>
            <img src={Head} alt='waldo-head' />
          </li>
          {user && (
            <>
              <li className='timer-container'>
                <Timer time={time} />
              </li>
              <li>{user}</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default GameData;
