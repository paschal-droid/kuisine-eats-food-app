import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { scaling } from '../../themes/themes'
import { CartButton, CartHeader, Completed, EmptyListAnimation, HistoryCard, PopupAnimation } from '../../components'
import { useTheme } from '../../context/ThemeContext'

const {fontScale, verticalScale, horizontalScale} = scaling;



const Order = () => {
  const {orderHistoryList} = useSelector(state => state.food)
  const {theme} = useTheme()

  const tabBarHeight = useBottomTabBarHeight()
  const [showAnimation, setShowAnimation] = useState(false)

  const downloadHistory = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  }


  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: theme.backgroundColor}]}>
      {showAnimation && <Completed />}
      <CartHeader headerText={'Order History'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} >
        <View style={[styles.innerScreen, { marginBottom: tabBarHeight }]}>
          <View style={styles.orderContainer}>
            {orderHistoryList.length == 0 && <EmptyListAnimation title='No Order History!' />}
            <View style={styles.orderHistoryContainer}>
            {orderHistoryList.map((data, index) => (
              <HistoryCard
                key={index.toString()}
                cartList={data.cartList}
                orderDate={data.orderDate}
                cartListPrice={data.cartListPrice}
              />
            ))}
            </View>
          </View>
          {orderHistoryList != 0 && <CartButton isTheme={false} styles={styles.downloadButton} actionText='Download' onAction={() => downloadHistory()} /> }
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
  innerScreen: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(10)
  },
  orderContainer: {
      flex: 1
  },
  downloadButton: {
      width: '100%',
  },
  orderHistoryContainer: {
      marginHorizontal: horizontalScale(5),
  },
  lottieStyles: {
      flex: 1
  },
})