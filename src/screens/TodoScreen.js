import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert, TextInput } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { AppModal } from "../components/ui/AppModal";
import { EditModal } from "../components/EditModal";
import { THEME } from "../theme";
export const TodoScreen = ({ todo, goBack, removeTodo, updateTodo }) => {
  let [modal, setModal] = useState(false);
  let [text, setText] = useState(todo.title);
  const closeModal = () => {
    setModa(false);
  };
  const saveHandler = (title) => {
    setModal(false);
    updateTodo(todo.id, title);
  }
  return (
    <View>
      {/* <AppModal visible={appModalVisible} closeModal={closeModal}>
        <View style={styles.appModal}>
          <View style={styles.modalInput}>
            <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)} focusable={true} />
            <Button
              title="Изменить"
              onPress={() => setAppModalVisible(false)}
            />
          </View>
          <Button
            title="Отмена"
            onPress={() => setAppModalVisible(false)}
            color={THEME.DARK_GREY}
          />
        </View>
      </AppModal> */}
      <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler}></EditModal>
      <AppCard style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <Button title="Ред." onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color={THEME.DARK_GREY} title="Назад" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  text: {
    fontSize: 18,
  },
  card: {
    marginBottom: 30,
    padding: 15,
  },
  appModal: {},
  modalInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    padding: 5,
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: THEME.MAIN_COLOR,
  },
});
