
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <TouchableOpacity style={{ gap: 8, height: 45, backgroundColor: 'white', borderWidth: 1, borderRadius: 10, elevation: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Share</Text>
        <Image style={{ height: 16, width: 16, resizeMode: 'contain' }} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/lightly-selected/30/mail-forward-480.png' }} />
      </TouchableOpacity>
    </View>
  )
}

export default App