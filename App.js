import React, {useState, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import Cart from './components/cart';
import Footer from './components/footer';
import WebShopNavigaton from './navigation/webshop-navigation';

export default function App() {

  const [total, setTotal] = useState(0);
  const appRootRef = useRef(null);

  const getTotal = () => {return total;}
  const addTotal = (value) => {setTotal(total+value)};


  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart />
      <WebShopNavigaton />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});