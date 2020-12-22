import React, {Component} from 'react';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";


import LoadingScreen from './src/screens/LoadingScreen'
import LogInScreen from './src/screens/LogInScreen'
import RegisterScreen from './src/screens/RegisterScreen'

import HomeScreen from './src/screens/HomeScreen'
import MessageScreen from './src/screens/MessageScreen'
import PostScreen from './src/screens/PostScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import NotificationScreen from './src/screens/NotificationScreen'

import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyBxjhEaFulg5oKLwR7Wldf3kDvPw8Rolao",
  authDomain: "newsofeveryone-b4734.firebaseapp.com",
  projectId: "newsofeveryone-b4734",
  storageBucket: "newsofeveryone-b4734.appspot.com",
  messagingSenderId: "460211517105",
  appId: "1:460211517105:web:4ca167beb393ad59435490"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons name="home" size={24} color={tintColor} />
        
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons name="chatbox-ellipses" size={24} color={tintColor} />
        
      },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons 
          name="add-circle" 
          size={48}
          color="#E9446A" 
          style={{
            shadowColor:"#E9446A" ,
            shadowOffset:{width:0, height:0},
            shadowRadius:10,
            shadowOpacity:0.3
          }}
           />
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons name="notifications" size={24} color={tintColor} />
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons name="person" size={24} color={tintColor} />
        
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: false,
    },
  }
);

const AuthStack = createStackNavigator({
  LogIn: LogInScreen,
  Register:RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack

    },
    {
        initialRouteName: "Loading"
    }
  )
)