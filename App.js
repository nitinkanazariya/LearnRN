import { View, Text, LogBox } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import StackRoot from './Src/Root/Stack/StackRoot'
LogBox.ignoreAllLogs()
const App = () => {

  console.log(Config.API_URL);

  return (
    <>
      <StackRoot />
    </>
  )
}

export default App

