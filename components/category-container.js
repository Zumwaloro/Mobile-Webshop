import React from 'react';
import {View, StyleSheet, FlatList, ScrollView } from 'react-native';
import accoustic from '../images/accoustic.jpg';
import electric from '../images/electric.jpeg';
import bass from '../images/bass.jpg';
import folk from '../images/folk.png';
import classical from '../images/classical.png';
import Category from './category';

const CategoryContainer = () => {

    const categories = [
        {label: "Accoustic guitars", img: accoustic},
        {label: "Electric guitars", img: electric},
        {label: "Bass guitars", img: bass},
        {label: "Classical instruments", img: classical},
        {label: "Folk instruments", img: folk}
    ]

    return (
        <ScrollView>
            <FlatList
                contentContainerStyle={{flexGrow: 1}}           
                data={categories}
                renderItem={ ({item}) => (
                    <Category label={item.label} imgSource={item.img}/>
                )}
            />
        </ScrollView>
    );
};

export default CategoryContainer;