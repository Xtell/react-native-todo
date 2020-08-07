import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  // const [todoId, setTodoId] = useState(null);
  const { todoId, goBack, openTodo } = useContext(ScreenContext);
  console.log(todoId);

  // const openTodo = (todoId) => {
  //   setTodoId(todoId);
  // };
  // const goBack = () => {
  //   setTodoId(null);
  // };
  let content = (
    <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={openTodo} />
  );
  if (todoId) {
    let selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={goBack}
        todo={selectedTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    );
  }
  return (
    <View style={styles.viewContainer}>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>{content}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  viewContainer: {
    flex: 1,
  },
});
