import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../Screens/StartScreen';
import HomeScreen from '../Screens/HomeScreen';
import Grid from '../components/Grid';

const Stack = createNativeStackNavigator();

const NavigationHere = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="startScreen" 
        component={StartScreen} 
        options = {({navigation}) => ({
            headerTitle: "Images Bazaar",
            })}
        />
        <Stack.Screen 
        name="home" 
        component={HomeScreen} 
        options = {({navigation, route}) => ({
          headerTitle: 'Images of ' + route.params.searchItem,
          headerRight: ()=> (
            <Grid />
          )
        })}
      />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default NavigationHere

const styles = StyleSheet.create({

})
