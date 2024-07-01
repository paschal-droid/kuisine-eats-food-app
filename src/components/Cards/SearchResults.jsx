import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { getFontFamily, scaling } from '../../themes/themes'
import { FoodCard, Loading } from '..'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart, calculateCartPrice } from '../../redux/reducers/Food'
import { Routes } from '../../navigation/Routes'

const {horizontalScale, verticalScale, fontScale} = scaling

const SearchResults = (props) => {
    const {theme} = useTheme()
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleAddToCart = (item) => {
      const {_id, name, image, _type} = item
      const portion = ['S', 'M', 'L']
      const price = {price: item.price[1], currency: '$', size: portion[1]}
      dispatch(addToCart({id: _id, name, image, type: _type, prices: [{...price, quantity: 1}]}))
      dispatch(calculateCartPrice())
      ToastAndroid.showWithGravity(`${name} was added to cart`, ToastAndroid.LONG, ToastAndroid.TOP)
    }

  return (
    <View style={[styles.recommendedCategoryContainer]}>
      <Text style={[styles.recommendedCategoryContainerHeader, {color: theme.textColor}]}>From Search</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 23}}
        data={props.result}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<Loading defaultBg={true} />}
        renderItem={({item}) => (
          <FoodCard item={item} onPress={() => navigation.navigate(Routes.Details, {id: item._id})} onAddPress={() => handleAddToCart(item)}  />
        )}
      />
    </View>
  )
}

SearchResults.propTypes = {
    result: PropTypes.array.isRequired
}

export default SearchResults

const styles = StyleSheet.create({
    recommendedCategoryContainer: {
        gap: 24
    },
    recommendedCategoryContainerHeader: {
      fontFamily: getFontFamily('Brandon', '700'),
      fontSize: fontScale(24),
      letterSpacing: -0.24,
      lineHeight: fontScale(35),
    }
})