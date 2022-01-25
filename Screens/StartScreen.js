import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartScreen = ({navigation, route}) => {
    const [text, setText] = useState('')
    return (
        <View>
            <TextInput 
                value = {text}
                style = {styles.input}
                placeholder='Search Images'
                onChangeText={(text) => setText(text)}
            />
            <Button title = 'Search'
            onPress={()=> navigation.navigate('home',{
                searchItem: text
            })}
            />
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    input: {
        height: 100,
marginLeft: 10,
marginRight: 10,
fontSize: 20,
marginTop: 10
    },
})
