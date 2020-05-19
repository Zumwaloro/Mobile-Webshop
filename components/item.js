import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 

const Item = ({label, img, price, action}) => {

    const data = {
        price: price,
        element: label
    }

    return (
            <View style={styles.container}>
                <Image source={img} style={styles.img}/>
                <View style={styles.info}>
                    <Text style={styles.text}>{label}</Text>
                    <Text style={styles.text}>{price + " $"}</Text>
                    <TouchableOpacity onPress={()=>action(data)}>
                        <Icon name="add-box" size={30} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        paddingTop: 7
    },
    info: {
        flexDirection: 'row',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FFD5B5",
        borderBottomWidth: 5,
        borderBottomColor: "#EBA553",
        height: 200
    },
    text: {
        textAlign: 'right',
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    img: {
        height: 150,
        width: 400
    }
});

export default Item;