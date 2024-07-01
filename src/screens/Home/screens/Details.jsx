import React, { useState } from 'react' 
import { View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native'
import styles from './detailStyle'
import { useDispatch, useSelector } from 'react-redux'
import { CartButton, ImageBackgroundInfo } from '../../../components'
import { useTheme } from '../../../context/ThemeContext'
import { Routes } from '../../../navigation/Routes'
import { addToCart, calculateCartPrice } from '../../../redux/reducers/Food'




const Details = ({navigation, route}) => {
  const {items, cartList, cartPrice} = useSelector(state => state.food)
  const detailItem = items.find((item) => item._id === route.params.id)

  // ? states managed in the details screen

  const portion = ['S', 'M', 'L']
  const [size, setSize] = useState(1)
 


  const {theme} = useTheme()

  const dispatch = useDispatch()

  const addToCartHandler = (item, price) => {
    const {_id, name, image, _type} = item
    dispatch(addToCart({id: _id, name, image, type: _type, prices: [{...price, quantity: 1}]}))
    dispatch(calculateCartPrice())
    navigation.navigate(Routes.Cart)
  }

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <ImageBackgroundInfo
          bgImage={detailItem.image}
          enableBackHandler={true}
          type={detailItem._type}
          id={detailItem._id}
          favorite={detailItem.favorite}
          name={detailItem.name}
          navigateBack={() => navigation.pop()}
        />
        
      {/* Description and CTA's */}
      <View style={[styles.descriptionContainer, {backgroundColor: '#16161d'}]}>
        <View style={styles.description}>
          <Text style={styles.descHeaderText}>Description</Text>
          <Text numberOfLines={3} style={styles.descText}>{detailItem.details}</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.descHeaderText}>Size</Text>
          <View style={styles.sizeOptionContainer}>
          {detailItem.price.map((item, i) => (
              <Pressable onPress={() => setSize(i)} key={i} style={[styles.sizeOption, i === size && styles.sizeOptionFocused, {borderColor: theme.accentColor}]}>
                <Text style={styles.sizeOptionTextCoffee}>{portion[i]}</Text>
              </Pressable>
          ))}
          </View>
        </View>
      <CartButton isTheme={false} onAction={() => addToCartHandler(detailItem, {price: detailItem.price[size], currency: '$', size: portion[size]})} title='Price' actionText='Add To Cart' price={`${detailItem.price[size]}`}  />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details