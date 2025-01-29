import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import { RootName } from '../../Constent/OBJ';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Component/Button';

const SignUp = (props) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const res = await fetch('http://192.168.1.33:3000/api/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    })
    const response = await res.json()

    if (response.status_code == 200) {
      await AsyncStorage.setItem('myid', JSON.stringify(response.user.id))
      await AsyncStorage.setItem('mydata', JSON.stringify(response))

      props.navigation.navigate(RootName.chatuserlist)
    }
    else {
      Alert.alert(response.message)
    }
  };
  return (
    <>
      {<View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center', marginVertical: 50 }}>Create New User</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />

        {/* <Button title="Submit" onPress={handleSubmit} /> */}
        <CustomButton title={'Create New User'} onPress={handleSubmit} />
        <Text style={{ textAlign: 'center', marginVertical: 5 }}>
          Already have an account? <Text style={{ fontWeight: 'bold', color: 'blue' }} onPress={() => { props.navigation.navigate(RootName.login) }}>Sign In</Text>
        </Text>


      </View>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});

export default SignUp;


