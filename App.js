import React from 'react';
import Header from './components/header';
import Cart from './components/cart';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
    </View>
  );
}
