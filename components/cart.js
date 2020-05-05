import React from 'react';
import {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { Zocial as Icon } from '@expo/vector-icons';

const Cart = () => {

    const [items, setItems] = useState([]);

    const calculateTotal = () => {
        if (items.length !== 0) {
            return 10;
        }
        return 0;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Total: {calculateTotal()} NOK</Text>
            <Icon name="cart" size={50} color="black" style={styles.icon}></Icon>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EBA553'
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