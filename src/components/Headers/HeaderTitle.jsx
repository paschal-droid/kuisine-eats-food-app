import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useSelector } from 'react-redux'
import { getFontFamily, scaling } from '../../themes/themes'

const {horizontalScale, verticalScale, fontScale} = scaling

const HeaderTitle = () => {
    const {theme} = useTheme()
    const {username} = useSelector(state => state.user)
  return (
    <View>
      <Text style={[styles.headerText, {color: theme.headerColor}]}>Hello <Text style={{color: theme.accentColor}}>{username}</Text>, What food combo do you want to order today?</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
    headerText: {
      fontFamily: getFontFamily('Brandon', '700'),
      fontSize: fontScale(20),
      width: '80%',
      letterSpacing: -0.2,
      marginTop: verticalScale(40)
    },
})