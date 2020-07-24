import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {AppCard} from '../components/ui/AppCard'
import { THEME } from '../theme'
export const TodoScreen = ({todo, goBack}) => {
    return (
        <View>
            <AppCard>
                <Text style={styles.text}>{todo.title}</Text>
                <Button title="Ред." />
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.DARK_GREY} title="Назад" onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => {alert('pressed')}}/>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: "40%"
    },
    text: {
        fontSize: 20
    },
})