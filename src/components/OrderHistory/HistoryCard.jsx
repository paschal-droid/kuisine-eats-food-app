import { Pressable, Text, View } from 'react-native'
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types'
import OrderItem from './OrderItem';
import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const HistoryCard = (props) => {
  const {theme} = useTheme()
  const navigation = useNavigation()
  return (
    <View style={[styles.mainOrderSection]}>
      <View style={styles.orderInfoContainer}>
        <View style={styles.orderDateContainer}>
          <Text style={[styles.orderDateTitle, {color: theme.textColor}]}>Order Date</Text>
          <Text style={[styles.orderDateText, {color: theme.accentColor}]}>{props.orderDate}</Text>
        </View>
        <View style={styles.orderDateContainer}>
          <Text style={[styles.orderDateTitle, {color: theme.textColor}]}>Total Amount</Text>
          <Text style={[styles.cartPriceText, {color: theme.accentColor}]}>$ {props.cartListPrice}</Text>
        </View>
      </View>
      {props.cartList.map((data, i) => (
    <View key={i.toString() + data.id} style={styles.orderSection}>
        <Pressable onPress={() => navigation.navigate(Routes.Details, {id: data.id})}>
            <OrderItem
            id={data.id}
            itemPrice={data.itemPrice}
            name={data.name}
            prices={data.prices}
            type={data.type}
            image={data.image}
            />
        </Pressable>
    </View>
        ))}
    <View style={styles.horizontalLine} />
  </View>
  )
}

HistoryCard.propTypes = {
    cartList: PropTypes.array.isRequired,
    cartListPrice: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
}

export default HistoryCard
