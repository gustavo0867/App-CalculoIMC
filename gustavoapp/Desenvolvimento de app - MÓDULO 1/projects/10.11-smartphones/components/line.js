import{ View, Text, Image, StyleSheet} from 'react-native'

export default function Myline(props){
    if(props.line == 'camera'){
        return(
            <View style={styleList.mainLine}>
                <View style={styleList.firstColumn}>
                    <Image source={require('../assets/camera.png')} style={styleList.img}/>
                </View>
                <View style={styleList.secondColumn}>
                    <Text style={styleList.textStyle}>Main Camera: {props.mainC} Mp</Text>   
                    <Text style={styleList.textStyle}>Selfie Camera: {props.selfieC} Mp</Text>                 
                </View>
            </View>
        )
    }
    if(props.line == 'memory'){
        return(
            <View style={styleList.mainLine}>
                <View style={styleList.firstColumn}>
                    <Image source={require('../assets/cpu.png')} style={styleList.img} />
                </View>
                <View style={styleList.secondColumn}>
                    <Text style={styleList.textStyle}>RAM: {props.ram} Gb</Text>   
                    <Text style={styleList.textStyle}>Storage: {props.storage} Gb</Text>                 
                </View>
            </View>
        )
    }
    if(props.line == 'screen'){
        return(
            <View style={styleList.mainLine}>
                <View style={styleList.firstColumn}>
                    <Image source={require('../assets/screen.png')} style={styleList.img} />
                </View>
                <View style={styleList.secondColumn}>
                    <Text style={styleList.textStyle}>Screen: {props.frequency} Hz</Text>   
                </View>
            </View>
        )
    }

    if(props.line == 'battery'){
        return(
            <View style={styleList.mainLine}>
                <View style={styleList.firstColumn}>
                    <Image source={require('../assets/battery.png')} style={styleList.img} />
                </View>
                <View style={styleList.secondColumn}>
                    <Text style={styleList.textStyle}>battery: {props.capacity} mAh</Text>   
                </View>
            </View>
        )
    }
}

const styleList = StyleSheet.create({
    mainLine:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        backgroundColor: 'rgb(60,60,60)',
        borderRadius: 15,
        padding: 10,
        marginVertical: 5
    },

    firstColumn:{
        paddingLeft: 10,
    },

    img:{
        width: 45, 
        height: 45,
    },

    secondColumn:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,        
    },

    textStyle:{
        color: 'rgb(255, 255, 255)'
    },


})