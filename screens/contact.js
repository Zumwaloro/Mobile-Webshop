import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ContactScreen() {

  return (
    <View style={styles.container}>
        <Text style={styles.contact}>Contacts:</Text>
        <Text style={styles.contact}>E-mail: info@skaldmusic.no</Text>
        <Text style={styles.contact}>Tel: (+47) 939 65 666</Text>
        <Text style={styles.contact}>Address: Slottsplassen 1, 0010 Oslo</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD5B5',
        paddingTop: 20
    },
    contact: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        alignSelf: "center",
        
    },
});

export default ContactScreen;