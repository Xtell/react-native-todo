import React, { useReducer, useContext } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';
import { Alert } from 'react-native';
export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: 1, title: 'Выучить React Native' }],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);
  const addTodo = (title) => dispatch({ type: ADD_TODO, title });
  const removeTodo = (id) => {
    const todo = state.todos.find((todo) => todo.id === id);
    console.log(todo);
    Alert.alert('Удаление элемента', `Вы действительно хотите удалить задачу "${todo.title}"?`, [
      {
        text: 'Нет',
        style: 'cancel',
      },
      {
        text: 'Да',
        style: 'desctructive',
        onPress: () => {
          changeScreen(null);
          dispatch({ type: REMOVE_TODO, id });
        },
      },
    ]);
  };
  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });
  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
