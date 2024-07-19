import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Main from './components/main';

export default function App() {
  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor={'rgb(40,40,40)'} />
      <View style={styles.container}>
        <Main />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(40,40,40)',
    alignItems: 'center',
  },
});
