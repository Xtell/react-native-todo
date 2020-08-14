import React, { useReducer, useContext, useEffect } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS,
} from '../types';
import { ScreenContext } from '../screen/screenContext';
import { Alert } from 'react-native';
export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async (title) => {
    const response = await fetch('https://react-rn-todo.firebaseio.com/todos.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    dispatch({ type: ADD_TODO, title, id: data.name });
  };
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
        onPress: async () => {
          changeScreen(null);
          clearError();
          try {
            await fetch(`https://react-rn-todo.firebaseio.com/todos/${id}.json`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            dispatch({ type: REMOVE_TODO, id });
          } catch (e) {
            showError('Что то пошло не так...');
          }
        },
      },
    ]);
  };
  const updateTodo = async (id, title) => {
    clearError();
    try {
      await fetch(`https://react-rn-todo.firebaseio.com/todos/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      dispatch({ type: UPDATE_TODO, id, title });
    } catch (e) {
      showError('Что то пошло не так...');
    }
  };
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  const fetchTodos = async () => {
    clearError();
    showLoader();
    try {
      const response = await fetch('https://react-rn-todo.firebaseio.com/todos.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      // const newData = Object.keys(data).map((id) => ({ id, title: data[id].title }));
      const newData = Object.keys(data).map((id) => ({ id, ...data[id] }));
      dispatch({ type: FETCH_TODOS, todos: newData });
    } catch (e) {
      showError('Что то пошло не так...');
    } finally {
      hideLoader();
    }
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
        isLoading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
