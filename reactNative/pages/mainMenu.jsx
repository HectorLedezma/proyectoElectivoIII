import { Box, Image, Text } from "native-base"
import { useEffect, useState } from "react"
import fondo from "../styles/fondo.json"
import logo from "../images/Logo.png"
import Boton from "../Components/boton"


const MainMenu = (props) =>{
    const [user,setUser] = useState();
    useEffect(()=>{
        //capturar datos de la BD
        const newUser = 
        setUser(newUser);
    });
    return(
        <Box style={fondo.degradado}>
            <Box>
                <Box alignSelf={"center"}>
                    <Image size={"xl"} resizeMode={"contain"} source={logo} alt="logo"/>
                </Box>
                <Box m={5}>
                    <Text 
                        fontWeight={"bold"} 
                        fontSize={"md"} 
                        color={"white"}
                        fontFamily={'fuenteAncha'}
                        textAlign={"center"}
                    >{"Bienvenido"}</Text>
                    <Text 
                        fontWeight={"bold"} 
                        fontSize={"3xl"} 
                        color={"white"}
                        fontFamily={'fuenteAncha'}
                        textAlign={"center"}
                    >{user.nombre}</Text>
                    <Text 
                        fontWeight={"bold"}
                        fontSize={"xl"} 
                        color={"white"}
                        fontFamily={'fuenteRegular'}
                        textAlign={"center"}
                    >{user.correo}</Text>
                </Box>
                <Box mt={10} mb={5} m={5}>
                    <Boton fontSize="md" dir="izq" tipo="normal" title="Crear reporte" />
                </Box>
                <Box mt={5} m={5}>
                    <Boton fontSize="md" dir="izq" tipo="normal" title="Ver reportes" />
                </Box>
            </Box>
            <Box mt={20}>
                <Boton fontSize="md" tipo="cuidado" title="Configuración" />
            </Box>
        </Box>
    )
}

export default MainMenu