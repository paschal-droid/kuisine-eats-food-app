import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext';
import { getFontFamily, scaling } from '../../themes/themes';

const {horizontalScale, verticalScale, fontScale} = scaling

const OrderTab = (props) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null)
    const paddingY = 20
    const {theme} = useTheme()
    const tabWidth = {width: horizontalScale(paddingY* 2 + width)}
    const buttonWidth = (e) => {
        setWidth(e.nativeEvent.lines[0].width)
    }


  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.orderAction, tabWidth, {borderColor: theme.accentColor}]}>
        <Text ref={textRef} onTextLayout={(e) => buttonWidth(e)} style={[styles.orderActionText, {color: theme.accentColor}]}>{props.name}</Text>
    </TouchableOpacity>
  )
}

OrderTab.propTypes = {
    name: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func,
}

export default OrderTab

const styles = StyleSheet.create({
  orderAction: {
    borderRadius: horizontalScale(10),
    height: horizontalScale(50),
    justifyContent: 'center',
    maxWidth: '50%',
    borderWidth: 1,
    alignItems: 'center'
  },
  orderActionText: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(16),
    lineHeight: fontScale(24),
    letterSpacing: -0.16,
  },
});