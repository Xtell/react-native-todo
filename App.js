import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import {Navbar} from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'
export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos(prev => [...prev, {
        id: Date.now().toString(),
        title
      }
    ])
  }
  const renderItem = ({item}) => {

    return <Todo todo={item}></Todo>
  };

  return (
    <View style={styles.viewContainer}>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>
        <View style>
          <AddTodo style={styles.viewContainer} onSubmit={addTodo} />
        </View>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  tododo: {
  }
});
