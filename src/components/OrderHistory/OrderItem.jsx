import {Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { useTheme } from '../../context/ThemeContext';

const OrderItem = props => {
  const {theme} = useTheme()
  return (
    <View style={[styles.orderItemSection, {borderColor: theme.oppColor}]}>
      <View style={styles.section1}>
        <View style={styles.orderItemImageContainer}>
          <FastImage priority={FastImage.priority.normal} source={{uri: props.image}} style={styles.orderItemImage} />
          <View style={styles.orderItemInfo}>
            <Text style={[styles.orderItemName, {color: theme.headerColor}]}>{props.name}</Text>
            <Text style={[styles.orderItemIngredient, {color: theme.textColor}]}>
              {props.type}
            </Text>
          </View>
        </View>
        <Text style={[styles.orderPriceText, {color: theme.headerColor}]}><Text style={{color: theme.accentColor}}>$</Text> {props.itemPrice}</Text>
      </View>

      <View style={styles.section2}>
        {props.prices != 1 ? (
          props.prices.map((item, i) => (
            <View style={styles.orderItemPriceExtraInfo} key={i.toString()}>
              <View style={[styles.orderItemPriceInfo1, {borderColor: theme.highlightA}]}>
                <View style={[styles.orderItemSize, {borderRightColor: theme.highlightA}]}>
                  <Text style={[styles.orderItemSizeText, {color: theme.textColor}]}>{item.size}</Text>
                </View>
                <View style={styles.orderItemPrice}>
                  <Text style={[styles.orderItemPriceText, {color: theme.textColor}]}><Text style={styles.dollarText}>$</Text> {item.price}</Text>
                </View>
              </View>
              <View style={styles.orderItemPriceInfo2}>
                <Text style={[styles.orderItemQuantityText, {color: theme.headerColor}]}><Text style={[styles.dollarText, {color: theme.accentColor}]}>X</Text> {item.quantity}</Text>
              </View>
              <View style={styles.orderItemPriceInfo3}>
                <Text style={[styles.orderItemTotalPriceText, {color: theme.accentColor}]}>{(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
          ))
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  prices: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
};

export default OrderItem;

