import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  

import FruitList from './components/fruits';
import PlaceList from './components/places';
export default function App() {
  const [fruitData, setFruitData] = useState(dataFruit);

  const resetQuantities = () => {
    const resetData = fruitData.map(item => ({ ...item, qty: 0 }));
    setFruitData(resetData);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FruitList data={fruitData} resetQuantities={resetQuantities} />
      <PlaceList />
    </View>
  );
}
