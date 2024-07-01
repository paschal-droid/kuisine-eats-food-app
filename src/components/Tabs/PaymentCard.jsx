import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { scaling, getFontFamily, color } from '../../themes/themes'


const {verticalScale, fontScale, horizontalScale} = scaling

const PaymentCard = (props) => {
  const {theme} = useTheme()
  return (
    <View style={styles.priceContainer}>
    {props.price && props.title ? 
      <View style={styles.price}>
      <Text style={[styles.priceTitle, {color: theme.textColor}]}>{props.title}</Text>
      <Text style={[styles.priceText, {color: props.isTheme ? theme.headerColor : color.white}]}>
        <Text style={{ color: theme.accentColor}}>$ </Text>
        {props.price}
      </Text>
    </View> : null  
  }
    <TouchableOpacity onPress={props.onAction} style={[styles.addToCart, props.styles, {backgroundColor: theme.accentColor}]}>
      <Text style={[styles.addToCartText]}>{props.actionText}</Text>
    </TouchableOpacity>
  </View>
  )
}

PaymentCard.propTypes = {
    title: PropTypes.string,
    actionText: PropTypes.string.isRequired,
    price: PropTypes.string,
    styles: PropTypes.object,
    onAction: PropTypes.func.isRequired,
    isTheme: PropTypes.bool.isRequired

}


const styles = StyleSheet.create({
  priceContainer: {
    marginTop: verticalScale(22),
    paddingBottom: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
price: {
    textAlign: 'center',
    alignItems: 'center'
},
priceTitle: {
    fontFamily: getFontFamily("Brandon", "700"),
    fontSize: fontScale(12),
    lineHeight: fontScale(20)

},
priceText: {
    fontFamily: getFontFamily("Brandon", "700"),
    fontSize: fontScale(20),
    color: color.white
},
addToCart: {
    width: horizontalScale(220),
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: fontScale(20)
},
addToCartText: {
    fontFamily: getFontFamily('Brandon', "700"),
    fontSize: fontScale(18),
    color: color.white

}

})

export default PaymentCard

