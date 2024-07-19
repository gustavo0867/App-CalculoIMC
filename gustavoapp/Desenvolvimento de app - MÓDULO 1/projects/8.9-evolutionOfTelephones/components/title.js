import { Text, StyleSheet } from "react-native"

export default function Title() {
    return(
        <Text style={styleList.title}>The evolution of Telephones</Text>
    )
}

const styleList = StyleSheet.create({
    title:{
        fontSize: 31,
        fontWeight: 'bold',
        marginBottom:20,
        textAlign: 'center'
    }
})