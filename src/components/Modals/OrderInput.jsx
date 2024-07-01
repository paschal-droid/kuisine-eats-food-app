import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Input } from '..'
import { color, getFontFamily, scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'

const {horizontalScale, verticalScale, fontScale} = scaling


const OrderInput = (props) => {
    const {theme} = useTheme() 
  return (

    <View style={[styles.orderInputContainer]}>
        <Text style={[styles.inputHeader, { color: theme.headerColor }]}>{props.inputHeader}</Text>
        <View style={[styles.inputContainer, { backgroundColor: color.input }, props.isRow && { flex: 1 }]}>
            <TextInput value={props.search} onChangeText={(value) => props.handleTextChange(value)} placeholder={props.placeholderText} placeholderTextColor={color.inputText} style={[styles.input, { color: color.inputText }]} />
            {props.search.length > 0 && (
                <TouchableOpacity style={styles.inputAction2} onPress={props.onClose}>
                    <Icon name='close' size={fontScale(15)} color={color.black} />
                </TouchableOpacity>
            )}
        </View>    
    </View>
  )
}

OrderInput.propTypes = {
    search: PropTypes.string.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    inputHeader: PropTypes.string.isRequired

}



export default OrderInput

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    height: verticalScale(45),
    flexDirection: 'row',
    borderRadius: verticalScale(15),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
    fontFamily: getFontFamily('Brandon', '400'),
    fontSize: fontScale(18),
  },
  inputAction2: {
    position: 'absolute',
    right: 15,
    height: '100%',
    width: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHeader: {
    fontFamily: getFontFamily('Brandon', '500'),
    fontSize: fontScale(20),
    marginLeft: horizontalScale(5)
  },
  orderInputContainer: {
    gap: 15
  },
});