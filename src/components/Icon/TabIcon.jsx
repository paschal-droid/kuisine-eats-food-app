import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

import { color, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'

const {fontScale, horizontalScale, verticalScale} = scaling



const TabIcon = (props) => {
    const colorScheme = useColorScheme() === 'dark'
    const {theme} = useTheme()
  return (
    <View style={[ props.isFocused && styles.tabisFocused, props.isFocused && {backgroundColor: colorScheme ? color.whiteRGBA90 : color.blackRGBA50}]}>
      <Icon color={props.isFocused ? theme.backgroundColor : theme.textColor} name={props.name} size={fontScale(props.size)}  />
    </View>
  )
}

TabIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    isFocused: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    tabisFocused: {
        paddingHorizontal: horizontalScale(18),
        paddingVertical: horizontalScale(4),
        borderRadius: 1000
    }
})

export default TabIcon
