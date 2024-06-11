import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo,
          pass,
        }),
      });
      const json = await response.json();
      if (response.status === 200) {
        console.log('Login successful:', json);
        // Navigate to another screen or store the token
      } else {
        console.log('Login failed:', json.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Correo" onChangeText={setCorreo} value={correo} />
      <TextInput placeholder="Contraseña" onChangeText={setPass} value={pass} secureTextEntry />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default Login;