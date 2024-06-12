import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Login from "../pages/login";
import Test from '../pages/testview';
import Register from '../pages/register';
import { Box } from 'native-base';

function Navi(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Test" options={{ headerShown: false }}  component={Test} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navi;