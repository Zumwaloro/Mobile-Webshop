import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 60,
      backgroundColor: '#FF430A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'sans-serif-medium'
    }
  });

export default Header;