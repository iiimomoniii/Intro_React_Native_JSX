import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FF0', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Text style={{ backgroundColor: '#F00',width: 100 }}>Codemobile 1#</Text>
      <Text style={{ backgroundColor: '#F0F',width: 200 }}>Codemobile 2#</Text>
      <Text style={{ backgroundColor: '#10F',width: 300 }}>Codemobile 3#</Text>
      <Text style={{ backgroundColor: '#80F',width: 400 }}>Codemobile 4#</Text>
    </View>
  )
}

export default App