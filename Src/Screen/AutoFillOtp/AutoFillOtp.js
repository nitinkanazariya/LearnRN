import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { HEIGHT, WIDTH } from '../../Component/Constant';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import SmsAndroid from 'react-native-get-sms-android';

const AutoFillOtp = () => {
  const [otp, setOtp] = useState('');
  const [smsData, setSmsData] = useState([])
  var filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for al
    indexFrom: 0, // start from index 0
    maxCount: 10, // count of SMS to return each time
  };
  console.log(smsData, '================================================')


  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: "Camera Permission",
          message: "We need access to your camera to take pictures",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        SmsAndroid.list(
          JSON.stringify(filter),
          (fail) => {
            console.log('Failed with this error: ' + fail);
          },
          (count, smsList) => {
            setSmsData(JSON.parse(smsList))

          },
        );
      } else {

        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission()
  }, [])


  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 100, marginBottom: 50, tintColor: 'black' }}
        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/classes-and-magic-abilities-fantasy-game/600/shield_guard_guardian_wing_protection_wings_angel_heaven_class-512.png' }}
      />
      <Text style={styles.header}>Enter OTP</Text>

      <OtpInput
        numberOfDigits={6}
        focusColor="green"
        autoFocus={false}
        hideStick={true}
        blurOnFilled={true}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onTextChange={(otpValue) => setOtp(otpValue)}
        value={otp} // Bind OTP to input field for auto-fill
        theme={{
          pinCodeContainerStyle: styles.pinCodeContainer,
          // pinCodeTextStyle: styles.pinCodeText,
          // focusStickStyle: styles.focusStick,
          // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          // placeholderTextStyle: styles.placeholderText,
          // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />

      <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, paddingHorizontal: 30, borderRadius: 10, marginTop: 30 }} >
        <Text style={styles.otpText}>Verify</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  pinCodeContainer: {
    width: WIDTH / 8,
    height: WIDTH / 6.5,
    backgroundColor: 'rgb(240, 238, 238)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1.5,
    borderColor: 'lightgray'
  },
  pinCodeText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  }
});

export default AutoFillOtp;
