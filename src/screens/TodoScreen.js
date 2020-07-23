import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

export const TodoScreen = ({todo, goBack}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title="Назад" onPress={goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})