import { Box, Button, Column, Row, Stack, Text } from "native-base";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function Boton(props){
    
    const tipo ={//valores de la propiedad tipo
        'normal':'#008d0f',//verde
        'pare':'#ff0000',//rojo
        'cuidado':'#ffd800'//amarillo
    }

    const direccion ={//valores de la propiedad dir
        'izq':[//flecha hacia la izquierda
                <Column key={"text"}>
                    <Text color={"white"} fontFamily={'fuenteRegular'} fontSize={"2xl"}>
                        {props.texto}{/* Propiedad texto: define el texto del botón */}
                    </Text>
                </Column>,
                <Column key={"icon"} p={2}><FaArrowRight color={"white"} size={"17"}/></Column>
            ],
        'der':[//flecha hacia la derecha
            <Column key={"icon"} p={2}><FaArrowLeft color={"white"} size={"17"}/></Column>,
            <Column key={"text"}>
                <Text color={"white"} fontFamily={'fuenteRegular'} fontSize={"2xl"}>
                    {props.texto}{/* Propiedad texto: define el texto del botón */}
                </Text>
            </Column>
        ]
    }

    return(
        <Stack >
            <Box w={"75%"} display={"flex"} alignSelf={"center"}>
            <Button onPress={() => {
                props.navi.navigate(props.to);//Propiedad to: define a que pagina redirigirá el botón
            // Propiedad tipo: define el color del botón
            }} bg={tipo[props.tipo]} borderRadius={"md"} borderColor={"white"} borderWidth={3}>
                <Row display={"flex"}>
                    {direccion[props.dir]}{/* propiedad dir: define el orden entre el icono y el texto*/}
                </Row>
            </Button>
            </Box>
        </Stack>
    )
}

export default Boton