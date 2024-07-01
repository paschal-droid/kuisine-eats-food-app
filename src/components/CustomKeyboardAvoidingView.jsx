import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomKeyboardAvoidingView = ({children}) => {
    const ios = Platform.OS === 'ios'
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={400} behavior={ios ? 'padding': undefined} style={{flex: 1}}>
        <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CustomKeyboardAvoidingView
