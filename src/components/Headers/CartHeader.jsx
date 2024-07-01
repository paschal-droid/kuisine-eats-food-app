import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BackButton } from '..'
import { scaling, getFontFamily, color } from '../../themes/themes'

const {fontScale, verticalScale, horizontalScale} = scaling

const CartHeader = ({headerText}) => {
    const {theme} = useTheme()
    const navigation = useNavigation()
    const ios = Platform.OS === 'ios'
    const {top} = useSafeAreaInsets()
  return (
    <View style={[styles.cartHeaderContainer, {paddingTop: ios ? top+20 : top+30, backgroundColor: theme.accentColor}]}>
      <StatusBar backgroundColor={theme.accentColor} barStyle={'light-content'} />
      <View style={[styles.cartHeader]}>
        <BackButton navigateBack={() => navigation.goBack()} />
        <View style={[styles.cartInfo]}>
            <Text style={[styles.cartInfoText]}>{headerText}</Text>
        </View>
        <View style={styles.third} />
      </View>
    </View>
  )
}

export default CartHeader

const styles = StyleSheet.create({
    cartHeaderContainer: {
        paddingHorizontal: horizontalScale(20),
        gap: 15,
        paddingBottom: horizontalScale(30),
        borderBottomLeftRadius: horizontalScale(10),
        borderBottomRightRadius: horizontalScale(10),
    },
    cartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartInfo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartInfoText: {
        fontSize: fontScale(24),
        fontFamily: getFontFamily('Brandon', '700'),
        color: color.white,
        lineHeight: fontScale(32),
        letterSpacing: -.24
    },
    third: {
        flex: 0.3
    }
})