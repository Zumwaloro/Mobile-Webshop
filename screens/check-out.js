import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CheckOutScreen = ({handler}) => {

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.paymentText}>Enter card details:</Text>
            </View>
            <TouchableOpacity onPress={()=>handler()}>
                <View style={styles.buttonContainer}>
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
    buttonContainer: {
        height: 55,
        backgroundColor: '#EBA553',
        borderLeftColor: '#FFA81C',
        borderLeftWidth: 5,
        borderRightColor: '#FFA81C',
        borderRightWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    }
});

export default CheckOutScreen;