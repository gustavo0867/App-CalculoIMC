import { Text, View, Image, StyleSheet } from "react-native"

export default function Main(){
    return(
        <View>

            <View style={styleList.containerPhone}>
                <Image source={require("../assets/1970.jpg")} style={styleList.img} />
                <View style={styleList.phone1}>
                    <Text style={styleList.txtYear}>1970</Text>
                    <Text style={styleList.txtPhone}>Wall touch tone pad phone</Text>
                </View>
            </View>
            
            <View style={styleList.containerPhone}>
                <Image source={require("../assets/1980.jpg")} style={styleList.img}/>
                <View style={styleList.phone2}>
                    <Text style={styleList.txtYear}>1980</Text>
                    <Text style={styleList.txtPhone}>Cordless phone</Text>
                </View>
            </View>


            <View style={styleList.containerPhone}>
                <Image source={require("../assets/2000.jpg")} style={styleList.img}/>
                <View style={styleList.phone3}>
                    <Text style={styleList.txtYear}>2000</Text>
                    <Text style={styleList.txtPhone}>Cellphone</Text>
                </View>
            </View>

            <View style={styleList.containerPhone}>
                <Image source={require("../assets/2010.jpg")} style={styleList.img}/>
                <View style={styleList.phone4}>
                    <Text style={styleList.txtYear}>2010</Text>
                    <Text style={styleList.txtPhone}>Smartphone</Text>
                </View>
            </View>




        </View>
    )
}

const styleList = StyleSheet.create({
    img:{
        width: 110,
        height: 110,
    },
    containerPhone:{
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        margin: 5,
        height: 110
    },
    txtYear:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    txtPhone: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    phone1: {
        backgroundColor: '#e04742',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180
    },
    phone2:{
        backgroundColor: '#ffb200',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180
    },
    phone3:{
        backgroundColor: '#dad62d',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180
    },
    phone4:{
        backgroundColor: '#468ff8',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180
    },
})

