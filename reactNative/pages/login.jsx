import React from "react";
import { Box, FormControl, Image, Stack, Text} from "native-base";
import { FaLock, FaUser } from "react-icons/fa";

//import  from "../assets/fonts/RutaCL_Regular.ttf"
import logo from "../images/Logo.png"
import Entrada from "../Components/input";
import Boton from "../Components/boton";
//import { border } from "native-base/lib/typescript/theme/styled-system";

const Login = () => {
    return(

      <Box 
        flex={1} 
        bg={{
          linearGradient: {
            //        gris oscuro,  gris claro
            colors: [  '#181818'  , '#c0c0c0'  ],
            start: [1, 0],
            end: [1, 1]
          }
        }}
        alignItems="center" justifyContent="center" padding={"6"}>
        <Image style={{width:"39%"}} source={logo} alt="logo" size={"xl"}/>
        <Text 
          fontWeight={"bold"} 
          fontSize={"6xl"} 
          color={"white"}
          fontFamily={'fuenteAncha'}
        >BacheApp</Text>
        <FormControl>
          <Stack space={5}>
            
            <Entrada icon={<FaUser/>} type="text" placeholder="usuario"/>
            <Entrada icon={<FaLock />} type="password" placeholder="contraseña"/>
            <Boton/>
          </Stack>
        </FormControl>
      </Box>
    )
}

export default Login