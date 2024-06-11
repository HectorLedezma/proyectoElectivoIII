import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const Register = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          telefono,
          correo,
          password,
        }),
      });
      const json = await response.json();
      if (response.status === 201) {
        console.log('Registration successful:', json);
        // Navigate to another screen or handle the response
      } else {
        console.log('Registration failed:', json.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Nombre" onChangeText={setNombre} value={nombre} />
      <TextInput placeholder="Apellido" onChangeText={setApellido} value={apellido} />
      <TextInput placeholder="Teléfono" onChangeText={setTelefono} value={telefono} />
      <TextInput placeholder="Correo" onChangeText={setCorreo} value={correo} />
      <TextInput placeholder="Contraseña" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default Register;
