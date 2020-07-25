import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ value, visible, onCancel, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length == 0) {
      Alert.alert("Вы не можете сохранить пустой таск");
    } else {
        
        onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          autoFocus={true}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button title="Отмена" color={THEME.DARK_GREY} onPress={onCancel} />
          <Button title="Сохранить" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: THEME.MAIN_COLOR,
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
