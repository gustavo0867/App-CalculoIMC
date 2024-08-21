import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/Title';
export default function Home(props){
    return(
        <>
            <View style={styleList.container}>
                <Title />   
                <Text style={styleList.txt}>Pick Your Side</Text>

                <View>
                    <TouchableOpacity>
                        <Image/> aq
                    </TouchableOpacity>
                </View>


            </View>
        </>
    )
}
const styleList = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    txt: {
        fontSize: 20,
        marginTop:  30,
        marginBottom: 10,
    }
})