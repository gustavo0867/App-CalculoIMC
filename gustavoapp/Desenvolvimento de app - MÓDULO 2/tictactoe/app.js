import { StyleSheet } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./src/screens/Home";

export default function App() {
    const [screen, setScreen] = useState('screenHome')
    
    const color1 = '#efe'
    const color2 = '#dfd'

    if(screen == 'screenHome'){
        return(
            <LinearGradient style={styles.container} colors={[color1, color2]}>
                <Home/>
            </LinearGradient>
        )
    } 
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});