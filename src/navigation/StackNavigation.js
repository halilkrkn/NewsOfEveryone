import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator();


const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} headerMode= "none">
      <Stack.Screen name="LogIn" component={LogInScreen}/> 
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
}

/*
const AppStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    );
  }
  */

export { AuthStackNavigator };