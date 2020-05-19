import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SimpleLineIcons as Icon } from '@expo/vector-icons';

const Header = ({label, action}) => {
    return (
        <TouchableOpacity onPress={()=>action()}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    <Icon name="music-tone-alt" size={30} color="black"></Icon>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 35,
      backgroundColor: '#FF430A',
      alignItems: 'center',
      justifyContent: 'center',
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
    }
  });

export default Header;