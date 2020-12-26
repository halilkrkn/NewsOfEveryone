import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCards = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image style={styles.image} source = {{uri: item.urlToImage}} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default NewsCards;

const styles = StyleSheet.create({
  cardView:{
    backgroundColor: 'orange',
    margin:width*0.03,
    borderRadius: width *0.05,
    shadowColor:'#000',
    shadowOffset:{width:0.5, height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3
  },

  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal:width *0.02,
    color: "gray",
    fontSize: 16,
  },
  image: {
    height: height / 4,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});
