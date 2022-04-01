import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  const [number] = useState(Math.floor(Math.random() * 100) + 1);
  
  
    const [count, setCount] = useState(1);

  //Counting the amount of guesses made.
  

  //Comparing the guessed number to the random number, that was set when starting the app.
  const guess = () => {
    setCount(count + 1);
    if (Number(text) < number) {
      setAnswer(`${text} is too low.`)
    } else if (Number(text) > number) {
      setAnswer(`${text} is too high.`)
    } else {
      setAnswer(`${text} is right!`)
      
      Alert.alert(`You guessed the number in ${ count } guesses`);
    }
  }

  //{() => {setCount(count + 1)}

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100: </Text>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.row}>
        <View style={styles.button}>
          <Button onPress={ guess } title='Make guess' />
        </View>
      </View>
      <Text style={{ marginTop: 20 }}>Your guess {answer}</Text>
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

  input: {
    width: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 5
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    width: '50%',
  },

  button: {
    marginTop: 10,
  }

});

