import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewsCard from '../components/NewsCards'

const PostScreen = () => {
  return (
   
     <NewsCard/>
     
  
  )
}

export default PostScreen

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})
