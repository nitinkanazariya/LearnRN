import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Component/Constant';

const Product = (props) => {
  const { productId } = props.route.params
  console.log(productId);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Image source={{ uri: productId }} style={{ height: HEIGHT, width: WIDTH, resizeMode: 'contain' }} /> */}
      <Text>{productId}</Text>
    </View>
  )
}

export default Product