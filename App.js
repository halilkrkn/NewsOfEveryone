import React,{Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppDrawerScreen} from "./src/navigation/Navigations";
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


 const App = () => {
  return (
    <NavigationContainer>
      <AppDrawerScreen/>
    </NavigationContainer>
  );
}
export default App


