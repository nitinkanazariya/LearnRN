// import { LogBox } from 'react-native'
// import React from 'react'
// import StackRoot from './Src/Root/Stack/StackRoot'
// import { StoreProvider } from './Src/service/contextStore'
// import { Provider } from 'react-redux'
// import Store from './Src/service/redux/store'
// LogBox.ignoreAllLogs()
// const App = () => {
//   return (
//     <>
//       <Provider store={Store}>
//         <StoreProvider>
//           <StackRoot />
//         </StoreProvider>
//       </Provider>

//     </>
//   )
// }
// export default App;

import * as React from 'react';
import { Text, View } from 'react-native';
import { AnimatedFlatList } from '@kanelloc/react-native-animated-header-scroll-view'

export const App = () => {
  const data = Array.from(Array(20).keys());
  const renderItem = ({ item }) => {
    return (
      <View>
        <Card />
      </View>
    );
  };

  return (
    <AnimatedFlatList
      TopNavBarComponent={<TopNav />}
      topBarHeight={50} // Ensure this is an integer
      headerImage={require('./Src/Screen/Pdf/asset/352521_location_on_icon.png')}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default App;

const Card = () => {
  return (
    <View style={{ height: 200, backgroundColor: 'red', marginTop: 20 }}>
      <Text>Card</Text>
    </View>
  );
};

const TopNav = () => {
  return (
    <View>
      <Text style={{ fontSize: 50, color: 'black' }}>hello</Text>
    </View>
  )
}