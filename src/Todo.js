import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id);
    }
    return (
        <TouchableOpacity onLongPress={longPressHandler}>
            <View style={styles.todo}>
                <Text style={styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#e3e3e3",
        borderRadius: 5

    }
})