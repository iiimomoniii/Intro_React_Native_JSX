import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FF0', flexDirection: 'column'}}>
      <Text style={{ backgroundColor: '#F00', flex:1 }}>Codemobile 1#</Text>
      <Text style={{ backgroundColor: '#F0F', flex:1 }}>Codemobile 2#</Text>
      <Text style={{ backgroundColor: '#10F', flex:1 }}>Codemobile 3#</Text>
      <Text style={{ backgroundColor: '#80F', flex:1 }}>Codemobile 4#</Text>
      <Image style={{ width:null, flex:1}} resizeMode='contain'  source={require("../Major/static/image/major.png")}></Image>
    </View>
  )
}

export default App