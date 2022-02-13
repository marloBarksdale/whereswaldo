import { useEffect, useState } from 'react';
import { useGame } from './useGameContext';

export const useTime = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const { gameState, user } = useGame();

  useEffect(() => {
    let interval = null;
    if (gameState && user) {
      console.log('timer');
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameState, user]);

  return { time };
};
