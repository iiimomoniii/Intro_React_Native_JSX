import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ marginTop: 20 }}>

        <TouchableOpacity onPress={() => { Alert.alert("Hello") }}>
          <Text >TextButton</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default App