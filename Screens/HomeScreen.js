import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, ActivityIndicator, Button } from 'react-native'
import ImageComponent from '../components/ImageComponent'

const API_KEY = '0134c774fe50600797918821f3c731f3'
const HomeScreen = ({route}) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState(route.params.searchItem)
    const [currentPage, setCurrentPage] = useState(1);
    const[isLoading, setIsLoading] = useState(false);
    const NumberOfGrid=route.params?.Grid
    const NumberOfKey = route.params?.key

    useEffect(()=> {
        imageSearch()
    },[search, currentPage])

    const imageSearch = () => {
        if(!search){
            setSearch(search);
        }
        setIsLoading(true)
        const fetchURL = `https://api.flickr.com/services/rest/? 
        method=flickr.photos.search&api_key=${API_KEY}&format=json&text=${search === ''?'cat': search}
        &nojsoncallback=true&page=${currentPage}&per_page=10&extras=url_s`
        fetch(fetchURL)
        .then((response) => response.json())
        .then((responseJson) => {
            const imageData = responseJson.photos.photo.map((image)=>{
                
                const path = 
                'https://farm' +
                  image.farm +
                  '.staticflickr.com/' +
                  image.server +
                  '/' +
                  image.id +
                  '_' +
                  image.secret +
                  '.jpg';
                  return path
            }) 
            setData([...data,...imageData])  
            setIsLoading(false);  
            
            
        }).catch((error) => {
            alert('oops, something went wrong', error);
        })
    }
    const renderLoader = () => {
        return (
            isLoading ?
            <View style = {styles.loaderStyle}>
                <ActivityIndicator size= 'large' color = '#aaa'/>
            </View> : null
        )
    }
    const loadMoreItems = () => {
        setCurrentPage(currentPage + 1)}
    return (
        <View>
        <FlatList 
            numColumns={NumberOfGrid }
            key={NumberOfKey}
            data = {data}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
                return (
                    <ImageComponent image = {item}/>
                )
            }}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItems} 
            onEndReachedThreshold={40}
        />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    input: {
        height: 100,
marginLeft: 10,
marginRight: 10,
fontSize: 20,
marginTop: 10
    },
    loaderStyle: {
        bottom: 100,
        alignItems: 'center'
    },

})
