import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { color, getFontFamily, scaling } from '../../themes/themes'

const { fontScale } = scaling

const TabTitle = (props) => {
    const {theme} = useTheme()
  return (  
      <Text style={[styles.tabTitle, {color: props.isFocused ? theme.accentColor : color.white}, !props.isFocused && styles.tabTitleNotFocused]}>{props.tabText}</Text>
  )
}

TabTitle.propTypes = {
    tabText: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    tabTitle: {
        fontFamily: getFontFamily('Brandon', '900'),
        fontSize: fontScale(14),
        textAlign: 'center',
    },
    tabTitleNotFocused: {
        fontFamily: getFontFamily('Brandon', '100'),
        fontSize: fontScale(14),
        textAlign: 'center'
    }
})

export default TabTitle
