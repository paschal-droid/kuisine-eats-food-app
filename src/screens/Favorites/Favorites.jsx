import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { CartHeader, EmptyListAnimation, FavoriteCard } from '../../components'

const {horizontalScale, verticalScale, fontScale} = scaling

const Favorites = () => {
  const {favoritesList} = useSelector(state => state.food)
  const {theme} = useTheme()
  const dispatch = useDispatch()
  const tabBarHeight = useBottomTabBarHeight()

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: theme.backgroundColor}]}>
      <CartHeader headerText={'My Favorites'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={[styles.innerScreen, {marginBottom: tabBarHeight}]}>
          {favoritesList.length == 0 && <EmptyListAnimation title={'No Favorites Here'} />}
          <View style={[styles.favoritesListContainer]}>
            {favoritesList.length != 0 && favoritesList.map((detailItem, i) => {
              return (
                <FavoriteCard key={i.toString()} item={detailItem} />
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  innerScreen: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(10)
  },
  favoritesListContainer: {
    marginVertical: verticalScale(30),
    gap: 26
  }
})