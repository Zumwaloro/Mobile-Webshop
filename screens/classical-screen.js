import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import ItemContainer from '../components/item-container';
import Footer from '../components/footer';

import Hiller from '../images/classical/hiller.jpg';
import Lothar from '../images/classical/lothar.jpg';
import Yamaha from '../images/classical/yamaha.jpg';

function ClassicalScreen() {

    const instruments = [
        {label: "Hiller & Sohn Violin", img: Hiller, price: 500},
        {label: "Lothar Antiqued Cello", img: Lothar, price: 500},
        {label: "Yamaha SVC 110 Silent Cello", img: Yamaha, price: 500},
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

export default ClassicalScreen;