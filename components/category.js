import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Category = ({label, imgSource, action}) => {


    return (
        <TouchableOpacity onPress={action}>
            <View style={styles.container}>
                <Image source={imgSource} style={styles.img}/>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FFD5B5",
        borderBottomWidth: 5,
        borderBottomColor: "#EBA553",
        height: 100
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
        height: 95,
        width: 200
    }
});

export default Category;