import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

    return (
      <View>
          <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.header}> Hello, React-Native</Text>
        </View>
        
      </View>
      );
  
  
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006DFF',
    marginTop: 42,
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    color: "white",
    marginTop: -800,
    fontWeight: "bold",
    fontSize: 30
  },
  input: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    padding: 10,
  }

});
