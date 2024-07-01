import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import { color, scaling, getFontFamily } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import { useNavigation } from '@react-navigation/native'
import Icon from '../Icon/Icon'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/reducers/Food'

const {horizontalScale, verticalScale, fontScale} = scaling


const FavoriteCard = (props) => {
    const navigation = useNavigation()
    const {theme} = useTheme()
    const dispatch = useDispatch()

    const toggleFavorite = (favorite, id) => {
        favorite ? dispatch(removeFromFavorites(id)) : dispatch(addToFavorites(id))
    }

  return (
    <View style={[styles.favoriteCardContainer]}>
        <FastImage resizeMode='stretch' priority={FastImage.priority.normal} style={styles.favoriteCardImage} source={{uri: props.item.image}} />
          <TouchableOpacity onPress={() => toggleFavorite(props.item.favorite, props.item._id)} style={[styles.heart]}>
            <Icon
              name={'heart-filled'}
              color={theme.accentColor}
              size={fontScale(25)}
            />
          </TouchableOpacity>
        <View style={[styles.favoriteCardDetailContainer]}>
            <View style={[styles.favoriteCardDetailInfo]}>
                <Text style={[styles.favoriteCardDetailInfoHeaderText, {color: theme.headerColor}]}>{props.item.name}</Text>
                <Text style={[styles.favoriteCardDetailInfoText, {color: theme.textColor}]}>{props.item.details}</Text>
            </View>
            <View style={[styles.ratings]}>
                <View style={[styles.dot, {backgroundColor: theme.accentColor}]} />
                <View style={[styles.rating, {backgroundColor: theme.accentColor}]}>
                    <Text style={[styles.ratingText]}>4.7</Text>
                    <Icon name='star' color={'#F4BA1B'} size={fontScale(12)} />
                </View>
            </View>
            <View style={styles.prices}>
                <Text style={[styles.pricesText, {color: theme.accentColor}]}>$ {props.item.price[1]}</Text>
            </View>
        </View>
        <View style={[styles.line]} />
    </View>
  )
}

FavoriteCard.propTypes = {
    item: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    favoriteCardContainer: {
        gap: 15,
        overflow: 'hidden'
    },
    favoriteCardImage: {
        aspectRatio: 16/9,
        borderRadius: horizontalScale(35),
        position: 'relative',
    },
    favoriteCardDetailContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    favoriteCardDetailInfo: {
        justifyContent: 'center',
        flex: 0.82,
    },
    favoriteCardDetailInfoHeaderText: {
        fontFamily: getFontFamily('Brandon', '700'),
        fontSize: fontScale(28),
        lineHeight: fontScale(32),
    },
    favoriteCardDetailInfoText: {
        fontFamily: getFontFamily('LeagueSpartan', '400'),
        fontSize: fontScale(14),
    },
    dot: {
        width: horizontalScale(5),
        height: horizontalScale(5),
        borderRadius: horizontalScale(5),
    },
    ratings: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: horizontalScale(-20)
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        paddingHorizontal: horizontalScale(7),
        paddingVertical: horizontalScale(2),
        borderRadius: horizontalScale(30)
    },
    ratingText: {
        fontFamily: getFontFamily('LeagueSpartan', '400'),
        fontSize: fontScale(12),
        color: color.white
    },
    prices: {},
    pricesText: {
        fontFamily: getFontFamily('LeagueSpartan', '400'),
        fontSize: fontScale(18),
    },
    line: {
        width: '100%',
        height: horizontalScale(1),
        backgroundColor: '#FFD8C7'
    },
    heart: {
        backgroundColor: color.black2,
        width: horizontalScale(35),
        height: horizontalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: horizontalScale(10),
        borderBottomLeftRadius: horizontalScale(10),
        borderTopRightRadius: horizontalScale(30),
        borderBottomRightRadius: horizontalScale(30),
        position: 'absolute',
        right: horizontalScale(10),
        top: 0
    }

})

export default FavoriteCard
