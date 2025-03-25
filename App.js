import { View, Text, LogBox } from 'react-native'
import React from 'react'
import StackRoot from './Src/Root/Stack/StackRoot'
import { StoreProvider } from './Src/service/contextStore'
LogBox.ignoreAllLogs()
const App = () => {
  return (
    <>
      <StoreProvider>
        <StackRoot />
      </StoreProvider>
    </>
  )
}
export default App;


