
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MeetingButton = () => {
  return (
    <View>
      <TouchableOpacity style={{ height: 24, width: 86, borderRadius: 100, gap: 5, backgroundColor: '#161A22', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>Accept</Text>
        <Image style={{ tintColor: 'white', height: 9, width: 9, resizeMode: 'contain' }} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_tick-512.png' }} />
      </TouchableOpacity>


      <TouchableOpacity style={{ height: 24, width: 86, borderRadius: 100, gap: 5, borderWidth: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#161A22', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>Decline </Text>
        <Image style={{ tintColor: '#161A22', height: 9, width: 9, resizeMode: 'contain' }} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_open-512.png' }} />
      </TouchableOpacity>
    </View>
  )
}

export default MeetingButton