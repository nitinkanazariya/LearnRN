import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const SkeletonScreen = () => {
  const [loading, setLoading] = useState(false)
  const [dataa, setDataa] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])
  
  const fetchUsers = async () => {
    setLoading(true)
    const url = 'https://allin.website4you.co.in/api/v1/user-list'
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FsbGluLndlYnNpdGU0eW91LmNvLmluL2FwaS92MS92ZXJpZnktb3RwIiwiaWF0IjoxNzM3MzczOTMzLCJleHAiOjE3NDYwMTM5MzMsIm5iZiI6MTczNzM3MzkzMywianRpIjoicGdJSUpjSmV5MDJwVklKaCIsInN1YiI6IjExNiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.210vr3pZqf5661S69T1yHxDtiFAzpOsgPXfEjCSHfwc'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const data = await response.json();
    if (data.status_code == 200) {
      setDataa(data.data.userList)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  const loaderlist = () => {
    return (
      <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', margin: 5, padding: 10, borderRadius: 10 }}>
        <ShimmerPlaceHolder style={{ height: 50, width: 50, borderRadius: 100 }} >
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder style={{ marginLeft: 10, height: 25 }} >
        </ShimmerPlaceHolder>
      </View >
    )
  }
  const list = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', margin: 5, padding: 10, borderRadius: 10 }}>
        <Image source={{ uri: item.profile }} style={{ height: 50, width: 50, borderRadius: 100 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>{item.type == 'user' ? item?.first_name + ' ' + item?.last_name : item?.name}</Text>
      </View >
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      {/* <Text style={{marginVertical:50,textAlign:'center',fontSize:18,fontWeight:'bold',color:'black'}}>User</Text> */}
      <FlatList data={dataa} renderItem={loading ? loaderlist : list} style={{ paddingHorizontal: 10, marginTop: 20 }} />
    </View>
  )
}

export default SkeletonScreen