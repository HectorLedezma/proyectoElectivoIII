import { Box, Button, Column, Row, Stack, Text } from "native-base";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function Boton(props){
    
    const tipo ={//valores de la propiedad tipo
        'normal':'#008d0f',//verde
        'alternativo':'#0050DD',//azul
        'pare':'#ff0000',//rojo
        'cuidado':'#ffd800'//amarillo
    }

    const tipoText ={//valores de la propiedad tipo
        'normal':'#ffffff',//verde
        'alternativo':'#ffffff',//azul
        'pare':'#ffffff',//rojo
        'cuidado':'#000000'//amarillo
    }

    const direccion ={//valores de la propiedad dir
        'izq':[//flecha hacia la izquierda
                <Column key={"text"} p={1}>
                    <Text color={tipoText[props.tipo]} fontFamily={'fuenteRegular'} fontSize={props.fontSize}>
                        {props.title}{/* Propiedad texto: define el texto del botón */}
                    </Text>
                </Column>,
                <Column key={"icon"} p={1}><FaArrowRight color={tipoText[props.tipo]} size={"17"}/></Column>
            ],
        'der':[//flecha hacia la derecha
            <Column key={"icon"}><FaArrowLeft color={tipoText[props.tipo]} size={"17"}/></Column>,
            <Column key={"text"} p={1}>
                <Text color={tipoText[props.tipo]} fontFamily={'fuenteRegular'} fontSize={props.fontSize}>
                    {props.title}{/* Propiedad texto: define el texto del botón */}
                </Text>
            </Column>
        ],
        undefined:[//sin flecha
            <Column key={"text"} p={1}>
                <Text color={tipoText[props.tipo]} fontFamily={'fuenteRegular'} fontSize={props.fontSize}>
                    {props.title}{/* Propiedad texto: define el texto del botón */}
                </Text>
            </Column>
        ]
    }

    return(
        <Stack >
            <Box w={props.w === undefined? "100%": props.w} display={"flex"} alignSelf={"center"} >
            {/**   propiedad  on press debe ser una funcion que ejecutara el boton al ser presionado*/}
            <Button p={props.w === undefined? 0 : props.w} onPress={props.onPress} bg={tipo[props.tipo]} borderRadius={"md"} borderColor={tipoText[props.tipo]} borderWidth={3}>
                <Row display={"flex"} alignItems={"center"}>
                    {direccion[props.dir]}{/* propiedad dir: define el orden entre el icono y el texto*/}
                </Row>
            </Button>
            </Box>
        </Stack>
    )
}

export default Boton