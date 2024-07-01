import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

import heroImage from '../../../assets/images/kuisine_hero_image.png'
import { color, getFontFamily, scaling } from '../../../themes/themes'
import { Routes } from '../../../navigation/Routes'
import FastImage from 'react-native-fast-image'
import { ActionTab } from '../../../components'

const {horizontalScale, verticalScale, fontScale} = scaling

const WelcomeIntro = ({navigation}) => {
  const {theme} = useTheme()
  return (
    <SafeAreaView style={[{backgroundColor: theme.backgroundColor}, styles.intro]}>
      <StatusBar backgroundColor={theme.accentColor} barStyle={theme.statusBarTextColor} />
      <View style={[styles.introBackground, {backgroundColor: theme.accentColor}]}>
        <FastImage priority={FastImage.priority.high} style={[styles.introBackgroundImage]} source={heroImage} />
      </View>
      <View style={styles.introContentContainer}>
        <View style={styles.introContentTextContainer}>
          <Text style={[styles.introContentTextContainerHeader, {color: theme.headerColor}]}>Its not Just Food, Its an Experience!</Text>
          <Text style={[styles.introContentTextContainerMain, {color: theme.textColor}]}>Experience the delight mouthwatering menus and satisfying your cravings with every bite. 🍔😋🍕</Text>
        </View>
        <View>
          <ActionTab actionText="Let's Continue" onPress={() => navigation.navigate(Routes.Intro2)} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeIntro

const styles = StyleSheet.create({
  intro: {
    // gap: 50,
    flex: 1
  },
  introBackground: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  introBackgroundImage: {
    width: horizontalScale(350),
    height: horizontalScale(350),
    marginLeft: horizontalScale(20)
  },
  introContentContainer: {
    paddingHorizontal: horizontalScale(25),
    flex: 1,
    marginTop: verticalScale(40),
    gap: 80
  },
  introContentTextContainer: {
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  introContentTextContainerHeader: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    letterSpacing: -0.2,
    textTransform: 'capitalize'
  },
  introContentTextContainerMain: {
    fontFamily: getFontFamily('Brandon', '400'),
    fontSize: fontScale(16),
    lineHeight: fontScale(20)
  },
  actionButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    height: horizontalScale(55)
  },
  actionButtonText: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    color: color.white
  }
})