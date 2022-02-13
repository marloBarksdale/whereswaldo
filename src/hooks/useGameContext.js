import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const useGame = () => {
  const context = useContext(GameContext);

  return context;
};
