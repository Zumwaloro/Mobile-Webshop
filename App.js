import React from 'react';
import Header from './components/header';
import Cart from './components/cart';
import CategoryContainer from './components/category-container';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
      <CategoryContainer />
    </View>
  );
}
