import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

const Cart = ({total, cart, payment}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Total: {total} NOK</Text>
            <TouchableOpacity onPress={()=>cart()}>
                <Icon name="shopping-cart" size={35} color="black" style={styles.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>payment()}>
                <Icon name="credit-card" size={35} color="black" style={styles.icon}></Icon>
            </TouchableOpacity>
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