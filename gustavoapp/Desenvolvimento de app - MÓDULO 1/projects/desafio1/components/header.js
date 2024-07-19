import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styleList.container}>
            <Image source={require('../assets/mainUser.png')} style={styleList.img}/>
            <View>
                <Text style={styleList.txtName}>Gustavo Ferreira</Text>
                <Text style={styleList.txtPhone}>Number: 9 5467 8431</Text>
            </View>
        </View>
    )
}

const styleList = StyleSheet.create({
    container:{
        width: 270,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
    },
    img:{
        height: 60,
        width: 60
    },    
    txtName:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtPhone:{
        color: '#fff',
        fontSize: 15,     
           
    }
})