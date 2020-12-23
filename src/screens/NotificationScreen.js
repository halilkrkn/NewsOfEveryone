import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'

export default ({navigation}) => {
    
    
        return (
          <View style={styles.container}>
            <SafeAreaView>
              <Button
                title="Toggle Drawer"
                onPress={() => navigation.toggleDrawer()}
              />
            </SafeAreaView>
          </View>
        );
        
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    
})
