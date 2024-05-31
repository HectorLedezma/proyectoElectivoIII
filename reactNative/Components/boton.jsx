import { Box, Button, Column, Row, Stack, Text } from "native-base";
import { Children } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function Boton(props, {children}){
    const tipo ={
        'normal':'#008d0f',//verde
        'pare':'#ff0000',//rojo
        'cuidado':'#ffd800'//amarillo
    }

    const direccion ={
        'izq':[
                <Column><Text color={"white"} fontFamily={'fuenteRegular'} fontSize={"2xl"}>{props.texto}</Text></Column>,
                <Column p={2}><FaArrowRight color={"white"} size={"17"}/></Column>
            ],
        'der':[
            <Column p={2}><FaArrowLeft color={"white"} size={"17"}/></Column>,
            <Column><Text color={"white"} fontFamily={'fuenteRegular'} fontSize={"2xl"}>{props.texto}</Text></Column>
        ]
    }

    return(
        <Stack >
            <Box w={"75%"} display={"flex"} alignSelf={"center"}>
            <Button bg={tipo[props.tipo]} borderRadius={"md"} borderColor={"white"} borderWidth={3}>
                <Row display={"flex"}>
                    {direccion[props.dir]}
                </Row>
            </Button>
            </Box>
        </Stack>
    )
}

export default Boton