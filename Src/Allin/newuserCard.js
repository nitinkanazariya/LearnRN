
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ height: 122, backgroundColor: '#E7FFFE', borderRadius: 10, padding: 15, margin: 20, flexDirection: 'row' }}>
      <View style={{}}>
       <Image source={{
          uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
        }} st yle={{ height: 63, width: 63, borderRadius: 30 }} />
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ height: 12, width: 12, tintColor: '#298BFF' }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-3/256/info-512.png' }} />
          <Text style={{ fontSize: 10, color: '#298BFF' }}>Safety tools</Text>
        </View>
      </View>
      <View style={{ marginLeft: 36 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>+01 202-555-0102</Text>
        <Text style={{ fontSize: 10, fontWeight: 'medium', color: '#9E9E9E' }}>-Andrey Boro</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: '#555555', fontSize: 10, fontWeight: 'regular' }}>Not a contact</Text>
          <View style={{ height: 2, width: 2, borderRadius: 2, backgroundColor: '#555555', margin: 4 }} />
          <Text style={{ color: '#555555', fontSize: 10, fontWeight: 'regular' }}>No Common Groups</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8 }}>
          <TouchableOpacity style={{ height: 24, width: 71, borderRadius: 4, backgroundColor: '#FF271D', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12, textAlign: 'center' }}>Block</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 24, width: 71, borderRadius: 4, backgroundColor: '#01D6C9', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12, textAlign: 'center' }}>Block</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}

export default App