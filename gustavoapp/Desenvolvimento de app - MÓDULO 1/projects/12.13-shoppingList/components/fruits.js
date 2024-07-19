
import React, { useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableHighlight } from 'react-native';


const dataFruit = [
    {
        id: 1,
        fruitName: 'Pineapple',
        qty: 2,
        imagePath: require('../assets/pineapple.png')

    },
    {
        id: 2,
        fruitName: 'Apple',
        qty: 5, 
        imagePath: require('../assets/apple.png')
    },
    {
        id: 3,
        fruitName: 'Orange',
        qty: 6,
        imagePath: require('../assets/orange.png')
    },
    {
        id: 4,
        fruitName: 'Watermelon',
        qty: 2,
        imagePath: require('../assets/watermelon.png')
    },
]

function oneItem({ item }) {
    const [quantity, setQuantity] = useState(item.qty);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <TouchableHighlight onPress={incrementQuantity}>
            <View style={styleList.containerItem}>
                <Image source={item.imagePath} style={styleList.imgFruit} />
                <Text style={styleList.txtItem}>{quantity} x {item.fruitName}</Text>
            </View>
        </TouchableHighlight>
    );
}


function headerList({ resetQuantities }) {
    return (
      <>
        <Text style={styleList.txtHeader}>Shopping List</Text>
        <Image source={require('../assets/list.png')} style={styleList.imgHeader} />
        <TouchableHighlight onPress={resetQuantities}>
          <Text style={{ color: 'blue' }}>Reset All</Text>
        </TouchableHighlight>
      </>
    );
  }
  


function itemSeparator(){
    return <View style={styleList.separatorStyle} />
}

export default function FruitList({ data, resetQuantities }) {
    return (
        <View>
          <FlatList
            data={data}
            renderItem={(item) => oneItem(item)}
            style={styleList.listStyle}
            ListHeaderComponent={headerList({ resetQuantities })} // Passa resetQuantities como propriedade
            ListHeaderComponentStyle={styleList.listHeaderStyle}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
      );

}

const styleList = StyleSheet.create({
    listStyle:{
        flexGrow: 0
    },
    containerItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 240,
    },
    imgFruit:{
        height: 50,
        width:50,
    },
    txtItem:{
        fontSize:18
    },
    listHeaderStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 30
    },
    txtHeader:{
        fontSize: 26
    },
    imgHeader:{
        width: 60,
        height:60,
    },
    separatorStyle:{
        height: 1,
        width: '100%',
        backgroundColor: '#aaa',
        marginVertical: 13
    },



})

