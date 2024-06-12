import { Box, Text } from "native-base";


function Test(){
    return(
        <Box
            ClassName="TestBox"
            flex={1} 
            bg={{
            linearGradient: {
                //        gris oscuro,  gris claro
                colors: [  '#181818'  , '#c0c0c0'  ],
                start: [1, 0],
                end: [1, 1]
            }
            }}
            alignItems="center" justifyContent="center" padding={"6"}
        >
            <Text>HOLA TONOTOS</Text>
        </Box>
    )
}

export default Test