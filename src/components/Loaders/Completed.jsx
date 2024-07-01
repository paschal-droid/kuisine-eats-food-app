import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { color } from '../../themes/themes';

import animation from '../../lottie/order-complete.json'
import { useTheme } from '../../context/ThemeContext';

const Completed = (props) => {
  const {theme} = useTheme()
  return (
    <View style={[styles.lottieAnimationContainer]}>
      <LottieView speed={0.5} autoPlay style={styles.lottieStyles} source={animation} />
    </View>
  )
}


export default Completed

const styles = StyleSheet.create({
  lottieAnimationContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: color.blackRGBA50,
    zIndex: 1000,
  },
  lottieStyles: {
    flex: 1,
  },
})