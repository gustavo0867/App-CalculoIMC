import { StyleSheet, Text, View } from "react-native";

export default function Title() {
    return (
        <View style={styleList.container}>
            <Text style={styleList.title}> Tic Tac Toe </Text>            
        </View>
    )
}

const styleList = StyleSheet.create({

    container: {
        marginvertical: 5,
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    }
})