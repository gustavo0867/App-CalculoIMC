import { Text, StyleSheet} from 'react-native'

export default function Mytitle(props) {
    return(
        <Text style={styleList.titleStyle}>{props.title}</Text>
    )
}

const styleList = StyleSheet.create({
    titleStyle:{
        fontSize: 25, 
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
    },
})