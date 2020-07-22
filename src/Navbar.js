import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

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
        backgroundColor: '#3949ab',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }, 
    text: {
        fontSize: 24,
        color: '#fff'
    }
})