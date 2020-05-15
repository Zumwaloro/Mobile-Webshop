import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import Item from './item';

const ItemContainer = ({items, handler}) => {

    return (
        <ScrollView>
            <FlatList
                contentContainerStyle={{flexGrow: 1}}           
                data={items}
                renderItem={ ({item}) => (
                    <Item label={item.label}
                          img={item.img} 
                          price={item.price}
                          action={handler}
                    />
                )}
            />
        </ScrollView>
    );
};

export default ItemContainer;