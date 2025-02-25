// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LoaderKit from 'react-native-loader-kit'

// Custom Button Component
const CustomButton = ({ onPress, title, style, textStyle, loading }) => {
  return (
    <TouchableOpacity disabled={loading} style={[styles.button, style]} onPress={onPress}>
      {loading ? null : <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
      {loading && <LoaderKit
        style={{ width: 25, height: 25, }}
        name={'LineScalePulseOutRapid'}
        color={'white'}
      />}
    </TouchableOpacity>
  );
};

// Default Styles for the Custom Button
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default blue color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomButton;
