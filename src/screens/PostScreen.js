
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default class PostScreen extends React.Component {
    
    render() {
        return (
        <View style = {styles.container}>
        <SafeAreaView onPress={() => this.props.navigation.toggleDrawer()}/>   
        <Text> Post Screen</Text>
        </View>
    )
    }       
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
