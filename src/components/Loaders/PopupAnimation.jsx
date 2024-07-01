import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native';
import { color, getFontFamily, scaling } from '../../themes/themes';

const {horizontalScale, verticalScale, fontScale} = scaling;

import orderAnimation from '../../lottie/order-complete.json'
import { useTheme } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { updateOrderState } from '../../redux/reducers/Food';

const PopupAnimation = (props) => {
  const {theme} = useTheme()
  const {orderHistoryList} = useSelector(state => state.food)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  
  const pushToTrack = () => {
    dispatch(updateOrderState({isActive: false, address: '', number: ''}))
    navigation.navigate(Routes.Track)
  }
  const pushToOrderHistory = () => {
    dispatch(updateOrderState({isActive: false, address: '', number: ''}))
    navigation.navigate(Routes.Order)
  }


  return (
    <View style={[styles.lottieAnimationContainer]}>
      <LottieView speed={0.5} autoPlay style={styles.lottieStyles} source={orderAnimation} />
      <View style={[styles.lottieAnimationContent]}>
        <View style={[styles.orderMessageContainer]}>
          <Text style={[styles.orderMessageHeaderText]}>!Order Confirmed</Text>
          <Text style={[styles.orderMessageText]}>Your order has been placed successfully</Text>
        </View>
        <Text style={styles.deliveryDate}>Delivered on {orderHistoryList[0].orderDate}</Text>
        <View style={styles.orderMessageAction}>
          <TouchableOpacity onPress={() => pushToTrack()}>
            <Text style={[styles.orderMessageActionText, {color: theme.accentColor}]}>Track My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pushToOrderHistory()}>
            <Text style={[styles.orderMessageActionText, {color: theme.accentColor}]}>View Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

PopupAnimation.propTypes = {
  
}

export default PopupAnimation

const styles = StyleSheet.create({
  lottieAnimationContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFD8C7',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieStyles: {
    height: horizontalScale(150),
    width: horizontalScale(200),
  },
  lottieAnimationContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 25

  },
  orderMessageContainer: {
    alignItems: 'center'
  },
  orderMessageHeaderText: {
    fontFamily: getFontFamily('LeagueSpartan', '700'),
    fontSize: fontScale(30),
    color: '#391713'
  },
  orderMessageText: {
    fontFamily: getFontFamily('LeagueSpartan', '500'),
    fontSize: fontScale(18),
    textAlign: 'center',
    color: '#391713'
  },
  deliveryDate: {
    fontFamily: getFontFamily('LeagueSpartan', '500'),
    fontSize: fontScale(18),
    color: '#391713'
  },
  orderMessageAction: {
    flexDirection: 'row',
    marginTop: horizontalScale(10),
    gap: 20
  },
  orderMessageActionText: {
    fontFamily: getFontFamily('LeagueSpartan', '500'),
    fontSize: fontScale(20),
  },
  lottieAnimationContentHeaderText: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(32),
    letterSpacing: -0.32,
  },
})