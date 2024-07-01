import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { color, getFontFamily, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'

const {fontScale, horizontalScale, verticalScale} = scaling


const Tab = (props) => {
    const {theme} = useTheme()
 
  return (
    <TouchableOpacity disabled={props.isDisabled} onPress={props.onPress} style={[styles.tabContainer]}>
      <View style={styles.tab} disabled={props.isDisabled}>
        <Text style={[styles.text, {color: theme.headerColor}, props.isInactive && styles.inactiveText]}>{props.name}</Text>
        {!props.isInactive && <View style={[styles.badge, {backgroundColor: theme.accentColor}]} />}
    </View>
    </TouchableOpacity>
  )
}

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}

Tab.props = {
    isDisabled: false,
    onPress: () => {},
    tabId: PropTypes.number.isRequired,
    isInactive: true
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  tabContainer: {
    paddingHorizontal: horizontalScale(12),
    marginTop: verticalScale(10),
    alignItems: 'center',
    // borderWidth: 1
  },
  text: {
    fontFamily: getFontFamily('Brandon', "500"),
    fontSize: fontScale(20),
    marginBottom: verticalScale(4),  
  },
  inactiveText: {
    fontFamily: getFontFamily('Brandon', "500"),
    fontSize: fontScale(18),
    letterSpacing: -0.16,
    color: '#938DB5'

  },
  badge: {
    height: verticalScale(3),
    width: horizontalScale(22),
  }

})

export default Tab