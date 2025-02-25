// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { login, StoreProvider, useStore } from '../../service/contextStore';

// const HomeScreen = () => {
//   const { state, dispatch } = useStore();

//   const handleLogin = () => {
//     const user = { name: 'John Doe', email: 'john@example.com' }; // Example user data
//     dispatch(login(user));
//   };

//   const handleLogout = () => {
//     // dispatch(logout());
//   };

//   return (
//     <View>
//       {state.isAuthenticated ? (
//         <>
//           <Text>Welcome, {state.user.name}!</Text>
//           <Button title="Logout" onPress={handleLogout} />
//         </>
//       ) : (
//         <>
//           <Text>Please log in.</Text>
//           <Button title="Login" onPress={handleLogin} />
//         </>
//       )}
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <StoreProvider>
//       <HomeScreen />
//     </StoreProvider>
//   );
// }



import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import { RootName } from '../../Constent/OBJ';
import CustomButton from '../../Component/Button';
import { login, logout, useStore } from '../../service/contextStore';

const Login = (props) => {
  const { state, dispatch } = useStore()

  console.log(state, 'LOGIN');


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
    if (!formData.email || !formData.password) {
      Alert.alert('Warning', 'Please fill all fields');
      return;
    }
    dispatch(login(formData))
  };
  const handleLogout = async () => {

    dispatch(logout())
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

      <CustomButton title={"Login"} onPress={handleSubmit} />
      <Text style={{ textAlign: 'center' }} >
        Don't have an account? Sign up
        <Text style={{ fontWeight: 'bold', color: '#007BFF' }} onPress={() => props.navigation.navigate(RootName.signUp)}>here</Text>
      </Text>

      <Text>
        {state?.user ? `${state?.user?.email}\n${state?.user?.password}` : ''}
      </Text>
      <CustomButton title={"Logout"} onPress={handleLogout} />
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
