import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeIntro from './screens/WelcomeIntro'
import WelcomeAuth from './screens/WelcomeAuth'
import { Routes } from '../../navigation/Routes'

const Stack = createNativeStackNavigator()

const Welcome = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name={Routes.Intro1} component={WelcomeIntro} />
      <Stack.Screen name={Routes.Intro2} component={WelcomeAuth} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

const options = {
  header: ()=> null,
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  animation: 'slide_from_right',
}

export default Welcome
