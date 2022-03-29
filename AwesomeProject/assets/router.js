import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 

import Login from '../screens/login'
import Principal from '../screens/principal'
import Detalhes from '../screens/detalhes'

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name= "Principal"
                    component={Principal}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Detalhes"
                    component={Detalhes}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;