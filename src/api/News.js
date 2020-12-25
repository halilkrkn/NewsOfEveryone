import axios from 'axios'

export default axios.create({
    baseURL:'http://newsapi.org/v2/'
})
//http://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=bbc189fcd1ab4a78ae8e75256349d7aa