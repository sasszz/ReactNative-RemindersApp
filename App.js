import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';


export default function App() {
  const [text, onChangeText] = React.useState("");
  const [dayum, setDay] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>Set a Reminder</Text>
      <Text>Reminder Text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Set Date:</Text>
      <Calendar 
        disableArrowLeft={true}
        minDate={new Date()}
        initialDate={dayum}
        onDayPress={day => {
          console.log('selected day', day);
          setDay(day)
        }}
      />
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
  input: {
    height: 40,
    width: 160,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
