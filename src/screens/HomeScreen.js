import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, LayoutAnimation, SafeAreaView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Header,Left,Right,Icon } from "native-base";
import {  } from "native-base";
import  firebase from 'firebase'

export default class LogInScreen extends Component {

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

                <Text> Hi {this.state.email} </Text>

                <TouchableOpacity style ={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
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
