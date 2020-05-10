import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import ItemContainer from '../components/item-container';
import Footer from '../components/footer';

import Bagpipe from '../images/folk/bagpipe.jpg';
import Gurdy from '../images/folk/gurdy.jpg';
import Kaval from '../images/folk/kaval.jpg';

function FolkScreen() {

    const instruments = [
        {label: "Bagpipe", img: Bagpipe, price: 500},
        {label: "Hurdy Gurdy", img: Gurdy, price: 500},
        {label: "Turkish kaval", img: Kaval, price: 500},
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

export default FolkScreen;