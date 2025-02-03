import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { ListData } from '../../Constent/OBJ'
import { RFValue } from 'react-native-responsive-fontsize'



const Home = (props) => {

  const list = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => { props.navigation.navigate(item.navigation) }}
        style={{ backgroundColor: 'white', flexDirection: 'row', padding: 10, margin: 5, borderRadius: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: RFValue(16), marginRight: 10, fontWeight: 'bold' }}>{`${index + 1}]`}</Text>
        <Text style={{ fontSize: RFValue(15), fontWeight: '500' }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'black' }}>
      <StatusBar backgroundColor={'black'} />

      <Text style={{ fontSize: RFValue(20), color: 'white', margin: 20, textAlign: 'center', fontWeight: 'bold' }}>All Concept</Text>
      <FlatList data={ListData} renderItem={list} />
      {/* 
  <TouchableOpacity hitSlop={15} style={{ backgroundColor: 'red', height: 25, width: 25, marginBottom: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', }}>X</Text>
      </TouchableOpacity>

*/}
    </View>
  )
}

export default Home


