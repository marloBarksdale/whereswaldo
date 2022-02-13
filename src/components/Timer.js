import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ time }) => {
  const [seconds, setSeconds] = useState(null);
  const [milli, setMilli] = useState(null);
  const [minutes, setMinutes] = useState(null);

  useEffect(() => {
    console.log(time);
    setSeconds(() => {
      return ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    });

    setMilli(() => {
      return ('0' + ((time / 10) % 100)).slice(-2);
    });

    setMinutes(() => {
      return ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    });
  }, [time]);

  return (
    <div className='timer'>
      <div className='digits'>{minutes}:</div>
      <div className='digits'>{seconds}.</div>
      <div className='digits mili-sec'>{milli}</div>
    </div>
  );
};

export default Timer;
