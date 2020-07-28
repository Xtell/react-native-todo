import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setReady] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, title: "Выучить React Native" },
  ]);
  const [todoId, setTodoId] = useState(null);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={() => console.log("Error")}
        onFinish={() => setReady(true)}
      />
    );
  }
  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    Alert.alert(
      "Удаление",
      `Вы действительно хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "Negative",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ]
    );
  };
  const openTodo = (todoId) => {
    setTodoId(todoId);
  };
  const goBack = () => {
    setTodoId(null);
  };
  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
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
}

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
