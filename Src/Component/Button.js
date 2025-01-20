// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Custom Button Component
const CustomButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomButton;
