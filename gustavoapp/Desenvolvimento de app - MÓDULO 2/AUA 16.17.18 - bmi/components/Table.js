import { Text, View, StyleSheet } from "react-native";

export default function Table(props){
    return(
        <View style={styleList.table}>
            <View style={[styleList.tableRow, styleList.tableHeaderRow]}>
                <Text style={[styleList.tableColumn, styleList.tableColumnTxtHeader]}> BMI </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnTxtHeader]}>  Status </Text>
            </View>
            <View style={styleList.tableRow}>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel1, props.levelBmi == 1? styleList.tableColumnActive : null]}> &lt; 18.50 </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel1, props.levelBmi == 1? styleList.tableColumnActive : null]}> Underweight </Text>
            </View>
            <View style={styleList.tableRow}>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel2, props.levelBmi == 2? styleList.tableColumnActive : null]}> 18.50 - 24.99 </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel2, props.levelBmi == 2? styleList.tableColumnActive : null]}> Healthy </Text>
            </View>
            <View style={styleList.tableRow}>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel3, props.levelBmi == 3? styleList.tableColumnActive : null]}> 25.00 - 29.99 </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel3, props.levelBmi == 3? styleList.tableColumnActive : null]}> Overweight </Text>
            </View>
            <View style={styleList.tableRow}>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel4, props.levelBmi == 4? styleList.tableColumnActive : null]}> 30.00 - 34.99 </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel4, props.levelBmi == 4? styleList.tableColumnActive : null]}> Obesity </Text>
            </View>
            <View style={styleList.tableRow}>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel5, props.levelBmi == 5? styleList.tableColumnActive : null]}> 35 &gt; </Text>
                <Text style={[styleList.tableColumn, styleList.tableColumnLevel5, props.levelBmi == 5? styleList.tableColumnActive : null]}> Extremely Obese </Text>
            </View>
        </View>
    )
}

const styleList = StyleSheet.create({
    tableHeaderRow: {
        backgroundColor: 'rgb(210,230,210)'
    },
    table:{
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1, 
        borderColor: '#ddd',
        marginBottom: 20
    },
    tableRow:{
        flexDirection: 'row'
    },
    tableColumn:{
        width: 140,
        fontSize: 16, 
        textAlign: 'center',
        paddingVertical: 10
    },
    tableColumnTxtHeader:{
        fontSize: 18, 
        fontWeight: '600'
    },
    tableColumnLevel1:{
        backgroundColor: 'rgba(3, 149, 214, 0.3)'
    },
    tableColumnLevel2:{
        backgroundColor: 'rgba(12, 213, 0, 0.3)'
    },
    tableColumnLevel3:{
        backgroundColor: 'rgba(252, 156, 16, 0.3)'
    },
    tableColumnLevel4:{
        backgroundColor: 'rgba(255, 106, 105, 0.3)'
    },
    tableColumnLevel5:{
        backgroundColor: 'rgba(255, 16, 15, 0.3)'
    },
    tableColumnActive:{
        fontWeight: '900',
        fontSize: 17
    }
    
})