import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'

const CustomTextInput = ({
  placeholder,
  backgroundColor,
  ContainerStyle,
  IconStyle,
  LeftIcon,
  RightIcon,
  Value,
  onChangeText,
  keyboardType }) => {

  return (
    <View
      style={[{ backgroundColor: backgroundColor ? backgroundColor : 'white' }, styles.Container, ContainerStyle]}>
      {LeftIcon && <Image
        source={{ uri: LeftIcon ? LeftIcon : 'https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/security-shield-lock-512.png' }}
        style={[styles.icon, IconStyle]}
      />}
      <TextInput
        placeholder={placeholder ? placeholder : 'Enter Text'}
        value={Value}
        autoCapitalize="sentences"
        keyboardType={keyboardType ? keyboardType : "default"}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {RightIcon && <Image
        source={{ uri: RightIcon ? RightIcon : 'https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/security-shield-lock-512.png' }}
        style={[styles.icon, IconStyle]}
      />}
    </View>
  )
}

export default CustomTextInput
const styles = StyleSheet.create({
  Container: {
    height: 50, width: '100%',
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: 'black',
    margin: 5
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  }
})