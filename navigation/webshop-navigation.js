import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/categories-screen';
import CheckOutScreen from '../screens/check-out';
import ContactScreen from '../screens/contact';
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
    {label: "Cort B5 Artisan", img: Cort, price: 500},
    {label: "Ibanez BTB1905SM", img: Ibanez, price: 500},
    {label: "Esh Stinger 4", img: Esh, price: 500},
]
const acoustic = [
    {label: "Gibson Hummingbird", img: Gibson, price: 500},
    {label: "Luna Vista Wolf", img: Luna, price: 500},
    {label: "Yamaha LJ56 Custom ARE", img: Yamaha, price: 500},
]
const classical = [
    {label: "Hiller & Sohn Violin", img: Hiller, price: 500},
    {label: "Lothar Antiqued Cello", img: Lothar, price: 500},
    {label: "Yamaha SVC 110 Silent Cello", img: Yamaha2, price: 500},
]
const folk = [
    {label: "Bagpipe", img: Bagpipe, price: 500},
    {label: "Hurdy Gurdy", img: Gurdy, price: 500},
    {label: "Turkish kaval", img: Kaval, price: 500},
]
const electric = [
    {label: "Dean Dave Mustaine VMNT", img: Dean, price: 500},
    {label: "Schecter C-6 Plus", img: Schecter, price: 500},
    {label: "Squier Bullet Stratocaster", img: Squier, price: 500},
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
    
        Contacts: ContactScreen                            },    
    {
        headerMode: 'none'
    }    
);

export default createAppContainer(WebShopNavigation);