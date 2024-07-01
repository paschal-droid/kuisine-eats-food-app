import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { color, getFontFamily, scaling } from '../../themes/themes'

const {fontScale, horizontalScale, verticalScale} = scaling

const NavigateBackTab = (props) => {
  return (
    <Pressable style={[styles.navigateBack]} onPress={props.navigateBack}>
    <Icon
      name={'arrow-left'}
      color={color.black}
      size={fontScale(20)}
    />
    <Text style={[styles.navigateBackText]}>Go Back</Text>
  </Pressable>
  )
}

NavigateBackTab.propTypes = {
    navigateBack: PropTypes.func
  }
  

export default NavigateBackTab

const styles = StyleSheet.create({
    navigateBack: {
        flexDirection: 'row',
        // gap: 2,
        backgroundColor: color.white,
        width: horizontalScale(75),
        height: horizontalScale(30),
        borderRadius: horizontalScale(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigateBackText: {
        color: color.black,
        textTransform: 'capitalize',
        fontSize: fontScale(16),
        fontFamily: getFontFamily('Brandon', '500')
    }
})