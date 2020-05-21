import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Item from './item';

const ItemContainer = ({items, handler}) => {

    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{flexGrow: 1}}           
                data={items}
                renderItem={ ({item}) => (
                    <Item label={item.label}
                          img={item.img} 
                          price={item.price}
                          action={handler}
                          itemKey={item.key}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default ItemContainer;