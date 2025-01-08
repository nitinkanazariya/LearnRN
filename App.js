import { View, Text } from 'react-native'
import React from 'react'
import Home from './Src/Screen/home/home'
import Config from 'react-native-config'

const App = () => {
  console.log('env============================================>>>', Config.API_URL)
  return (
    <Home />
  )
}

export default App