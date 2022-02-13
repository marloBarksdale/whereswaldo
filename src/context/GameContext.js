import { createContext, useReducer } from 'react';

export const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'WIN':
      return { ...state, gameState: false, modal: true };
    case 'SCORE':
      return { ...state, modal: false };
    case 'START':
      return {
        ...state,
        gameState: true,
        user: action.payload,

        modal: false,
      };
    case 'END':
      return { user: null, gameState: null, modal: false };
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    user: null,
    gameState: null,

    modal: false,
  });
  console.log(state);
  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
