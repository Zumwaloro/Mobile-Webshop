import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CheckOutScreen = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Total: 1000 NOK</Text>
                <Text style={styles.text}>Items:</Text>
            </View>
            <View>
                <Text style={styles.paymentText}>Enter card details:</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.text}>Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between'
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#FF430A',
        padding: 35,
        borderLeftColor: '#FFA81C',
        borderLeftWidth: 5,
        borderTopColor: '#FFA81C',
        borderTopWidth: 25,
        borderRightColor: '#FFA81C',
        borderRightWidth: 5
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'sans-serif-medium'
    },
    paymentText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif-medium'
    },
    footer: {
        height: 55,
        backgroundColor: '#FF430A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        borderLeftColor: '#FFA81C',
        borderLeftWidth: 5,
        borderBottomColor: '#FFA81C',
        borderBottomWidth: 5,
        borderRightColor: '#FFA81C',
        borderRightWidth: 5,
    }
});

export default CheckOutScreen;