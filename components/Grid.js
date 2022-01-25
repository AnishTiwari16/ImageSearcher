import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Grid = ({navigation}) => {
    const[grid, setGrid] = useState(2);
    const[key, setKey] = useState(2);

    const increaseCount = () => {
        if(grid <= 3){
            setGrid(grid+1)
            setKey(key+1)
        }
        else{
            setGrid(2)
            setKey(2)
        }
        navigation('Image', {
            Grid: grid,
            key:key
        })
    }
    return (
        <View>
            <TouchableOpacity onPress={increaseCount}>
             <Ionicons 
                name = 'md-grid'
                size = {23}
                color = 'white'
                />
                </TouchableOpacity>
        </View>
    )
}

export default Grid

const styles = StyleSheet.create({})
