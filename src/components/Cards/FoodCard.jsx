import { Dimensions, Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './foodCardStyles'
import { Icon } from '..'
import { color, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/reducers/Food'

const {horizontalScale, verticalScale, fontScale} = scaling

const FoodCard = (props) => {

  const {width, height} = Dimensions.get('window')
  const {theme} = useTheme()
  const dispatch = useDispatch()
     
  return (
    <Pressable onPress={props.onPress} style={[styles.foodCard, {width: width/2.6, backgroundColor: theme.cardColor}]} >
      <View style={styles.imageContainer}>
        <FastImage priority={FastImage.priority.high} style={[styles.foodImage, {width: width/4.2}]} width={width/4.5} source={{uri: props.item.image}} />
        <Icon name={props.favorite ? 'heart-filled' : 'heart'} size={fontScale(18)} style={styles.favoriteIcon} color={theme.accentColor} />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={[styles.headerText, {color: theme.headerColor}]}>{props.item.name}</Text>
      </View>
      <View style={styles.actions}>
        <Text style={[styles.price, {color: theme.accentColor}]}>$ {props.item.price[1]}</Text>
        <TouchableOpacity onPress={props.onAddPress} style={[styles.addButton, {backgroundColor: theme.accentColor2}]}>
          <Icon name='add' size={fontScale(12)} color={theme.accentColor} />
        </TouchableOpacity>
      </View>
    </Pressable>
  )
}

FoodCard.propTypes = {
  item: PropTypes.object,
  favorites: PropTypes.bool
}

FoodCard.props = {
  onPress: () => {},
  onAddPress: () => {},
}


export default FoodCard

