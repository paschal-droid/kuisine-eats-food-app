import { StyleSheet } from "react-native";
import { getFontFamily, scaling, color } from '../../themes/themes'

const {verticalScale, fontScale, horizontalScale} = scaling

const styles  = StyleSheet.create({
    background: {
        width: '100%',
        aspectRatio: 4 / 5,
        justifyContent: 'space-between'
    },
    headerBarWithBack: {
        padding: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerBarWithoutBack: {
        padding: horizontalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    backgroundContainerInfo: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(16),
        backgroundColor: color.black2,
        borderTopRightRadius: fontScale(30),
        borderTopLeftRadius: fontScale(30),
    },
    backgroundInnerContainerInfo: {
        gap: 10
    },
    background1InfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(2)
    },
    background2InfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        gap: 4
    },
    headerText: {
        fontSize: fontScale(20),
        fontFamily: getFontFamily('Brandon', '700'),
        color: color.white,
    },
    text: {
        fontSize: fontScale(12),
        textTransform: 'uppercase',
        color: color.white,
        fontFamily: getFontFamily('Brandon', "500"),
        lineHeight: fontScale(20)
    },
    coffeeIcons: {
        flexDirection: 'row',
        gap: 22,

    },
    icons: {
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(6),
        borderRadius: fontScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
    },
    iconText: {
        fontSize: fontScale(10), 
        fontFamily: getFontFamily('Brandon', '500'),
        color: color.white,
        lineHeight: fontScale(20),
    },
    ratings: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    mainText: {
        fontFamily: getFontFamily('Brandon', '600'),
        fontSize: fontScale(16),
        color: color.white
    },
    miniText: {
        fontFamily: getFontFamily('Brandon', '400'),
        fontSize: fontScale(10),
        color: color.white 
    },
    roastedContainer: {
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(20),
        borderRadius: fontScale(10),
    },
    roastedText: {
        fontSize: fontScale(10), 
        fontFamily: getFontFamily('Brandon', '500'),
        color: color.white,
        lineHeight: fontScale(20),
    },
    navigateBack: {
        flexDirection: 'row',
        gap: 2,
        backgroundColor: color.white,
        width: horizontalScale(75),
        height: horizontalScale(30),
        borderRadius: horizontalScale(100),
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigateBackText: {
        color: color.black,
        textTransform: 'capitalize',
        fontSize: fontScale(16),
        fontFamily: getFontFamily('Brandon', '500')
    }
    
})

export default styles