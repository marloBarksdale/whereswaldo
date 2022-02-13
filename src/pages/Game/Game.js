import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Waldo from '../../assets/waldo.jpeg';
import Timer from '../../components/Timer';
import { useCollection } from '../../hooks/useCollection';
import { useFireStore } from '../../hooks/useFirestore';
import { useGame } from '../../hooks/useGameContext';
import { useTime } from '../../hooks/useTime';
import './Game.css';

const Game = () => {
  const { documents } = useCollection('location');
  const modalFocus = useRef(null);
  const [locX, setLocX] = useState(null);
  const [locY, setLocY] = useState(null);
  const { dispatch, modal, user } = useGame();
  const { time } = useTime();
  const navigate = useNavigate();
  const { updateDocument } = useFireStore('scores');

  useEffect(() => {
    if (documents) {
      setLocX(documents[0].x);
      setLocY(documents[0].y);
    }
  }, [documents]);

  const handleClick = async (e) => {
    const highlight = document.querySelector('.highlighter');
    highlight.className = 'highlighter show';
    highlight.style.top = e.pageY - 26 + 'px';
    highlight.style.left = e.pageX - 26 + 'px';

    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    if (checkFind(x, y)) {
      await dispatch({ type: 'WIN', payload: time });
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      modalFocus.current.focus();
    }
    setTimeout(() => {
      highlight.className = 'highlighter';
    }, 750);
  };

  const checkFind = (x, y) => {
    console.log(x, y);
    return Math.abs(x - locX) < 10 && Math.abs(y - locY) < 10;
  };
  return (
    <div className='game'>
      <img
        src={Waldo}
        alt='game'
        onClick={handleClick}
        style={{ marginBottom: '20px' }}
      />
      <div className='highlighter'></div>
      {modal === true ? (
        <div className='modal-bg'>
          <div className='modal'>
            <div> You finished in:</div>
            <Timer time={time} />
            <div>
              <button
                className='btn leaderboard'
                style={{ marginRight: '20px' }}
                onClick={async () => {
                  await updateDocument('userScores', { user, time });
                  dispatch({ type: 'SCORE', payload: null });
                  navigate('/leaderboard');
                  document.body.style.overflow = 'visible';
                }}
                ref={modalFocus}
              >
                Submit to leaderboard
              </button>
              <button
                className='btn'
                onClick={() => {
                  document.body.style.overflow = 'visible';

                  dispatch({ type: 'END', payload: null });
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Game;
