import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Navbar} from './src/Navbar'
import { AddTodo } from './src/AddTodo'
export default function App() {
  return (
    <View>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30
  },
});
