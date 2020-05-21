import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/categories-screen';
import CheckOutScreen from '../screens/check-out';
import ContactScreen from '../screens/contact';
import PaymentScreen from '../screens/payment';
import Screen from '../screens/screen';

import Cort from '../images/bass/cort.png';
import Ibanez from '../images/bass/ibanez.png';
import Esh from '../images/bass/esh.jpg';
import Gibson from '../images/accoustic/gibson.png';
import Luna from '../images/accoustic/luna.jpg';
import Yamaha from '../images/accoustic/yamaha.jpg';
import Hiller from '../images/classical/hiller.jpg';
import Lothar from '../images/classical/lothar.jpg';
import Yamaha2 from '../images/classical/yamaha.jpg';
import Bagpipe from '../images/folk/bagpipe.jpg';
import Gurdy from '../images/folk/gurdy.jpg';
import Kaval from '../images/folk/kaval.jpg';
import Dean from '../images/electric/dean.jpg';
import Schecter from '../images/electric/schecter.png';
import Squier from '../images/electric/squier.png';

const bass = [
    {label: "Cort B5 Artisan", img: Cort, price: 3500, key:"CortB5"},
    {label: "Ibanez BTB1905SM", img: Ibanez, price: 6000, key:"IbanezBTB"},
    {label: "Esh Stinger 4", img: Esh, price: 25000, key:"EstS"},
]
const acoustic = [
    {label: "Gibson Hummingbird", img: Gibson, price: 3000, key:"GibsonH"},
    {label: "Luna Vista Wolf", img: Luna, price: 5000, key:"LunaV"},
    {label: "Yamaha LJ56 Custom ARE", img: Yamaha, price: 4000, key:"YamahaLJ"},
]
const classical = [
    {label: "Hiller & Sohn Violin", img: Hiller, price: 30000, key:"HSV"},
    {label: "Lothar Antiqued Cello", img: Lothar, price: 45000, key:"LAC"},
    {label: "Yamaha SVC 110 Silent Cello", img: Yamaha2, price: 25000, key:"YSVC110"},
]
const folk = [
    {label: "Bagpipe", img: Bagpipe, price: 3000, key:"bagp"},
    {label: "Hurdy Gurdy", img: Gurdy, price: 10000, key:"gurdy"},
    {label: "Turkish kaval", img: Kaval, price: 500, key:"kaval"},
]
const electric = [
    {label: "Dean Dave Mustaine VMNT", img: Dean, price: 3000, key:"DeadD"},
    {label: "Schecter C-6 Plus", img: Schecter, price: 5000, key:"Schecter"},
    {label: "Squier Bullet Stratocaster", img: Squier, price: 2500, key:"Squier"},
]

const WebShopNavigation = createStackNavigator(
    {
        Categories: CategoriesScreen,
        Acoustic: screenProps => <Screen instruments={acoustic} action={screenProps.screenProps.handler} />,
        Guitar: screenProps => <Screen instruments={electric} action={screenProps.screenProps.handler} />,
        Bass: screenProps => <Screen instruments={bass} action={screenProps.screenProps.handler} />,
        Classical: screenProps => <Screen instruments={classical} action={screenProps.screenProps.handler} />,
        Folk: screenProps => <Screen instruments={folk} action={screenProps.screenProps.handler} />,
        CheckOut: screenProps => <CheckOutScreen 
                                    add={screenProps.screenProps.handler}
                                    remove={screenProps.screenProps.remove}
                                    data={screenProps.screenProps.data}
                                 />,
    
        Contacts: ContactScreen,
        Payment: PaymentScreen                            
    },    
    {
        headerMode: 'none'
    }    
);

export default createAppContainer(WebShopNavigation);