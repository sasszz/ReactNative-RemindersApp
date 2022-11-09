import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>This is Lucie writing from her Laptop!</Text>
      <Text>What's cool is that it's displaying on my phone!</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <Text>React Native is pretty cool</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
