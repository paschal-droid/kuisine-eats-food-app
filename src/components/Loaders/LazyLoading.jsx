import { StyleSheet, View, ActivityIndicator, useColorScheme } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../context/ThemeContext'
import { color } from '../../themes/themes'

const LazyLoading = (props) => {

  const {theme} = useTheme()
  
  return (
    <View  style={[styles.loadingContainer, {backgroundColor: props.defaultBg ? theme.backgroundColor : color.black2}]}>
      <ActivityIndicator style={styles.loader} size={"large"} color={props.defaultBg ? theme.textColor : color.white} />
    </View>
  )
}

LazyLoading.propTypes = {
  defaultBg: PropTypes.bool
}

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    loader: {
      zIndex: 1001,
    }
})


export default LazyLoading