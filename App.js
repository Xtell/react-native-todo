import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import {Navbar} from './src/components/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import {TodoScreen} from './src/screens/TodoScreen'

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Выучить React Native"}
  ]);
  const [todoId, setTodoId] = useState(1);
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
    <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={setTodoId}/>
  )
  if (todoId) {
    let selectedTodo = todos.find(todo => todo.id === todoId );
    content = <TodoScreen goBack={goBack} todo={selectedTodo}/>
  }

  return (
    <View style={styles.viewContainer}>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>
        {content}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  viewContainer: {
    flex: 1,
  }
});
