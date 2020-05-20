import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

const PaymentScreen = () => {

    const [form, setForm] = useState(null);
    
    const change =(form)=> {setForm(form)};

    const submit = () => {
        //This is not a complete check of entered details, just very minimal.
        if (form) {
            console.log(form.values);
            Alert.alert(
                'Success!',
                'You payment has been registered.',
                [{text: 'Ok'}],
                {cancallable: true}
            ) 
        } else {
            Alert.alert(
                'Error!',
                'Enter credit card details.',
                [{text: 'Ok'}],
                {cancallable: true}
            )
        }
    }

  return (
    <View style={styles.container}>
        <CreditCardInput onChange={change}
                        requiresName={true}
                        allowSrcoll={true}                              
        />
        <TouchableOpacity onPress={()=>submit()}>
            <View style={styles.button}>
                <Text style={styles.submit}>Submit payment</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: "space-evenly",
        backgroundColor: '#FFD5B5',
    },
    submit: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        alignSelf: "center"        
    },
    button: {
        backgroundColor: '#FF430A',
        width: 350,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }
});

export default PaymentScreen;