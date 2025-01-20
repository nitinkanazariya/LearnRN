import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { WIDTH } from '../../Component/Constant';

const Tost = () => {
  const showToast = () => {
    Toast.show({
      type: 'customToast', // Define custom toast type
      position: 'bottom',
      text1: 'Custom Toast Title',
    
      
    });
  };

  // Custom Toast Component
  const CustomToast = ({ text1, text2, props }) => (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#f44336', // Red background for error toast
      padding: 16,
      alignItems: 'center',
      width:WIDTH
    }}>
      <Text style={{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      }}>
        {text1}
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 14,
        marginTop: 4,
      }}>
        {text2}
      </Text>
      {props && props.customMessage && (
        <Text style={{
          color: '#fff',
          fontSize: 12,
          marginTop: 6,
          fontStyle: 'italic',
        }}>
          {props.customMessage}
        </Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Custom Toast" onPress={showToast} />
      {/* Define custom toast rendering */}
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        config={{
          customToast: (props) => <CustomToast {...props} />
        }}
      />
    </View>
  );
};

export default Tost;
