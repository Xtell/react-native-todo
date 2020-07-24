import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {THEME} from '../theme'
export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}> {title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        
        height: 70,
        backgroundColor: THEME.MAIN_COLOR,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }, 
    text: {
        fontSize: 24,
        color: '#fff'
    }
})