import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Component/Constant';

const Product = (props) => {
  const productId = props?.route?.params?.productId
  console.log(productId);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Image source={{ uri: productId }} style={{ height: HEIGHT, width: WIDTH, resizeMode: 'contain' }} /> */}
      <Text style={{ fontSize: 20, fontWeight: '500' }}>{productId ? productId : 'Not found'}</Text>
    </View>
  )
}

export default Product