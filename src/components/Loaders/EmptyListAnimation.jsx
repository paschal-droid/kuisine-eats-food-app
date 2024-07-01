import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

import animation from '../../lottie/empty.json'
import animation2 from '../../lottie/loading.json'
import { color, scaling, getFontFamily } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'

const {horizontalScale, verticalScale, fontScale} = scaling;



const EmptyListAnimation = ({title}) => {
  const {theme} = useTheme()
  const appTheme = useColorScheme() === 'dark'
  return (
    <View style={[styles.emptyListContainer]}>
      <LottieView speed={appTheme ? 0.6 : 1} autoPlay style={[styles.lottieStyles, {width: appTheme ? horizontalScale(250) : horizontalScale(300)}]} source={appTheme? animation2 : animation} />
      <Text style={[styles.lottieText, {color: theme.headerColor}]}>{title}</Text>
    </View>
  )
}

export default EmptyListAnimation

const styles = StyleSheet.create({
  emptyListContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 50,
  },
  lottieStyles: {
    height: horizontalScale(300),
  },
  lottieText: {
    fontFamily: getFontFamily('Brandon', '900'),
    fontSize: fontScale(30),
    textAlign: 'center',
  },
});