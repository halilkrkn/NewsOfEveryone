import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, LayoutAnimation} from 'react-native'
import { TextInput } from "react-native-gesture-handler";

import  firebase from 'firebase'
export default class LogInScreen extends Component {

    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email,password} = this.state

        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error => this.setState({errorMessage: error.message}))
    }

    render() { 
         LayoutAnimation.easeInEaseOut()
        return (
          <ScrollView style={styles.container}>
            <View>
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
              <View
                style={{
                  marginTop: 48,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity>
                  <View style={styles.socialButton}>
                    <Image
                      source={require("../../assets/facebook.png")}
                      style={styles.socialLogo}
                    />
                    <Text style={styles.text}>Facebook</Text>
                  </View>
                </TouchableOpacity>
                <View>
                <Text
                  style={[
                    styles.text,
                    {
                      color: "#ABB4BD",
                      fontSize: 15,
                      textAlign: "center",
                      marginVertical: 10,
                    },
                  ]}
                >
                  or
                </Text>
                </View>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={require("../../assets/google.png")}
                    style={styles.socialLogo}
                  />
                  <Text style={styles.text}>Google</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </View>

              <View style={styles.from}>
                <View>
                  <Text style={styles.inputTitle}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                  ></TextInput>
                </View>

                <View style={{ marginTop: 16, marginBottom: 16 }}>
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

              <Text style={[styles.link, { textAlign: "right" }]}>
                Forgot Password?
              </Text>

              <TouchableOpacity style={styles.submitContainer} onPress={this.handleLogin}>
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
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                <Text style={{ color: "#414959", fontSize: 13 }}>
                  Don't have an account?{" "}
                  <Text style={styles.link}> Register Now</Text>
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

        height:72,
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

});
