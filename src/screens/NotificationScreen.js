import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class NotificationScreen extends React.Component {
    
    render() {
        return (
        <View style = {styles.container}>
            <Text> Notifiacation Screen</Text>
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
