import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { getFontFamily, scaling } from '../../themes/themes'
import { useDispatch, useSelector } from 'react-redux'
import { FoodCard, Loading } from '..'
import { shuffleArray } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../navigation/Routes'
import { addToCart, calculateCartPrice } from '../../redux/reducers/Food'

const {horizontalScale, verticalScale, fontScale} = scaling


const RecommendedCategory = () => {
    const {theme} = useTheme()
    const {items} = useSelector(state => state.food)
    const [data, setData] = useState([])
    const navigation = useNavigation()
    const dispatch = useDispatch()

    
    
    useEffect(() => {
      const fetchData = () => {
        const shuffledList = shuffleArray(items, 8)
        setData(shuffledList)
      }
      fetchData()
    }, [items.length])

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
      <Text style={[styles.recommendedCategoryContainerHeader, {color: theme.textColor}]}>Recommended Combo To Try</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 23}}
        data={data}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<Loading defaultBg={true} />}
        renderItem={({item}) => (
          <FoodCard item={item} onAddPress={() => handleAddToCart(item)} favorite={item.favorite} onPress={() => navigation.navigate(Routes.Details, {id: item._id, })} />
        )}
      />
    </View>
  )
}

export default RecommendedCategory

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