import { Box, Button, Column, Row, Stack, Text } from "native-base";
import { FaArrowRight } from "react-icons/fa";


function Boton(props){
    return(
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
    )
}

export default Boton