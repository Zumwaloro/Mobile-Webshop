import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';

const Footer = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Find us: </Text>
            <Icon name="contacts" size={45} color='black' />
            <Icon name="facebook-square"
                  size={45}
                  color='black'
                  onPress={ ()=>{ Linking.openURL('https://facebook.com')}}
             />            
            <Icon name="instagram"
                  size={45}
                  color='black'
                  onPress={ ()=>{ Linking.openURL('https://instagram.com')}}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        borderRightWidth: 5
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'sans-serif-medium'

    }
});

export default Footer;