import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from '../screens/HomeScreen'
import PostScreen from '../screens/PostScreen'
import NotificationScreen from '../screens/NotificationScreen'
import { Ionicons  } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#101010",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}

/*
const AppStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Post" component={PostScreen}/>
        <Stack.Screen name="Notification" component={NotificationScreen}/>

      </Stack.Navigator>
    );
  }
  */

export { AuthStackNavigator};