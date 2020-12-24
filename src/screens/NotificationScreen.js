import React, { Component, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, LayoutAnimation, SafeAreaView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import  firebase from 'firebase'
import Notifications from "expo-notifications"
import Permissions from "expo-permissions"

export default class NotificationScreen extends Component {


  registerForPushNotifications = async () =>{
    //Get the current users id So you can post the token to the user in your database
    const  currentUser = firebase.auth().currentUser.uid
    const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
    }
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
    return;
    }
    // Get the token that uniquely identifies this device
    try{
    let token = await Notifications.getExpoPushTokenAsync();
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    var updates = {}
    updates['/expoToken'] = token
      await firebase
      .firestore()
      .collection("users")
      .doc(currentUser)
      .update(updates)
    
  
  }
    catch(error){
    console.log(error)
    }
    }

  
    render() { 

        return (
            <View style = {styles.container}>
                <Text> Hi {} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {

        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})


