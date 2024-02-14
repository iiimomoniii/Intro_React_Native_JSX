import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="ClickMe" onPress={() => {
        Alert.alert("Hey");
      }}></Button>
      <View style={{ marginTop: 20 }}>
        <Button title="ClickMe" onPress={() => {
          Alert.alert("Hey");
        }}></Button>
      </View>

    </View>
  )
}

export default App