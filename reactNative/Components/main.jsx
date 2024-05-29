import React from "react";
import { Box, Button, Column, FormControl, Image, Input, Row, Stack, Text} from "native-base";
import { FaArrowRight, FaLock, FaUser } from "react-icons/fa";

//import  from "../assets/fonts/RutaCL_Regular.ttf"
import logo from "../images/Logo.png"
//import { border } from "native-base/lib/typescript/theme/styled-system";

const MainPage = () => {
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
            
            <Stack>
              <Box borderRadius={"md"} display={"flex"} alignSelf={"center"} shadow={2} bg={"white"} width={"75%"}>
                <Row display={"flex"}>
                  <Column w={"8%"} p={2}><FaUser/></Column>
                  <Column w={"92%"}><Input variant="unstyled" w="100%" borderStyle={"none"} type="text" fontFamily={'fuenteRegular'} p={2} placeholder="Username" />  </Column>
                </Row>
              </Box>
            </Stack>
            
            <Stack>
              <Box borderRadius={"md"} display={"flex"} alignSelf={"center"} shadow={2} bg={"white"} width={"75%"}>
                <Row display={"flex"}>
                  <Column w={"8%"} p={2}><FaLock /></Column>
                  <Column w={"92%"}><Input variant="unstyled" w="100%" borderStyle={"none"} type="password" fontFamily={'fuenteRegular'} p={2} placeholder="Contraseña" />  </Column>
                </Row>
              </Box>
            </Stack>
            <Stack >
              <Box w={"75%"} display={"flex"} alignSelf={"center"}>
                <Button bg={"#008d0f"} borderRadius={"md"} borderColor={"white"} borderWidth={3}>
                  <Row display={"flex"}>
                    <Column><Text color={"white"} fontFamily={'fuenteRegular'} fontSize={"2xl"}>Iniciar sesión</Text></Column>
                    <Column p={2}><FaArrowRight color={"white"} size={"17"}/></Column>
                  </Row>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </FormControl>
      </Box>
    )
}

export default MainPage