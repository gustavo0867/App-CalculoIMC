import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import { useState } from "react"
import Table from './Table'

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [bmi, setBmi] = useState(null)
    const [level, setLevel] = useState(null)

    function calc(){
        if(height > 0 && weight > 0) {
            var calcBmi = (weight / (height * height)).toFixed(2)

            if(calcBmi < 18.50){
                setLevel(1)
            }
            else if(calcBmi >= 18.50 && calcBmi <= 24.99){
                setLevel(2)
            }
            else if(calcBmi >= 25 && calcBmi <= 29.99){
                setLevel(3)
            }
            else if(calcBmi >= 30 && calcBmi <= 34.99){
                setLevel(4)
            }
            else{
                setLevel(5)
            }
            setBmi(calcBmi)
        }
        else {
            Alert.alert('Aviso', 'Por favor, verifique se todos os campos estão preenchidos corretamente')
        }
    }

    const reset = () =>{
        setHeight(null)
        setWeight(null)
        setBmi(null)
        setLevel(null)
    }

    return(
        <View style={styleList.containerForm}>
            <View style={styleList.containerInput}>
                <View style={styleList.containerData}>
                    <Text style={styleList.txt}> Altura (m): </Text>
                    <TextInput 
                     style={styleList.input}
                     placeholder='Ex.: 1.70'
                     onChangeText={(inputValue) => {setHeight(inputValue)}}
                     keyboardType='numeric'
                     value={height}
                     />
                </View>
                <View style={styleList.containerData}>
                    <Text style={styleList.txt}> Kilos (kg): </Text>
                    <TextInput 
                     style={styleList.input}
                     placeholder='Ex.: 70'
                     onChangeText={(inputValue) => {setWeight(inputValue)}}
                     keyboardType='numeric'
                     value={weight}
                     />
                </View> 
            </View>
            <View style={styleList.containerBtn}>
                    <TouchableOpacity style={styleList.btn} activeOpacity={0.7} onPress={reset}>
                        <Text style={styleList.btnText}> Resetar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleList.btn} activeOpacity={0.7} onPress={calc}>
                        <Text style={styleList.btnText}> Calcular </Text>
                    </TouchableOpacity>
            </View>

            <Text style={styleList.resultTxt}>Resultado: {level == null ? 0 : bmi} </Text>   
            <Table levelBmi={level}/>        
        </View>
    )
}

const styleList = StyleSheet.create({
    containerForm:{
        alignItems:'center'
    },
    containerInput:{
        flexDirection:'row',
        marginVertical:15
    },
    containerData:{
        width: 140,
        alignItems:'flex-start'
    },

    txt:{
        fontSize:16,
        margin: 5,
        marginLeft: 10,
    },

    input:{
        backgroundColor: '#E6E6FA',
        width: 120,
        fontSize: 17,
        padding: 10,
        marginHorizontal: 10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ddd'
    },

    containerBtn:{
        flexDirection: 'row',
        justifyContent: 'center'        
    },
    btn:{
        backgroundColor: '#9370DB',
        widht: 120,
        marginHorizontal: 10,
        padding: 10, 
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: '#ddd'
        
    },
    btnText:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16, 
        fontWeight: '500'
    },
    resultTxt:{
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20
    }
})







