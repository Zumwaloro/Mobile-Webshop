import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import CheckOutItem from '../components/checkout-item';

const CheckOutScreen = ({data, add, remove}) => {

    const list = <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={ ({item}) => (
                            <CheckOutItem style={styles.paymentText} data={item} action={add} remove={remove}/>
                        )}
                    />
                 </ScrollView>

    const noItem = <Text style={styles.paymentText}>Your shopping cart is empty.</Text>

    return(
        <View style={styles.container}>
            <View>
              {data.length===0?noItem:list}  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD5B5',
        justifyContent: 'space-between'
    },
    paymentText: {
        color: 'black',
        fontSize: 20,
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