import React from 'react'
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
// import CustomFastImage from '../components/CustomFastImage';
const {width} = Dimensions.get('window')
const ImageComponent = (props) => {
    const grid = props.grid
    let widthImage = '100%';
    let heightImage = width ;
    if(grid===2){
        widthImage="48%"
        heightImage=width/2
    }
    if (grid === 3) {
      widthImage = '31%';
      heightImage = width / 3;
    }
    if (grid === 4) {
      widthImage = '23%';
      heightImage = width / 4;
    }
    return (
        <View>
            <Image style = {styles.img} source={{uri: props.image}}/>
        </View>
    )
}

export default ImageComponent

const styles = StyleSheet.create({
    img:{
        width:200,
        height:200
    },
})
