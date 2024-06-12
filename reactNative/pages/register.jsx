import React, { useState } from 'react';
import { View } from 'react-native';
import Boton from '../Components/boton';
import { FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import Entrada from '../Components/input';
import fondo from "../styles/fondo.json";
import { Box, FormControl, Image, Stack, Text } from 'native-base';
import logo from "../images/Logo.png"

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
    <Box style={fondo.degradado}>
        <Image size={"xl"} resizeMode={"contain"} source={logo} alt="logo"/>
        <View w={"75%"}>
          
          <Text
            fontWeight={"bold"} 
            fontSize={"6xl"} 
            color={"white"}
            fontFamily={'fuenteAncha'}
          >Registrate</Text>
          <FormControl >
            <Stack space={5}>
              
              <Entrada icon={<FaUser/>} type="text" placeholder="Nombre" onChangeText={setNombre} value={nombre}/>
              <Entrada icon={<FaUser/>} type="text" placeholder="Apellido" onChangeText={setApellido} value={apellido}/>
              <Entrada icon={<FaPhone/>} type="text" placeholder="Teléfono" onChangeText={setTelefono} value={telefono}/>
              <Entrada icon={<IoIosMail/>} type="mail" placeholder="Correo" onChangeText={setCorreo} value={correo}/>
              <Entrada icon={<FaLock/>} type="password" placeholder="Contraseña" onChangeText={setPassword} value={password}/>
              <Boton fontSize="lg" dir="izq" tipo="normal" title="Registrar" onPress={handleRegister}/>
              <Boton fontSize="lg" dir="der" tipo="normal" title="Volver" onPress={()=>{
                navigation.navigate("Login");
              }}/>
            </Stack>
          </FormControl>
          
        </View>
    </Box>
    
  );
};

export default Register;
