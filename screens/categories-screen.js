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
      <CategoryContainer navigate={navigate}/>
  );
};

export default CategoriesScreen;