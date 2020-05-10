import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import ItemContainer from '../components/item-container';
import Footer from '../components/footer';

import Dean from '../images/electric/dean.jpg';
import Schecter from '../images/electric/schecter.png';
import Squier from '../images/electric/squier.png';

function GuitarScreen() {

    const instruments = [
        {label: "Dean Dave Mustaine VMNT", img: Dean, price: 500},
        {label: "Schecter C-6 Plus", img: Schecter, price: 500},
        {label: "Squier Bullet Stratocaster", img: Squier, price: 500},
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

export default GuitarScreen;