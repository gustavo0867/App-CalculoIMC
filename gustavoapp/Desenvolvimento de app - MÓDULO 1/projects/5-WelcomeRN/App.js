import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my app!</Text>
      <Text style={styles.text}>This is my first developed app</Text>
      <View style={styles.viewRN}>
        <Image source ={require('./assets/rn.png')} style={styles.imageRN}/>
        <Text style={styles.textRN}>Developed in React Native</Text>
      </View>
      <Button title="Let's Start!"/>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40,40,50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'rgb(83,200,243)',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  text:{
    color: 'rgb(250,250,250)',
    fontSize: 20,

  },

  imageRN:{
      width: 150,
      height: 100,
      resizeMode: 'contain',
  },
  viewRN:{
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,

  },
  textRN:{
    color: 'rgb(250,250,250)',
    width: 150,    
    fontSize: 20,
  },

});
