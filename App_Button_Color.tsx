import { View, Text, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ marginTop: 20 }}>

        <TouchableOpacity
          style={{ marginTop: 24, borderColor: "#3b5998", borderWidth: 1, padding: 24, borderRadius: 5, backgroundColor: "#3b5998" }} 
          onPress={() => { Alert.alert("Hello") }}>
          <Text style={{ color: '#ffffff' }}>TextButton</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default App