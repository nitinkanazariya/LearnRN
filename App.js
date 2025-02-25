// import { View, Text, LogBox } from 'react-native'
// import React from 'react'
// import StackRoot from './Src/Root/Stack/StackRoot'
// import { StoreProvider } from './Src/service/contextStore'
// LogBox.ignoreAllLogs()
// const App = () => {


//   return (
//     <>
//       <StoreProvider>
//         <StackRoot />
//       </StoreProvider>
//     </>
//   )
// }

// export default App


import { View, Text, TextInput } from 'react-native'
import React from 'react'
import CustomTextInput from './Src/Component/CustomTextInput'

const App = () => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <CustomTextInput ContainerStyle={{ marginTop: 50, }} LeftIcon={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-locked-512.png'} />
    </View>
  )
}

export default App