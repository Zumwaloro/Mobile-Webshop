import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import Cart from './components/cart';
import Footer from './components/footer';
import WebShopNavigaton from './navigation/webshop-navigation';
import CheckOutScreen from './screens/check-out';

export default function App() {

  const [total, setTotal] = useState(0);
  const addTotal = (value) => {
    setTotal(total+value)
  };

  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart total={total} />
      <WebShopNavigaton screenProps={{handler: addTotal}} />
      <Footer />
    </View>
   // <CheckOutScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});