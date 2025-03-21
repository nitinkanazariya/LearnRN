
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [done, setdone] = useState(false)
  return (
    <View style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>

      <View style={{ height: 55, padding: 15, backgroundColor: '#EFFEFF', borderRadius: 5, flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => { setdone(!done) }}>
          <Image style={{ height: 20, width: 20, tintColor: done ? '#01D6C9' : '#7B7B7B' }} source={{ uri: done ? 'https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-3/32/checkbox--checked--filled-512.png' : 'https://cdn1.iconfinder.com/data/icons/systemui/21/checkbox_empty-512.png' }} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{ fontSize: 14, fontWeight: 'regular', marginLeft: 20, flex: 1, color: '#7B7B7B' }}> Simple Task SimpSimple Task Simple TaskSimple Task le TaskSimple Task </Text>
        <TouchableOpacity hitSlop={10} style={{ marginLeft: 10, }} onPress={() => { console.log('hello') }}>
          <Image style={{ height: 6, width: 26, tintColor: '#01D6C9' }} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/ui-for-chat-app/32/UI_Icon-07-512.png' }} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#161A22', fontSize: 12, marginTop: 5 }}>15:01 pm</Text>
    </View>
  )
}

export default App