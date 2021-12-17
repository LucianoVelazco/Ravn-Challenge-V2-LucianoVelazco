/* eslint-disable consistent-return */
import React, { useContext, useReducer } from 'react';

const StartWarsAppContext = React.createContext();

export function useStartWarsAppContext() {
  return useContext(StartWarsAppContext);
}

const initState = {
  allPeople: [],
};

const StarWarsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        people: { ...action.payload },
      };
    case 'SET_CHARACTER_LIST':
      return {
        ...state,
        allPeople: [...action.payload],
      };
    default:
      break;
  }
  // return true
};

export const StartWarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StarWarsReducer, initState);

  const value = {
    state,
    dispatch,
  };

  return (
    <StartWarsAppContext.Provider value={value}>
      {children}
    </StartWarsAppContext.Provider>
  );
};
