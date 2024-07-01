import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActionTab, Carousel, Input, KeyboardView } from '../../../components'
import { useTheme } from '../../../context/ThemeContext'
import { getFontFamily, scaling } from '../../../themes/themes'
import { Routes } from '../../../navigation/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../../redux/reducers/User'
import { fetchFoodItems, generateImageUrlForFoodItems } from '../../../redux/reducers/Food'

const {horizontalScale, verticalScale, fontScale} = scaling

const WelcomeAuth = ({navigation}) => {
  const {theme} = useTheme()
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.food)
  const handleSignin = () => {
    if (userName.trim() === '' || userName.trim().length < 3) {
      return Alert.alert('Oops!!', 'Please Enter a Valid Name')
    }
    dispatch(signin({username: userName}))
    navigation.navigate(Routes.Tabs)
  }
  useEffect(() => {
    dispatch(fetchFoodItems())
  }, [])

  useEffect(() => {
    dispatch(generateImageUrlForFoodItems())
  }, [items.length])


  return (
    <KeyboardView>
      <ScrollView showsVerticalScrollIndicator={false} style={[{backgroundColor: theme.backgroundColor}, styles.intro]}>
        <Carousel />
        <View style={styles.introContentContainer}>
          <View style={styles.introContentTextContainer}>
            <Text style={[styles.introContentTextContainerHeader, { color: theme.headerColor }]}>Its not Just Food, Its an Experience!</Text>
            <Input isRow={true} search={userName} handleTextChange={(val) => setUserName(val)} placeholderText='Enter your Name here' isIcon={false} onClose={()=> {}} onSearch={() => {}} />
          </View>
          <View>
            <ActionTab onPress={handleSignin} actionText='Start Ordering' />
          </View>
        </View>
        </ScrollView>
    </KeyboardView>
  )
}

export default WelcomeAuth

const styles = StyleSheet.create({
  intro: {
    flex: 1
  },
  introContentContainer: {
    paddingHorizontal: horizontalScale(25),
    marginTop: verticalScale(40),
    gap: 50,
  },
  introContentTextContainer: {
    gap: 10,
    alignItems: 'center',
  },
  introContentTextContainerHeader: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    letterSpacing: -0.2,
    textTransform: 'capitalize'
  },
})