import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const NewsCards = () => {
    return (
        <View>
            <Text style ={styles.title}>Araştırma: Aşırı işlenmiş gıdalar biyolojik yaşlanmayı hızlandırıyor - Euronews</Text>
           <Text style={styles.author}>Hürriyet</Text> 
           <Image style={styles.image}/>
           <Text style={styles.description}>İspanya'da, 55 yaş üzerindeki 886 İspanyol üzerinde yürütülen bir araştırma hazır yemekler, kurabiyeler, gazlı içecekler, hamburgerler gibi aşırı işlenmiş endüstriyel gıdaların biyolojik yaşlanmayı körüklediğini ortaya koydu.</Text>
        </View>
    )
}

export default NewsCards

const styles = StyleSheet.create({
    
title:{

    width:width,
    margin:width*0.10,
    color:'black',
    fontSize:20,
    fontWeight:'bold'

},
description:{
    width:width,
    margin:width*0.10,
    color:'gray',
    fontSize:18
},
image:{
    width:width,
    height:height/4,
    marginLeft:width *0.1,
    marginRight:width * 0.1,
    
},
author:{
    marginVertical: height *0.05,
    marginHorizontal: width *0.05,
    fontSize:15,
    color:'gray'
}
})
