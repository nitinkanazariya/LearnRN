import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screen/home/home'
import Login from '../../Screen/login/login'


const Stack = createNativeStackNavigator()

const StackRoot = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRoot