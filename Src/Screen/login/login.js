import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import { RootName } from '../../Constent/OBJ';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Component/Button';

const Login = (props) => {

  const getMYId = async () => {
    const a = await AsyncStorage.getItem('myid')
    const id = JSON.parse(a)
    console.log(id);
    if (id) {
      props.navigation.reset({
        routes: [{ name: RootName.chatuserlist }], // The route you want to reset to
      });
    }
  }

  useEffect(() => {
    getMYId()
  }, [])

  const [formData, setFormData] = useState({
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

    const res = await fetch('http://192.168.1.33:3000/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    })
    const response = await res.json()
    if (response.status_code == 200) {
      await AsyncStorage.setItem('myid', JSON.stringify(response.data.id))
      await AsyncStorage.setItem('mydata', JSON.stringify(response))
      props.navigation.reset({
        routes: [{ name: RootName.chatuserlist }],
      });
    }
    else {
      Alert.alert(response.message)
    }

  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginVertical: 50, textAlign: 'center' }}>Login</Text>

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
      <CustomButton title={"Login"} onPress={handleSubmit} />
      <Text style={{ textAlign: 'center' }} >
        Don't have an account? Sign up
        <Text style={{ fontWeight: 'bold', color: '#007BFF' }} onPress={() => props.navigation.navigate(RootName.signUp)}>here</Text>
      </Text>
    </View>
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

export default Login;
