import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.text}>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "#000000",

    }
})