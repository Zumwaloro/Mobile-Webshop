import React from 'react';
import {
     View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView 
    } from 'react-native';

const CheckOutScreen = ({handler, data}) => {

    const list = <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={ ({item}) => (
                            <Text style={styles.paymentText}>{item.element}: {item.price} NOK</Text>
                        )}
                    />
                 </ScrollView>

    const noItem = <Text style={styles.paymentText}>Your shopping cart is empty.</Text>

    return(
        <View style={styles.container}>
            <View>
              {data.length===0?noItem:list}  
            </View>
            <TouchableOpacity onPress={()=>handler()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>Home</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD5B5',
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
        color: 'black',
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