import React, {useState, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import Cart from './components/cart';
import Footer from './components/footer';
import WebShopNavigaton from './navigation/webshop-navigation';

export default function App() {

  const [total, setTotal] = useState(0);
  const addTotal = (value) => { setTotal(total+value); };
  const navigationRef = useRef(null);

  const doCheckOut = () => {
    navigationRef.current._navigation.navigate("CheckOut");
  }

  const navigateToMain = () => {
    navigationRef.current._navigation.navigate("Categories");
  }

  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  "/>
      <Cart total={total} handler={doCheckOut}/>
      <WebShopNavigaton screenProps={{handler: addTotal, main: navigateToMain}} ref={navigationRef}/>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});