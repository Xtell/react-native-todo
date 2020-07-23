import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import {Navbar} from './src/components/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import {TodoScreen} from './src/screens/TodoScreen'
export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);
  const addTodo = (title) => {
    setTodos(prev => [...prev, {
        id: Date.now().toString(),
        title
      }
    ])
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter( todo => todo.id !== id));
  }
  const openTodo = (todoId) => {
    setTodoId(todoId)
  }
  const goBack = () => {
    setTodoId(null);
  }
  let content = (
    <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={openTodo}/>
  )
  if (todoId) {
    let selectedTodo = todos.find(todo => todo.id === todoId );
    content = <TodoScreen goBack={goBack} todo={selectedTodo}/>
  }

  return (
    <View style={styles.viewContainer}>
      <Navbar title="Todo App"></Navbar>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  }
});
