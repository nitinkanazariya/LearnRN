import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useTogel } from './TogaleHook'
import useFetcher from './useFetch'

const CustomHook = () => {
  const [isone, setToggle] = useTogel(false)
  const { data, isLoader, error } = useFetcher('https://allin.website4you.co.in/api/v1/user-list')

  console.log(data, isLoader, error);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoader && <ActivityIndicator size={'large'} />}
      {
        data && data.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))
      }
    </View>
  )
}



export default CustomHook