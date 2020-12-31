import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, LayoutAnimation, SafeAreaView, Button} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import {  } from "native-base";
import  firebase from 'firebase'

export default class LogOutScreen extends Component {

    state = {
        email: "",
        displayName:""
    }

    componentDidMount() {
        const{email, displayName} = firebase.auth().currentUser

        this.setState({email,displayName})
    }

    signOutUser = () => {
        firebase.auth().signOut().then(() => this.props.navigation.navigate('LogIn'))
    }

    render() { 
         LayoutAnimation.easeInEaseOut()
        return (
            <View style = {styles.container}>
                 <SafeAreaView onPress={() => this.props.navigation.toggleDrawer()}/>   
                <Text style={styles.goodBye}> Good Bye </Text>
                <Text style={styles.goodBye}>{this.state.email} </Text>
                <Button style={styles.submitContainer} title="Log Out" onPress={this.signOutUser}>
              </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {

        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    submitContainer: {
        backgroundColor: "#FF1654",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    goodBye: {
        marginBottom:12,
        fontStyle:'italic',
        fontSize:26,
        
    }
})
