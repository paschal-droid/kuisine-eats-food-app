import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import { color, getFontFamily, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import Icon from '../Icon/Icon'
import { Input, OrderInput, OrderTab } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderState } from '../../redux/reducers/Food'

const { verticalScale, horizontalScale, fontScale } = scaling

const OrderModal = (props) => {
    const { height } = Dimensions.get('window')
    const orderContainerHeight = height * 0.5
    const {theme} = useTheme()
    const dispatch = useDispatch()

    //! states managed in the order modal
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')

    const createNewOrder = () => {
      dispatch(updateOrderState({isActive: true, address, number}))
      props.setOpenModal(false)
    }


  return (
    <Modal visible={props.openModal} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={() => props.setOpenModal(false)}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: height - orderContainerHeight }} />
      </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => props.setOpenModal(false)} style={[styles.closeButton, {backgroundColor: theme.backgroundColor, bottom: height * 0.52}]}>
            <Icon color={theme.oppColor} name='close' size={fontScale(20)} />
        </TouchableOpacity>
      <View style={styles.modalContainer}>
        
        <View style={[styles.modalContent, { height: orderContainerHeight, backgroundColor: theme.backgroundColor }]}>
            <OrderInput onClose={() => setAddress('')} inputHeader={'Delivery Address'} search={address} placeholderText='10th Hunter Street, IL' handleTextChange={(val) => setAddress(val)} />
            <OrderInput onClose={() => setNumber('')} inputHeader={'Number we can call'} search={number} placeholderText='+1 344565829' handleTextChange={(val) => setNumber(val)} />
            <View style={styles.orderActionContainer}>
              <OrderTab name='Pay On Delivery' onPress={() => createNewOrder()} isInactive={true} />
              <OrderTab name='Pay Now' onPress={() => createNewOrder()} isInactive={false} />
            </View>
        </View>

      </View>
    </Modal>
  )
}

OrderModal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    setOpenModal: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: horizontalScale(20),
    paddingTop: horizontalScale(30),
    gap: 24,
    borderTopLeftRadius: horizontalScale(40),
    borderTopRightRadius: horizontalScale(40),
  },
  closeButton: {
    height: horizontalScale(48),
    width: horizontalScale(48),
    borderRadius: horizontalScale(48),
    backgroundColor: color.Grey,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  orderInputContainer: {
    gap: 15,
  },
  orderInputHeader: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    marginLeft: horizontalScale(5)
  },
  orderActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: horizontalScale(20)
  },
 
});

export default OrderModal
