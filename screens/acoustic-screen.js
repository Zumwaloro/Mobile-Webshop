import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import ItemContainer from '../components/item-container';
import Footer from '../components/footer';

import Gibson from '../images/accoustic/gibson.png';
import Luna from '../images/accoustic/luna.jpg';
import Yamaha from '../images/accoustic/yamaha.jpg';

function AcousticScreen() {

    const instruments = [
        {label: "Gibson Hummingbird", img: Gibson, price: 500},
        {label: "Luna Vista Wolf", img: Luna, price: 500},
        {label: "Yamaha LJ56 Custom ARE", img: Yamaha, price: 500},
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

export default AcousticScreen;