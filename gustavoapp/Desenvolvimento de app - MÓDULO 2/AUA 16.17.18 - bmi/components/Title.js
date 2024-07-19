import { StyleSheet, Text, View } from "react-native"

export default function Title(){
    return(
        <View style={styleList.containerTitle}>
            <Text style={styleList.title}>  BMI </Text>
            <Text style={styleList.subTitle}> Body Mass Index</Text>
        </View>
    )
}

const styleList = StyleSheet.create({
    containerTitle: {
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    subTitle:{
        fontSize: 20,
        fontWeight: '400',
        fontStyle: 'italic'
    }
})

