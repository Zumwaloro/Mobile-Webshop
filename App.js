import React, {useState, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import Cart from './components/cart';
import Footer from './components/footer';
import WebShopNavigaton from './navigation/webshop-navigation';

export default function App() {

  //Some initial states and a ref to the navigation component
  const [total, setTotal] = useState(0);
  const [elements, setElements] = useState([]);
  const navigationRef = useRef(null);

  //Add item to the cart
  const addTotal = (data) => {
    let index = null;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].element === data.element) {
        index = i;
      }
    }
    if (index !== null) {
      elements[index].quantity += 1;
    } else {
      data.quantity = 1;
      setElements([...elements, data]);
    }     
     setTotal(data.price+total); 
  };

  //Remove item from the cart
  const removeItem = (data) => {
    if (total-data.price < 0) {
      setTotal(0);
    } else {
      setTotal(total-data.price);
    }
    for (let i = 0; i < elements.length; i++) {
      if (data.element === elements[i].element) {
        if(elements[i].quantity === 1) {
          elements.splice(i,1);
          setElements([...elements]);
        } else {
          elements[i].quantity-=1;
        }
      }
    }
  }

  //Navigate to the check-out screen
  const doCheckOut = () => {
    navigationRef.current._navigation.navigate("CheckOut");
  };

  //Navigate to the check-out screen
  const getContacts = () => {
    navigationRef.current._navigation.navigate("Contacts");
  };

  //Navigate to the main screen
  const navigateToMain = () => {
    navigationRef.current._navigation.navigate("Categories");
  };

  return (
    <View style={styles.container}>
      <Header label="  Skald Music Webshop  " action={navigateToMain}/>
      <Cart total={total} handler={doCheckOut} />
      <WebShopNavigaton 
        screenProps={{
          handler: addTotal,
          remove: removeItem,
          data: elements
        }}
        ref={navigationRef}
      />
      <Footer handler={getContacts}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});