import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons as AddIcon } from '@expo/vector-icons';
import { AntDesign as Icon } from '@expo/vector-icons';     

const CheckOutItem = ({data, action, remove}) => {

    return(
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{data.element}</Text>
                <Text style={styles.text}>Quantity: {data.quantity}</Text>
                <Text style={styles.text}>{(data.price*data.quantity) + " NOK"}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>action(data)}>
                    <Icon name="plussquare" size={35} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>remove(data)}>
                    <Icon name="minussquare" size={35} color="black" style={styles.icon}/>
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
    textContainer: {

    },
    iconContainer: {
        paddingTop: 5
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
    icon: {
        paddingTop: 5
    }
});

export default CheckOutItem;