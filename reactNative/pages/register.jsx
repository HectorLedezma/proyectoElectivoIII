import React from 'react';
import { Box, Text, FormControl, Stack, Input, Button } from 'native-base';
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  return (
    <Box 
      flex={1} 
      bg={{
        linearGradient: {
          colors: ['#181818', '#c0c0c0'],
          start: [1, 0],
          end: [1, 1],
        },
      }}
      alignItems="center" 
      justifyContent="center" 
      padding={"6"}
    >
      <Text 
        fontWeight={"bold"} 
        fontSize={"6xl"} 
        color={"white"} 
        fontFamily={'fuenteAncha'}
      >
        Datos del usuario
      </Text>
      <FormControl>
        <Stack space={5}>
          <FormControl.Label>Nombre</FormControl.Label>
          <Input 
            placeholder="Nombre" 
            InputLeftElement={<FaUser style={{ marginLeft: 10 }} />} 
          />
          <FormControl.Label>Apellido</FormControl.Label>
          <Input 
            placeholder="Apellido" 
            InputLeftElement={<FaUser style={{ marginLeft: 10 }} />} 
          />
          <FormControl.Label>Teléfono</FormControl.Label>
          <Input 
            placeholder="Teléfono" 
            InputLeftElement={<FaPhone style={{ marginLeft: 10 }} />} 
          />
          <FormControl.Label>Correo</FormControl.Label>
          <Input 
            placeholder="Correo" 
            InputLeftElement={<FaEnvelope style={{ marginLeft: 10 }} />} 
          />
          <FormControl.Label>Contraseña</FormControl.Label>
          <Input 
            placeholder="Contraseña" 
            type="password" 
            InputLeftElement={<FaLock style={{ marginLeft: 10 }} />} 
          />
          <Button onPress={() => console.log('Crear cuenta')} mt="5">
            Crear cuenta
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Register;
