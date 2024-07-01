import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { color, getFontFamily, scaling } from '../../themes/themes'

const {fontScale, horizontalScale, verticalScale} = scaling

const ActionTab = (props) => {
    const { theme } = useTheme()
    return (
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.accentColor }]} onPress={props.onPress}>
            <Text style={[styles.actionButtonText]}>{props.actionText}</Text>
        </TouchableOpacity>
    )
}

ActionTab.propTypes = {
    onPress: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired
}

ActionTab.props = {
    onPress: () => {}
}

const styles = StyleSheet.create({
  actionButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    height: horizontalScale(55),
  },
  actionButtonText: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    color: color.white,
  },
});

export default ActionTab
