import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screen/home/home'
import Login from '../../Screen/login/login'
import ExtraData from '../../Screen/FlatList/ExtraData'
import { RootName } from '../../Constent/OBJ'


const Stack = createNativeStackNavigator()

const StackRoot = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false, animation: 'fade' }}>

        <Stack.Screen name={RootName.home} component={Home} />
        <Stack.Screen name={RootName.login} component={Login} />
        <Stack.Screen name={RootName.extradata} component={ExtraData} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRoot