import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Economia from "../pages/Economia";

const Stack =createNativeStackNavigator()

//foi feito um routes para a organização dos arquivos
export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Economia'
            component={Economia}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}