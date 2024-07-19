import { Text, View, Image, FlatList, StyleSheet } from "react-native";

const dataPlace = [
    {
         id: 1, 
         storeName: 'Ultra Market'
    },
    {
        id: 2,
        storeName: 'Fruit Shop'
    },
    {
        id: 3,
        storeName: 'Green Space'

    }
]

function oneItem({item}){
    return (
        <View style={styleList.containerItem}>
            <Text style={styleList.txtItem}> {item.storeName} </Text>
        </View>
    )
}

function itemSeparator(){
    return <View style={styleList.separatorStyle}/>
}

export default function PlaceList() {
    return(
        <View>
            <View style={styleList.containerTitle}>
                <Text style={styleList.txtTitle}>Stores</Text>
                <Image source={require('../assets/store.png')} style={styleList.imgTitle}/>
            </View>
            <FlatList
                data={dataPlace}
                renderItem={(item) => oneItem(item)}
                style={styleList.listStyle}
                horizontal={true}
                ItemSeparatorComponent={itemSeparator}

            />
        </View>
    )
}
const styleList = StyleSheet.create({
        containerTitle:{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 20,
        },
        txtTitle:{
            fontSize: 26
        },
        imgTitle:{
            width: 60,
            height: 60,
        },
       
        containerItem:{
            widht: 85,
            padding: 10,
        },
        txtItem:{
            fontSize: 18,
            textAlign: 'center'
        },
        listStyle:{
            flexGrow: 0
        },
        separatorStyle:{
            height: '100%',
            widht: 1,
            backgroundColor: '#aaa'
    
        }
    
    })