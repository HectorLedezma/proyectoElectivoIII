import { Box, Column, Input, Row, Stack } from "native-base"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Entrada(props){

    const [eye,setEye] = useState(true)
    const show = (eye) =>{
        if(props.type === "password"){
            return eye?"password":"text";
        }else{
            return "text";
        }
    }
    const [text,setText] = useState(show(eye))

    

    const tipo = {
        'password':<Column role="button" onTouchEnd={() =>{
            setEye(!eye);
            setText(show(!eye))
        } 
        } w={"8%"} p={2}>{eye?(<FaEye />):(<FaEyeSlash />)}</Column>,
        'text':<></>
    }

    const col = {
        'password':'82%',
        'text':'92%'
    }

    return(
    <Stack>
        <Box borderRadius={"md"} display={"flex"} alignSelf={"center"} shadow={2} bg={"white"} width={"75%"}>
        <Row display={"flex"}>
            <Column w={"8%"} p={2}>{props.icon}</Column>
            <Column w={col[props.type]}><Input variant="unstyled" w="100%" borderStyle={"none"} type={text} fontFamily={'fuenteRegular'} p={2} placeholder={props.placeholder} />  </Column>
            {tipo[props.type]}
        </Row>
        </Box>
    </Stack>)
}


export default Entrada;