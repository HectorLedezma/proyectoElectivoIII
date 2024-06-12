import React, { useState } from 'react';
//import { Button, TextInput, View } from 'react-native';
import logo from "../images/Logo.png"
import Boton from '../Components/boton';
import Entrada from '../Components/input';
import { FaLock, FaUser } from 'react-icons/fa';
import { Box, FormControl, Image, Stack, Text, View, } from 'native-base';

import fondo from "../styles/fondo.json";



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
    <Box style={fondo.degradado}>
      {/*Formulario con los componentes*/}
      <Image h={"21%"} w={"47%"} top={1} source={logo} alt="logo"/>
      <Text
        fontWeight={"bold"} 
        fontSize={"6xl"} 
        color={"white"}
        fontFamily={'fuenteAncha'}
      >BacheApp</Text>
      <View marginTop={"10em"} paddingBottom={"15em"} w={"75%"}>
        <FormControl>
          <Stack space={5}>
            {/*Input con el componente*/}
            <Entrada icon={<FaUser/>} placeholder="Correo" onChangeText={setCorreo} value={correo}/>
            <Entrada icon={<FaLock/>} type="password" placeholder="Contraseña" onChangeText={setPass} value={pass}/>

            {/*Boton con el componente*/}
            <Boton fontSize="lg" dir="izq" tipo="normal" title="Iniciar sesión" onPress={handleLogin}/>
          </Stack>
        </FormControl> 
      </View>
    </Box>
  );
};

export default Login;