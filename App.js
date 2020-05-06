import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/header';
import Cart from './components/cart';
import CategoryContainer from './components/category-container';
import Footer from './components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
      <CategoryContainer />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
