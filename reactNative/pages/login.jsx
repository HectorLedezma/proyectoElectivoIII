import React, { useState } from 'react';
//import { Button, TextInput, View } from 'react-native';
import logo from "../images/Logo.png"
import Boton from '../Components/boton';
import Entrada from '../Components/input';
import { FaLock, FaUser } from 'react-icons/fa';
import { Box, FormControl, Image, Stack, Text, View, } from 'native-base';

import fondo from "../styles/fondo.json";
import { connection } from '../Classes/connection';



const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');

  const con = new connection();

  const handleLogin = async () => {
    try {
      const response = await con.handleLogin(correo,pass)
      if(response){
        navigation.navigate("Main")
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Box style={fondo.degradado}>
      {/*Formulario con los componentes*/}
      <Image size={"2xl"} resizeMode={"contain"} source={logo} alt="logo"/>
      <Text
        fontWeight={"bold"} 
        fontSize={"6xl"} 
        color={"white"}
        fontFamily={'fuenteAncha'}
      >BacheApp</Text>
      <View w={"75%"}>
        <FormControl>
          <Stack space={5}>
            {/*Input con el componente*/}
            <Entrada icon={<FaUser/>} placeholder="Correo" onChangeText={setCorreo} value={correo}/>
            <Entrada icon={<FaLock/>} type="password" placeholder="Contraseña" onChangeText={setPass} value={pass}/>

            {/*Boton con el componente*/}
            <Boton fontSize="lg" dir="izq" tipo="normal" title="Iniciar sesión" onPress={handleLogin}/>
            <Boton fontSize="lg" dir="der" tipo="alternativo" title="Registrarse" onPress={()=>{
              navigation.navigate("Register");
            }}/>
          </Stack>
        </FormControl> 
      </View>
    </Box>
  );
};

export default Login;