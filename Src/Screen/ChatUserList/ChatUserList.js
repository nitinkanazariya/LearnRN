import { View, Text, StatusBar, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RootName } from '../../Constent/OBJ'

const ChatUserList = (props) => {
  const [Token, setToken] = useState('')
  const [AllUsers, setAllUsers] = useState([])

  const getMyToken = async () => {
    const res = await AsyncStorage.getItem('mydata')
    const userData = JSON.parse(res)
    setToken(userData.token)


  }
  const GetAllUser = async () => {
    if (Token) {
      const res = await fetch('http://192.168.1.33:3000/api/user', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,
        },
      })
      const response = await res.json()
      setAllUsers(response.users)
    }
  };
  const logOutUser = async () => {
    Alert.alert('logOut')
    await AsyncStorage.clear()
    props.navigation.navigate(RootName.home)

  }

  useEffect(() => {
    getMyToken()
    GetAllUser()
  }, [Token])

  return (
    <View style={{ backgroundColor: 'skyblue', flex: 1 }}>
      <StatusBar backgroundColor={'black'} />
      <View style={{ padding: 20, backgroundColor: 'black', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', }}>{''}</Text>
        <TouchableOpacity onPress={logOutUser} style={{}}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>LogOut</Text>
        </TouchableOpacity>
      </View>
      <FlatList style={{ padding: 10 }} data={AllUsers} renderItem={({ item }) => {
        console.log(item);

        return (
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 10, justifyContent: 'space-between' }} onPress={() => {
            props.navigation.navigate(RootName.socketio, { userId: item })
          }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )
      }} />
    </View>
  )
}

export default ChatUserList