import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import accoustic from '../images/accoustic.jpg';
import electric from '../images/electric.jpeg';
import bass from '../images/bass.jpg';
import folk from '../images/folk.png';
import classical from '../images/classical.png';
import Category from './category';

const CategoryContainer = ({navigate}) => {

    const categories = [
        {label: "Acoustic guitars", img: accoustic, route: "Acoustic", key:"ac"},
        {label: "Electric guitars", img: electric, route: "Guitar", key:"gu"},
        {label: "Bass guitars", img: bass, route: "Bass", key:"ba"},
        {label: "Classical instruments", img: classical, route: "Classical", key:"cla"},
        {label: "Folk instruments", img: folk, route: "Folk", key:"fo"}
    ]

    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{flexGrow: 1}}           
                data={categories}
                renderItem={ ({item}) => (
                    <Category label={item.label} imgSource={item.img}
                              action={()=>navigate(item.route)} 
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default CategoryContainer;