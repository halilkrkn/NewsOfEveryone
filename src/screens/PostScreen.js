import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import NewsCard from '../components/NewsCards'
import newsApi from '../api/News'

const PostScreen = ({navigation}) => {


    const [news, setNews] = useState([]);

    useEffect(() => {
      getNewsFromAPI()
    },[])

  function getNewsFromAPI() {
    newsApi.get('top-headlines?country=tr&category=science&apiKey=bbc189fcd1ab4a78ae8e75256349d7aa')
    .then(async function (response) {
      setNews(response.data)
            
    })
    .catch(function (error) {
      console.log(error)
      
    })
  }

  if (!news) {
      return null
  }
  


  return (   
    <View style={styles.container}>
     <FlatList
      data = {news.articles}
      keyExtractor = {(item , index) => 'key' + index}
      renderItem = {({item}) => {

        return(<NewsCard item = {item}/>)

      }}/>

    </View>
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
