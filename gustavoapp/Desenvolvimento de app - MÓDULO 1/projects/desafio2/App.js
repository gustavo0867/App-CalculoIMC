import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import Header from './components/header';
import Contacts from './components/contacts';

export default function App() {
  return (
    <ImageBackground style={styles.container} source={require('./assets/gradient.png')}>
      
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Header />
        <Contacts />
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  mainContainer:{
    alignItems: 'center',
  }
});
