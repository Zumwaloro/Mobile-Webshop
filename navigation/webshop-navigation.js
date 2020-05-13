import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/categories-screen';
import AcousticScreen from '../screens/acoustic-screen';
import ClassicalScreen from '../screens/classical-screen';
import FolkScreen from '../screens/folk-screen';
import GuitarScreen from '../screens/guitar-screen';
import BassScreen from '../screens/bass-screen';

const WebShopNavigation = createStackNavigator(
    {
    Categories: CategoriesScreen,
    Acoustic: AcousticScreen,
    Guitar: GuitarScreen,
    Bass: BassScreen,
    Classical: ClassicalScreen,
    Folk: FolkScreen,
    }
);

export default createAppContainer(WebShopNavigation);