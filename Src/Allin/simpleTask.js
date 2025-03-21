
import { View, Text, FlatList, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [selectDay, setSelectDay] = useState([])
  const [openDropDown, setOpenDropDown] = useState(false)
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const animationHeight = useState(new Animated.Value(0))[0];

  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown);

    Animated.timing(animationHeight, {
      toValue: openDropDown ? 0 : 232,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handleSelectDay = (day) => {
    if (selectDay.includes(day)) {
      setSelectDay(selectDay.filter(d => d !== day))
    } else {
      setSelectDay([...selectDay, day])
    }
  }
  const list = ({ item, index }) => {
    const isSelected = selectDay.includes(item)
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: days.length == index + 1 ? 0 : 15, }}>
        <TouchableOpacity onPress={() => handleSelectDay(item)}>
          <Image style={{ height: 15, width: 15 }} source={{ uri: isSelected ? 'https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-3/32/checkbox--checked--filled-512.png' : 'https://cdn1.iconfinder.com/data/icons/systemui/21/checkbox_empty-512.png' }} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 8, color: 'black', fontSize: 14 }}>{item}</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <TouchableOpacity style={{ padding: 5, paddingHorizontal: 10, backgroundColor: 'lightgray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          onPress={toggleDropdown}>
          <Text>Days</Text>
          <Image style={{ height: 8, width: 13 }} source={{ uri: openDropDown ? 'https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/up-top-arrow-512.png' : 'https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/down-bottom-arrow-512.png' }} />
        </TouchableOpacity>
        <Animated.FlatList data={days} renderItem={list} style={{ backgroundColor: 'white', padding: openDropDown ? 10 : 0, maxHeight: animationHeight }} />
      </View>


    </View>
  )
}

export default App