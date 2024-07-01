import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import { scaling, getFontFamily, color} from '../themes/themes'
import { useTheme } from '../context/ThemeContext'
import Icon from './Icon/Icon'


const {horizontalScale, verticalScale, fontScale} = scaling

const SearchInput = (props) => {
    const {theme} = useTheme()
  return (
    <View style={[styles.inputContainer, { backgroundColor: color.input}]}>
        {props.isIcon && (
            <TouchableOpacity style={[styles.inputAction]} onPress={props.onSearch}>
                <Icon name='search' size={fontScale(20)} color={color.black} />
            </TouchableOpacity>
        )}
        <TextInput value={props.search} onChangeText={(value) => props.handleTextChange(value)} placeholder={props.placeholderText} placeholderTextColor={color.inputText} editable style={[styles.input, { color: color.inputText }]} />
        {props.search.length > 0 && props.isIcon ? (
            <TouchableOpacity style={styles.inputAction2} onPress={props.onClose}>
                <Icon name='close' size={fontScale(15)} color={color.black} />
            </TouchableOpacity>
        ) : <></>}
    </View>
  )
}

SearchInput.props = {
    onSearch: () => {},
    onClose: () => {},
}

SearchInput.propTypes = {
    handleTextChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isIcon: PropTypes.bool.isRequired,

}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    height: horizontalScale(45),
    flexDirection: 'row',
    borderRadius: verticalScale(12),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: horizontalScale(42),
    marginRight: horizontalScale(20),
    fontFamily: getFontFamily('Brandon', '400'),
    fontSize: fontScale(18),
  },
  inputAction: {
    position: 'absolute',
    left: 15,
    height: '100%',
    width: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAction2: {
    position: 'absolute',
    right: 15,
    height: '100%',
    width: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default SearchInput
