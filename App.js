import React from 'react';
import { Text, View } from 'react-native';
import KeyboardAvoidingComponent from './KeyboardAvoidingComponent';

const App = () => {
  return (
    // <View> <KeyboardAvoidingComponent/> </View>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <KeyboardAvoidingComponent />
      <Text>Hello, world.</Text>

    </View>
  )
};
export default App;