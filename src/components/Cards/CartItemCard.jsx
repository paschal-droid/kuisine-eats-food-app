import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import themes, { color, scaling, getFontFamily } from '../../themes/themes'
import Icon from '../Icon/Icon'
import { useTheme } from '../../context/ThemeContext'
import { Routes } from '../../navigation/Routes'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { calculateCartPrice, decrementCartItemQuantity, incrementCartItemQuantity, removeCartItem } from '../../redux/reducers/Food'


const {horizontalScale, verticalScale, fontScale} = scaling

const CartItemCard = (props) => {
    // console.log(props.item);
    const {theme} = useTheme()
    const {cartList} = useSelector(state => state.food)

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [productCost, setProductCost] = useState(0)
    const [sizes, setSizes] = useState([])
    const [quantity, setQuantity] = useState(0)

    const total = () => props.item.prices.reduce((a, b) => a + b.quantity * b.price, 0).toFixed(2);
    const getQuantity = () => props.item.prices.reduce((a, b) => a + b.quantity, 0);
    const getSizes = () => props.item.prices.map(item => item.size)

    useEffect(() => {
        setProductCost(total())
        setSizes(getSizes())
        setQuantity(getQuantity())
    }, [cartList])

    const increment = (id, size) => {
        dispatch(incrementCartItemQuantity({id, size}))
        dispatch(calculateCartPrice())
    }
    
    const decrement = (id, size) => {
        dispatch(decrementCartItemQuantity({id, size}))
        dispatch(calculateCartPrice())
    }

    const removeItem = (id) => {
        dispatch(removeCartItem({id}))
        dispatch(calculateCartPrice())
    }


    return (
       <>
        <Pressable onPress={() => navigation.navigate(Routes.Details, {id: props.item.id})} style={[styles.cartItemContainer]}>
            <View style={[styles.cartItemDetails]}>
                <FastImage resizeMode='cover' style={styles.cartItemImage} source={{uri: props.item.image}} priority={FastImage.priority.normal} />
                <View style={[styles.cartItemNameContainer]}>
                    <Text numberOfLines={1} style={[styles.cartItemName, {color: theme.headerColor}]}>{props.item.name}</Text>
                    <Text style={[styles.cartItemSize, {color: theme.textColor}]}>Sizes: {sizes.map((item, i) => <Text key={i.toString()}>{item}{i != sizes.length -1 && <Text>,</Text>} </Text>)}
                    </Text>
                    <TouchableOpacity onPress={() => removeItem(props.item.id)} style={[styles.cartItemDelete, {backgroundColor: '#F1EFF6'}]}>
                        <Icon name='trash-2' size={fontScale(22)} color={'#27214D'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.cartItemPrice]}>
                <Text style={[styles.price, {color: theme.accentColor}]}>$ {productCost}</Text>
                <Text style={[styles.cartItemQuantity, {color: theme.textColor}]}>{sizes.length} items</Text>

                <View style={styles.cartActionsQuantityContainer}>
                    <Icon name='minus' onPress={() => decrement(props.item.id, sizes[sizes.length -1])} style={[styles.quantity, {backgroundColor: theme.accentColor}]} />
                    <View style={styles.quantityValue}>
                        <Text style={[styles.quantityValueText, {color: theme.headerColor}]}>{quantity}</Text>
                    </View>
                    <Icon name='add' onPress={() => increment(props.item.id, sizes[sizes.length -1])} style={[styles.quantity, {backgroundColor: theme.accentColor}]} />
                </View>
            </View>
        </Pressable>
        <View style={styles.line} />
       </>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        gap: 20
    },
    cartItemDetails: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 15,
        flex: 1,
    },
    cartItemImage: {
        width: horizontalScale(70),
        aspectRatio: 1/1,
        borderRadius: horizontalScale(10),
    },
    cartItemNameContainer: {
        justifyContent: 'center',
        gap: 6,
        flex: 0.95
    },
    cartItemName: {
        fontFamily: getFontFamily("Brandon", "500"),
        fontSize: fontScale(18),
    },
    cartItemSize: {
        fontFamily: getFontFamily("Brandon", "500"),
        fontSize: fontScale(14),
    },
    
    cartItemDelete: {
        width: horizontalScale(25),
        height: horizontalScale(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: horizontalScale(15)
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#FFD8C7'
    },
    cartItemPrice: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    price: {
        fontFamily: getFontFamily("Brandon", "700"),
        fontSize: fontScale(20),
    },
    cartItemQuantity: {
        fontFamily: getFontFamily("Brandon", "500"),
        fontSize: fontScale(14),
    },
    cartActionsQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(6)
    },
    quantity: {
        width: horizontalScale(20),
        height: horizontalScale(20),
        color: color.white,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: horizontalScale(20)
    },
    quantityValue: {
        width: horizontalScale(20),
        height: horizontalScale(20),
        alignItems: 'center',
        justifyContent: 'center',

    },
    quantityValueText: {
        fontFamily: getFontFamily("Brandon", "700"),
        fontSize: fontScale(16),
    },
})

CartItemCard.propTypes = {
    item: PropTypes.object,
  }
  
  CartItemCard.props = {
    onPress: () => {},
    onAddPress: () => {},
  }
  

export default CartItemCard
