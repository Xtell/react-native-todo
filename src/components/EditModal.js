import React, { useState } from 'react';
import { View, TextInput, Modal, StyleSheet, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from '../components/ui/AppButton';
export const EditModal = ({ value, visible, onCancel, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length == 0) {
      Alert.alert('Вы не можете сохранить пустой таск');
    } else {
      onSave(title);
    }
  };
  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput style={styles.input} autoFocus={true} value={title} onChangeText={setTitle} />
        <View style={styles.buttons}>
          <AppButton color={THEME.DARK_GREY} onPress={cancelHandler}>
            Отмена
          </AppButton>
          <AppButton title="Сохранить" onPress={saveHandler}>
            Сохранить
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR,
  },
  buttons: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
