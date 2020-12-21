import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoadingScreen from './src/screens/LoadingScreen'
import LogInScreen from './src/screens/LogInScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'

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

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  LogIn: LogInScreen,
  Register:RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack

    },
    {
        initialRouteName: "Loading"
    }
  )
)