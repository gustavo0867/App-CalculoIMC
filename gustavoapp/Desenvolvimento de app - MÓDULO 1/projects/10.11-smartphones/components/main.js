import {View, Text, StyleSheet} from 'react-native'

import Myline from './line'
import Mytitle from './title'

export default function Main(){
    return (
        <View>
            <Text style={styleList.titlemain}>Smartphones</Text>

            <View style={styleList.containerPhone}>
                <Mytitle title='Samsung A52s'/>
                <Myline line='camera' mainC='64' selfieC='32'/>
                <Myline line='memory' ram='6' storage='128'/>
                <Myline line='screen' frequency='120'/>
                <Myline line='battery' capacity='4500'/>                
            </View>

            <View style={styleList.containerPhone}>
                <Mytitle title='Redmi Note 11'/>
                <Myline line='camera' mainC='50' selfieC='13'/>
                <Myline line='memory' ram='4' storage='128'/>
                <Myline line='screen' frequency='90'/>
                <Myline line='battery' capacity='5000'/>       
            </View>

        </View>
    )
}

const styleList = StyleSheet.create({
    titlemain:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'rgb(120, 182, 226)',
        marginTop: 60,
        marginBottom: 20,
        textAlign: 'center'
    },
    containerPhone:{
        backgroundColor: 'rgb(50,50,50)',
        padding: 10,
        marginVertical: 15,
        borderRadius: 15,

    },
})