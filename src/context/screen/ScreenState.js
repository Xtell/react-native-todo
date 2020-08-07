import React, { useReducer } from 'react';
import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';
import { OPEN_TODO, GO_BACK } from '../types';
export const ScreenState = ({ children }) => {
  const [todoId, dispatch] = useReducer(screenReducer, null);
  const openTodo = (id) => dispatch({ type: OPEN_TODO, id });
  const goBack = () => dispatch({ type: GO_BACK});

  return (
    <ScreenContext.Provider value={{ todoId, openTodo, goBack }}>
      {children}
    </ScreenContext.Provider>
  );
};
