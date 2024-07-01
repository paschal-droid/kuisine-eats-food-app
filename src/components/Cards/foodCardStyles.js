import { Platform, StyleSheet } from "react-native"
import { scaling, getFontFamily, color } from "../../themes/themes"

const {horizontalScale, verticalScale, fontScale} = scaling

const styles = StyleSheet.create({
    foodCard: {
      borderRadius: fontScale(20),
      alignItems: 'center',
      gap: 8,
      
    },
    imageContainer: {
      paddingVertical: verticalScale(8),
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    foodImage: {
      aspectRatio: 1/1,
      borderRadius: 1000,
      zIndex: 1000,
      alignSelf: 'center'
    },
    favoriteIcon: {
      justifyContent: 'flex-end',
      marginLeft: horizontalScale(5),
      position: 'absolute',
      right: horizontalScale(12),
      top: horizontalScale(12)
    },
    textContainer: {
      alignItems: 'center'
    },
    headerText: {
      fontFamily: getFontFamily("Brandon", "700"),
      fontSize: fontScale(16),
     
    },
    text: {
      fontFamily: getFontFamily("Brandon", "400"),
      fontSize: fontScale(12),
    },
    actions: {
      paddingBottom: verticalScale(15),
      flexDirection: 'row',
      marginTop: verticalScale(2),
      width: '100%',
      gap: 40,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      // paddingHorizontal: horizontalScale(15)
    },
    price: {
      fontFamily: getFontFamily("Brandon", "400"),
      fontSize: fontScale(16),
      letterSpacing: -0.14
    },
    addButton: {
      height: horizontalScale(24),
      width: horizontalScale(24),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: fontScale(25)
    },


})

export default styles