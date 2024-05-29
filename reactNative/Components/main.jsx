import React from "react";
import { Box, FormControl, Image, Input, Stack, Text} from "native-base";
import { FaSmile } from "react-icons/fa";
//import logo from "../images/"

const MainPage = () => {
    return(

      <Box flex={1} bg={{
        linearGradient: {
          colors: ['#c0c0c0', '#181818'],
          start: [0, 0],
          end: [1, 0]
        }
      }}
        alignItems="center" justifyContent="center" padding={"6"}>
        {/*<Image source={logo} alt="logo" size={"x1"}/>*/}
        <Text fontWeight={"bold"} fontSize={"6xl"} color={"white"}>BacheApp</Text>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input variant="underlined" p={2} placeholder="Username" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" variant="underlined" p={2} placeholder="Password" />
            </Stack>
          </Stack>
        </FormControl>
      </Box>
    )
}

export default MainPage