import React, { useState } from 'react';
import './Startup.css';
import { useGame } from '../../hooks/useGameContext';
import { useTime } from '../../hooks/useTime';

const Startup = () => {
  const [playerName, setName] = useState('');
  const { dispatch } = useGame();
  const { startTimer } = useTime();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'START', payload: playerName });
  };
  return (
    <div className='container'>
      <div className='startUp'>
        <h1>Wheres Waldo?</h1>
        <p>
          Click the button to start searching.
          <br />
          By the way, you are timed.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Enter your name.</span>
            <input
              type='text'
              placeholder='Player'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <button className='btn'>Submit and Start</button>
        </form>
      </div>
    </div>
  );
};

export default Startup;
