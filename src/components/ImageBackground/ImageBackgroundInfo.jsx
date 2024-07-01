import { ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getFontFamily, scaling, color } from '../../themes/themes'
import Icon from '../Icon/Icon'
import styles from './styles'
import { useTheme } from '../../context/ThemeContext'
import { getRandomRating, getRandomRatingCount } from '../../constants'
import { BackButton } from '..'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/reducers/Food'
import FastImage from 'react-native-fast-image'

const {horizontalScale, verticalScale, fontScale} = scaling

const ImageBackgroundInfo = (props) => {
  const {theme}  = useTheme()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {favoritesList} = useSelector(state => state.food)

  const [rating, setRating] = useState(4)
  const [ratingCount, setRatingCount] = useState(1200)

  useEffect(() => {
    setRating(getRandomRating())
    setRatingCount(getRandomRatingCount())
  }, [])

  const toggleFavorite = (favorite, id) => {
    favorite ? dispatch(removeFromFavorites(id)) : dispatch(addToFavorites(id))
  }
  return (
    <View>
      <FastImage priority={FastImage.priority.high} style={[styles.background, props.bgStyles]} source={{uri: props.bgImage}}>
        {props.enableBackHandler ? (
          <View style={styles.headerBarWithBack}>
            <BackButton navigateBack={() => navigation.goBack()} />
            <TouchableHighlight onPress={() => toggleFavorite(props.favorite, props.id)}>
              <Icon
                name={props.favorite ? 'heart-filled' : 'heart'}
                color={theme.accentColor}
                size={fontScale(25)}
              />
            </TouchableHighlight>
          </View>
        ) : (
          <View style={styles.headerBarWithoutBack}>
            <Pressable onPress={() => toggleFavorite(props.favorite, props.type, props.id)}>
              <Icon
                name={props.favorite ? 'heart-filled' : 'heart'}
                color={theme.accentColor}
                size={fontScale(25)}
              />
            </Pressable>
          </View>
        )}
        <View style={styles.backgroundContainerInfo}>
          <View style={styles.backgroundInnerContainerInfo}>
            <View style={styles.background1InfoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.headerText}>{props.name}</Text>
                <Text style={styles.text}>{props.type}</Text>
              </View>
              <View style={styles.coffeeIcons}>
                <View style={[styles.icons, {backgroundColor: theme.accentColor}]}>
                  <Icon color={theme.accentColor2} name={'clock'} size={fontScale(25)} />
                  <Text style={styles.iconText}>20 mins</Text>
                </View>
                <View style={[styles.icons, {backgroundColor: theme.accentColor}]}>
                  <Icon color={theme.accentColor2} name={'calendar-active'} size={fontScale(25)} />
                  <Text style={styles.iconText}>Avaliable</Text>
                </View>
              </View>
            </View>
            <View style={styles.background2InfoContainer}>
              <View style={styles.ratings}>
                <Icon size={fontScale(22)} color={theme.accentColor} name='star' />
                <Text style={styles.mainText}>{rating}</Text>
                <Text style={styles.miniText}>{ratingCount}</Text>
              </View>
              <View style={[styles.roastedContainer, {backgroundColor: theme.accentColor}]}>
                <Text  style={styles.roastedText}>Freshly Made</Text>
              </View>
            </View>
          </View>
        </View>
      </FastImage>
    </View>
  );
}

ImageBackgroundInfo.propTypes = {
  bgImage: PropTypes.any.isRequired,
  enableBackHandler: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  name: PropTypes.string.isRequired,
  navigateBack: PropTypes.func,
}

ImageBackgroundInfo.props = {
  navigateBack: () => { }
}
export default ImageBackgroundInfo

