import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';

export const MainLayout = () => {
  const {todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  console.log(addTodo);
  const [todoId, setTodoId] = useState(null);
  // const addTodo = (title) => {
  //   setTodos((prev) => [
  //     ...prev,
  //     {
  //       id: Date.now().toString(),
  //       title,
  //     },
  //   ]);
  // };
  // const updateTodo = (id, title) => {
  //   setTodos((old) =>
  //     old.map((todo) => {
  //       if (todo.id === id) {
  //         todo.title = title;
  //       }
  //       return todo;
  //     }),
  //   );
  // };
  // const removeTodo = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);
  //   Alert.alert('Удаление', `Вы действительно хотите удалить "${todo.title}"?`, [
  //     {
  //       text: 'Отмена',
  //       style: 'Negative',
  //     },
  //     {
  //       text: 'Удалить',
  //       onPress: () => {
  //         setTodoId(null);
  //         setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //       },
  //     },
  //   ]);
  // };
  const openTodo = (todoId) => {
    setTodoId(todoId);
  };
  const goBack = () => {
    setTodoId(null);
  };
  let content = (
    <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={setTodoId} />
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
