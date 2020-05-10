import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import ItemContainer from '../components/item-container';
import Footer from '../components/footer';

import Cort from '../images/bass/cort.png';
import Ibanez from '../images/bass/ibanez.png';
import Esh from '../images/bass/esh.jpg';

function BassScreen() {

    const instruments = [
        {label: "Cort B5 Artisan", img: Cort, price: 500},
        {label: "Ibanez BTB1905SM", img: Ibanez, price: 500},
        {label: "Esh Stinger 4", img: Esh, price: 500},
    ]

  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
      <ItemContainer items={instruments}/>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BassScreen;