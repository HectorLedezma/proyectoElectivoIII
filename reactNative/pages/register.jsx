import React, { useState } from 'react';
import { View } from 'react-native';
import Boton from '../Components/boton';
import { FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import Entrada from '../Components/input';
import fondo from "../styles/fondo.json";
import { Box, FormControl, Image, Stack, Text } from 'native-base';
import logo from "../images/Logo.png"
import { connectionSignin } from '../Classes/connection';

const Register = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const con = new connectionSignin();
  const handleRegister = async () => {
    try {
      const response = await con.handleRegister(
        nombre,
        apellido,
        telefono,
        correo,
        password
      )
      
      if (response) {
        console.log('Registration successful:');
        // Navigate to another screen or handle the response
        navigation.navigate("Login")

      } else {
        console.log('Registration failed:');
        //evento para notificar registro fallido
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
