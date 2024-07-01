import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartButton, CartHeader, CartItem, EmptyListAnimation, Order, PopupAnimation } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { color, getFontFamily, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import { Routes } from '../../navigation/Routes'
import { addToOrderHistoryList, calculateCartPrice, updateOrderState } from '../../redux/reducers/Food'
import { useIsFocused } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'


const {horizontalScale, verticalScale, fontScale} = scaling

const Cart = ({navigation}) => {
  const {cartList, cartPrice, createOrder} = useSelector(state => state.food)
  const {theme} = useTheme()
  const {height} = Dimensions.get('window')
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const tabBarHeight = useBottomTabBarHeight()


  const [openOrderModal, setOpenOrderModal] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    let autoNavigate
    
    if(createOrder.isActive === true) {
      setShowAnimation(true);

      dispatch(addToOrderHistoryList());

      dispatch(calculateCartPrice())
      
      autoNavigate = setTimeout(() => {
        setShowAnimation(false)
        if(isFocused){
          dispatch(updateOrderState({isActive: false, address: '', number: ''}))
          navigation.navigate(Routes.Track)
        }
      }, 10000)
      

    }
    return () => clearTimeout(autoNavigate)

  }, [createOrder.isActive])


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      {showAnimation && <PopupAnimation />}
      <CartHeader headerText={'My Cart'} />
      <View style={[styles.cartContainer, {marginBottom: tabBarHeight}]}>
        {cartList.length === 0 && <EmptyListAnimation title={'Cart is Empty!'} />}
        <View style={styles.cartContent}>
          <ScrollView contentContainerStyle={{flexGrow: 1, gap: 15}} showsVerticalScrollIndicator={false}>
            {cartList && 
              cartList.map((item, i) => {
                return (
                  <CartItem key={i.toString()} item={item} />
                )
              }
            )
          }
          </ScrollView>
        </View>
        {cartList.length > 0 && <CartButton isTheme={true} title={'Total'} actionText='Pay Now' price={cartPrice} onAction={() => setOpenOrderModal(true)} /> }
      </View>
      {openOrderModal &&  <Order openModal={openOrderModal} setOpenModal={setOpenOrderModal} />}

    </SafeAreaView>
  );
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(25),
    paddingBottom: verticalScale(15),
    // gap: 24,
    justifyContent: 'space-between'
  },
  cartContent: {
    gap: 20,
    flex: 1
  },
  line: {
    width: '100%',
    height: horizontalScale(1),
    backgroundColor: color.Grey
  },
  cartHeadText: {
    textAlign: 'center',
    fontSize: fontScale(22),
    fontFamily: getFontFamily('Brandon', '500'),
    letterSpacing: 0.4,
    paddingBottom: verticalScale(15)
  },

})