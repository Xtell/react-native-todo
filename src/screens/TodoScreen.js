import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert, TextInput } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
import { AppTextBold } from "../components/ui/AppTextBold";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
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
  };
  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={todo.title}
        onSave={saveHandler}
      ></EditModal>
      <AppCard style={styles.card}>
        <AppTextBold style={styles.text}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.DARK_GREY} onPress={goBack}>
            <AntDesign name="back" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={20} />
          </AppButton>
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
