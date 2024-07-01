import { StyleSheet } from "react-native"
import { color, getFontFamily, scaling } from "../../themes/themes"


const {horizontalScale, verticalScale, fontScale} = scaling

const styles = StyleSheet.create({
    mainOrderSection: {
        marginVertical: verticalScale(10),
    },
    orderInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(10)
    },
    orderDateContainer: {

    },
    orderSection: {
        borderRadius: horizontalScale(20),
        marginBottom: verticalScale(15)
    },
    orderDateTitle: {
        fontFamily: getFontFamily("Brandon", '700'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14)
    },
    orderDateText: {
        fontFamily: getFontFamily("Brandon", '300'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14),

    },
    cartPriceText: {
        fontFamily: getFontFamily("Brandon", '600'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14),
    },
    orderItemSection: {
        marginVertical: verticalScale(5),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(15),
        borderWidth: 1,
        borderRadius: horizontalScale(15)
    },
    section1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderItemImageContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    orderItemImage: {
        width: horizontalScale(55),
        height: horizontalScale(55),
        borderRadius: horizontalScale(10),
    },
    orderItemInfo: {

    },
    orderItemName: {
        fontFamily: getFontFamily("Brandon", "500"),
        fontSize: fontScale(16),
        lineHeight: fontScale(20)
    },
    orderItemIngredient: {
        fontFamily: getFontFamily("Brandon", "300"),
        fontSize: fontScale(15),
        textTransform: 'capitalize'
    },
    orderPriceText: {
        fontFamily: getFontFamily("Brandon", "700"),
        fontSize: fontScale(20),
    },
    section2: {
        marginTop: verticalScale(8)
    },
    orderItemPriceExtraInfo: {
        marginVertical: verticalScale(4),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderItemPriceInfo1: {
        flexDirection: 'row',
        borderRadius: horizontalScale(10),
        width: horizontalScale(135),
        height: horizontalScale(35),
        alignItems: 'center',
        gap: 10,
        borderWidth: 1
    },
    orderItemSize: {
        alignItems: 'center',
        flex: .4,
        borderRightWidth: .5,
        height: '100%',
        justifyContent: 'center',
    },
    orderItemSizeText: {
        fontFamily: getFontFamily("Brandon", "500"),
        fontSize: fontScale(16)
    },
    orderItemPrice: {
        flex: .6,
    },
    orderItemPriceText: {
        fontFamily: getFontFamily("Brandon", "600"),
        fontSize: fontScale(16),

    },
    orderItemPriceInfo2: {
        height: horizontalScale(35),
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderItemQuantityText: {
        fontFamily: getFontFamily("Brandon", "700"),
        fontSize: fontScale(16),

    },
    orderItemPriceInfo3: {
        height: horizontalScale(35),
        width: horizontalScale(40),
        alignItems: 'center',
        justifyContent: 'center'

    },
    orderItemTotalPriceText: {
        fontFamily: getFontFamily("Brandon", "700"),
        fontSize: fontScale(16),

    },
    dollarText: {
    },
    horizontalLine: {
        width: '100%',
        height: verticalScale(1),
    }
})

export default styles