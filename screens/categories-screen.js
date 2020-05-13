import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Header from '../components/header';
import Cart from '../components/cart';
import CategoryContainer from '../components/category-container';
import Footer from '../components/footer';

function CategoriesScreen(props) {

  const navigate = (screen) => {
    props.navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
      <CategoryContainer navigate={navigate}/>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CategoriesScreen;