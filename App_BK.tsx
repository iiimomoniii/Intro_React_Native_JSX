import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'

export class App extends Component {

  render() {

    const message = 'Message';
    const textStyle = { color: '#FFFF00'}  ;
    return (
      <View style={{ backgroundColor: '#f00', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="ClickME" />
        <Text style={textStyle}>{Math.random().toString()}</Text>
        <Text style={{ color: "#FFF" }}>{message}</Text>
        <Text style={{ color: "#FFF" }}>Codemobile</Text>
        <Text style={{ color: "#FFF" }}>Codemobile</Text>
      </View>
    )
  }
}

export default App