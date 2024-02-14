import { View, Text, Image, ActivityIndicator, Dimensions } from 'react-native'
//ActivityIndicator (Loading)
//Dimensions Calculate Display size
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FF0', flexDirection: 'column'}}>
      <Text style={{ backgroundColor: '#F00', flex:1 }}>Codemobile 1#</Text>
      <Text style={{ backgroundColor: '#F0F', flex:1 }}>Codemobile 2#</Text>
      <Text style={{ backgroundColor: '#10F', flex:1 }}>Codemobile 3#</Text>
      <Text style={{ backgroundColor: '#80F', flex:1 }}>Codemobile 4#</Text>
      <Image style={{ width:null, flex:1}} resizeMode='contain'  source={require("../Major/static/image/major.png")}></Image>
      <ActivityIndicator color="white" style={{ position:"absolute", left: Dimensions.get('screen').width/2 - 25, top : Dimensions.get('screen').height/2-25  }} size={50}/>
      {/* Dimensions.get('screen').width/2 - 25 => get width size of screen divide 2 for get half of width and minus 2 (radius)  */}
    </View>
  )
}

export default App