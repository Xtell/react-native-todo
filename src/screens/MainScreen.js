import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
export const MainScreen = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}></Todo>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../assets/no-items.png')}></Image>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <AddTodo style={styles.viewContainer} onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    // flex: 1,
  },
  container: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
});
