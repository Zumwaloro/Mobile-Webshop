import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';     

const CheckOutItem = ({data, action, remove}) => {

    return(
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.text}>{data.element}</Text>
                <Text style={styles.text}>Quantity: {data.quantity}</Text>
                <Text style={styles.text}>Price: {(data.price*data.quantity) + " NOK"}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>action(data)}>
                    <Icon name="plussquare" size={44} color="black" style={styles.iconPlus}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>remove(data)}>
                    <Icon name="minussquare" size={44} color="black" style={styles.iconMinus}/>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection:'row',
        justifyContent: "space-between",
        backgroundColor: "#FFD5B5",
        borderBottomWidth: 5,
        borderBottomColor: "#EBA553",
        height: 150
    },
    iconContainer: {
        paddingTop: 5
    },
    text: {
        textAlign: 'left',
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    iconMinus: {
        paddingTop: 15,
        paddingRight: 10
    },
    iconPlus: {
        paddingTop: 15,
        paddingRight: 10
    }
});

export default CheckOutItem;