
import { View, Text } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { HEIGHT } from '../../Component/Constant'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Font_icon = () => {
  // console.log(RFValue(10));

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ textAlign: 'centers', }}>Home</Text >
      {/* <Text style={{ textAlign: 'centers', fontSize: RFValue(15, HEIGHT) }}>Home</Text > */}
      {/* <Text style={{ textAlign: 'centers', fontSize: RFPercentage(10) }}>Home</Text > */}
      {/* <Text style={{ textAlign: 'centers', fontSize: hp('5%') }}>H ome</Text > */}
    </View>
  )
}

export default Font_icon



// RFValue(24, 580)
// RFPercentage(5)   