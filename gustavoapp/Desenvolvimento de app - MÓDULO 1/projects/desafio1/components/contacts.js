import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const dataBase = [
    {
        id: 1,
        name: "João Vitor",
        number: '9 9467 2156',
        favorite: true
    },
    {
        id: 2,
        name: "Bailey",
        number: '9 9348 4624',
        favorite: false
    },
    {
        id: 3,
        name: "Elizzabeth",
        number: '9 9561 3456',
        favorite: false
    },
    {
        id: 4,
        name: "Harrison",
        number: '9 9861 3246',
        favorite: false
    },
    {
        id: 5,
        name: "Hudson",
        number: '9 4674 3215',
        favorite: true
    },
    {
        id: 6,
        name: "Izabella",
        number: '9 4674 3215',
        favorite: false
    },
    {
        id: 7,
        name: "Rachel",
        number: '9 4674 3215',
        favorite: true
    },
    {
        id: 8,
        name: "Sebastian",
        number: '9 4674 3215',
        favorite: true
    },
    {
        id: 9,
        name: "Steven",
        number: '9 4674 3215',
        favorite: false
    },
    {
        id: 10,
        name: "Willow",
        number: '9 4674 3215',
        favorite: false
    },
]

function oneContact({item}) {
    if (item.favorite) {
        return(
            <View style={styleList.containerItem}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/user.png')} style={styleList.imgUser}/>
                    <View>
                        <View style={styleList.containerNameStar}>
                            <Text style={styleList.txtItem}>{item.name}</Text>
                            <Image source={require('../assets/starOn.png')} style={styleList.imgStar}/>
                        </View>
                        <Text style={styleList.txtItem}>Number: {item.number}</Text>
                    </View>
                </View>            
    
                <Image source={require('../assets/phone.png')} style={styleList.imgPhone}/>          
            </View>
        )
    }
    else {
        return(
            <View style={styleList.containerItem}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/user.png')} style={styleList.imgUser}/>
                    <View>
                        <View style={styleList.containerNameStar}>
                            <Text style={styleList.txtItem}>{item.name}</Text>
                            <Image source={require('../assets/starOff.png')} style={styleList.imgStar}/>
                        </View>
                        <Text style={styleList.txtItem}>Number: {item.number}</Text>
                    </View>
                </View>              
                <Image source={require('../assets/phone.png')} style={styleList.imgPhone}/>          
            </View>
        )
    }    
}

function headerList() {
    return <>    
            <Text style={styleList.txtHeader}>List of Contacts</Text>
            <Text style={styleList.txtHeader}>Total: {dataBase.length}</Text> 
    </>
}

export default function Contacts() {
    return (
        <View>
            <FlatList 
                data={dataBase}
                renderItem={oneContact}
                style={styleList.listStyle}
                ListHeaderComponent={headerList}
                ListHeaderComponentStyle={styleList.headerListStyle}
            />
        </View>
    )
}

const styleList = StyleSheet.create({
    containerItem:{
        padding: 10,
        marginVertical: 6.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        width: 320,
    },
    listStyle:{
        flexGrow: 0,
        height: 510
    },
    imgUser:{
        height: 40,
        width: 40,
        marginRight: 15
    },
    imgPhone: {
        height: 27,
        width: 27  
    },
    txtItem:{
        color: '#fff',
        fontSize: 15
    },
    headerListStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    txtHeader:{
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    imgStar:{
        height: 10,
        width: 10,
        marginLeft: 8
    },
    containerNameStar:{
        flexDirection: 'row',
        alignItems: 'center'
        
    }
})