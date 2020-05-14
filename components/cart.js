import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Zocial as Icon } from '@expo/vector-icons';

const Cart = ({total}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Total: {total} NOK</Text>
            <Icon name="cart" size={50} color="black" style={styles.icon}></Icon>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EBA553',
        borderLeftColor: '#FFA81C',
        borderLeftWidth: 5,
        borderRightColor: '#FFA81C',
        borderRightWidth: 5
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    icon: {
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Cart;