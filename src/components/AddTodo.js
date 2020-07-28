import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
export const AddTodo = props => {
    const [text, setText] = useState('');
    const pressHandler = () => {
        if (text.trim()) {
            props.onSubmit(text);
            setText('');
            Keyboard.dismiss();
        } else {
            Alert.alert("Название задачи не может быть пустым")
        }

    }


    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText = {(text) => {setText(text)}} value={text} placeholder="Введите новую задачу"/>
            <AntDesign.Button name="pluscircleo" size={20} onPress={pressHandler}>Добавить</AntDesign.Button>
        </View>
    )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
        
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    },
})