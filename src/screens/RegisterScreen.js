import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import {Ionicons} from '@expo/vector-icons'
import  firebase from 'firebase'
export default class RegisterScreen extends Component {

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: null
    }


    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials =>{
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(error => this.setState({errorMessage: error.message}))
    }


    render() { 
        return (
          <ScrollView style={styles.container}>
            <View>
            <TouchableOpacity style ={styles.back} onPress={()=> this.props.navigation.goBack()}>
                <Ionicons name = "arrow-back" size={32} color="#FFF"/>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 60,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={require("../../assets/logo.png")} />
                <Text
                  style={[
                    styles.text,
                    { marginTop: 10, fontSize: 22, fontWeight: "500" },
                  ]}
                >
                  News of Everyone
                </Text>
              </View>

              <View style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </View>

              <View style={styles.from}>
                <View>
                  <Text style={styles.inputTitle}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                  ></TextInput>
                </View>
                <View style={{ marginTop: 32}}>
                  <Text style={styles.inputTitle}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                  ></TextInput>
                </View>

                <View style={{ marginTop: 32}}>
                  <Text style={styles.inputTitle}>Password</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                  ></TextInput>
                </View>
              </View>

              <TouchableOpacity style={styles.submitContainer} onPress={this.handleSignUp}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#FFF",
                      fontWeight: "600",
                      fontSize: 16,
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("LogIn")}
              >
                <Text style={{ color: "#414959", fontSize: 13 }}>
                  New to News Of Everyone?{" "}
                  <Text style={styles.link}> Log In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    text: {
       
        color: "#1D2029"
    },

    errorMessage: {

        height:25,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form: {
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle: {
        paddingVertical: 14,
        color: "#ABB4BD",
        fontSize: 14,
        textTransform:"uppercase"
    },
    input: {
        
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: "#1D2029",
        fontSize: 14,
       
    },
 
    error:{
        color: "#FF1654",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"

    },


    socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    link: {
        color: "#FF1654",
        fontSize: 15,
        fontWeight: "500",
        fontStyle:"italic"
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
    back: {
      position:"absolute",
      top:48,
      left:32,
      width:32,
      height:32,
      borderRadius:16,
      alignItems:'center',
      justifyContent:'center'
    }
});
