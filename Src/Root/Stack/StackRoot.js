import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screen/home/home'
import Login from '../../Screen/login/login'
import ExtraData from '../../Screen/FlatList/ExtraData'
import { RootName } from '../../Constent/OBJ'
import Product from '../../Screen/Products/Product'
import AutoFillOtp from '../../Screen/AutoFillOtp/AutoFillOtp'
import Tost from '../../Screen/TostMsg/TostMessage'
import SkeletonScreen from '../../Screen/Skeleton/Skeleton'
import SectionListScreen from '../../Screen/SectionList/SectionListScreen'
import ChatScreen from '../../Screen/SocketIo/ChatScreen'

const Stack = createNativeStackNavigator()

const linking = {
  prefixes: ['https://website4you.co.in/app'],
  config: {
    screens: {
      product: 'product/:productId',
      login: 'login',
    },
  },
};

console.log(linking);

const StackRoot = () => {
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>

        <Stack.Screen name={RootName.home} component={Home} />
        <Stack.Screen name={RootName.login} component={Login} />
        <Stack.Screen name={RootName.extradata} component={ExtraData} />
        <Stack.Screen name={RootName.product} component={Product} />
        <Stack.Screen name={RootName.autofillOtp} component={AutoFillOtp} />
        <Stack.Screen name={RootName.tost} component={Tost} />
        <Stack.Screen name={RootName.skeleton} component={SkeletonScreen} />
        <Stack.Screen name={RootName.sectionlist} component={SectionListScreen} />
        <Stack.Screen name={RootName.socketio} component={ChatScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRoot