import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import CheckOutItem from '../components/checkout-item';

const CheckOutScreen = ({data, add, remove}) => {

    const list = <SafeAreaView>
                    <FlatList
                        data={data}
                        renderItem={ ({item}) => (
                            <CheckOutItem style={styles.paymentText}
                                          data={item}
                                          action={add}
                                          remove={remove}
                            />
                        )}
                    />
                 </SafeAreaView>

    const noItem = <Text style={styles.emptyCart}>Your shopping cart is empty.</Text>

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
    emptyCart: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        alignSelf: "center",
        paddingTop: 150
        
    },
});

export default CheckOutScreen;