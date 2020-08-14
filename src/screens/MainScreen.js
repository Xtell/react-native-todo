import React, { useContext, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import { AppLoader } from '../components/ui/AppLoader';
import { AppText } from '../components/ui/AppText';
import { AppButton } from '../components/ui/AppButton';
export const MainScreen = () => {
  const { todos, addTodo, removeTodo, isLoading, error, fetchTodos } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);
  useEffect(() => {
    loadTodos();
  }, []);
  const onRefresh = () => {
    loadTodos();
  };
  if (isLoading) {
    return <AppLoader />;
  }
  if (error) {
    return (
      <View style={styles.center}>
        <AppText>{error}</AppText>
        <AppButton onPress={loadTodos}>Попробовать еще раз</AppButton>
      </View>
    );
  }
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}></Todo>
      )}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={onRefresh}
      refreshing={isLoading}
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
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
