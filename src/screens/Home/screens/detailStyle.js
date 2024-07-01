import { StyleSheet } from "react-native"
import { getFontFamily, scaling, color } from '../../../themes/themes'

const {verticalScale, fontScale, horizontalScale} = scaling


const styles = StyleSheet.create({
    descriptionContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(15),
        flex: 1,
        gap: 5
    },
    description: {
        gap: 10
    },
    descHeaderText: {
       fontFamily: getFontFamily("Brandon", "500"),
       fontSize: fontScale(18),
       color: color.silver
    },
    descText: {
       fontFamily: getFontFamily("Brandon", "500"),
       fontSize: fontScale(16),
       color: '#FAFDF6',
       lineHeight: fontScale(20)
    },
    sizeContainer: {
        marginTop: verticalScale(5),
        gap: 14
    },
    sizeOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        gap: 15
    },
    sizeOptionFocused: {
        borderWidth: 3,
    },
    sizeOption: {
        height: horizontalScale(40),
        width: horizontalScale(80),
        borderRadius: fontScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white
        
    },
    sizeOptionTextCoffee: {
        fontFamily: getFontFamily('Brandon', "700"),
        fontSize: fontScale(18),
        color: color.black
    }
})

export default styles