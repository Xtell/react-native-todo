import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = props => {
    const [text, setText] = useState('');
    const pressHandler = () => {
        if (text.trim()) {
            props.onSubmit(text);
            setText('');
        } else {
            Alert.alert("Название задачи не может быть пустым")
        }

    }


    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText = {(text) => {setText(text)}} value={text} placeholder="Введите новую задачу"/>
            <Button title="Добавить" style={styles.button} onPress={pressHandler}/>
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
    button: {
        

    }


})