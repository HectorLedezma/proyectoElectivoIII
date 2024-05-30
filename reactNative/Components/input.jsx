import { Box, Column, Input, Row, Stack } from "native-base"


function Entrada(props){
    return(
    <Stack>
        <Box borderRadius={"md"} display={"flex"} alignSelf={"center"} shadow={2} bg={"white"} width={"75%"}>
        <Row display={"flex"}>
            <Column w={"8%"} p={2}>{props.icon}</Column>
            <Column w={"92%"}><Input variant="unstyled" w="100%" borderStyle={"none"} type={props.type} fontFamily={'fuenteRegular'} p={2} placeholder={props.placeholder} />  </Column>
        </Row>
        </Box>
    </Stack>)
}


export default Entrada;