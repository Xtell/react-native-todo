import React from 'react'
import {View, StyleSheet} from 'react-native'

export const AppCard = (props) => (
    <View style={ {...styles.card, ...props.style} }>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    card:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 8,
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 15,
    }
})