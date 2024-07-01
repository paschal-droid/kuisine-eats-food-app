import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import { BackButton, OrderTab } from '../../../components'
import { Routes } from '../../../navigation/Routes'
import { color, getFontFamily, scaling } from '../../../themes/themes'
import LottieView from 'lottie-react-native'
import locationAnimation from '../../../lottie/location-tracking.json'
import { useSelector } from 'react-redux'

const {fontScale, verticalScale, horizontalScale} = scaling;


const TrackScreen = ({navigation}) => {
    const {theme} = useTheme()
    const {orderHistoryList} = useSelector(state => state.food)

  return (
    <SafeAreaView style={[styles.trackContainer, {backgroundColor: theme.accentColor}]}>
        <View style={[styles.header]}>
            <BackButton navigateBack={() => navigation.navigate(Routes.Home)} />
            <Text style={styles.trackHeaderText}>Tracking Info</Text>
            <View style={{flex: 0.3}} />
        </View>
        <View style={[styles.trackInfoContainer, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[styles.trackInfoHeaderText, {color: theme.headerColor}]}>Shipping Address</Text>
            <View style={[styles.trackInfoAddress, {backgroundColor: '#eb6484'}]}>
                <Text style={styles.trackInfoAddressText}>{orderHistoryList[0].address}</Text>
            </View>
            <View style={styles.trackInfoLocation}>
                <LottieView speed={0.5} autoPlay style={styles.lottieStyles} source={locationAnimation} />
            </View>

            <View style={[styles.trackInfoDeliveryInfo]}>
                <View style={styles.deliveryInfo}>
                    <Text style={[styles.deliveryInfoMainText, {color: theme.headerColor}]}>Delivery Time</Text>
                    <Text style={[styles.deliveryInfoText, {color: theme.textColor}]}> Estimated Delivery Time</Text>
                </View>
                <Text style={[styles.deliveryTime, {color: theme.accentColor}]}>30 mins</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.orderMessageAction}>
                <OrderTab name='Return Home' onPress={() => navigation.navigate(Routes.Home)} isInactive={true} />
                <TouchableOpacity style={[styles.orderMessageActionBtn, {backgroundColor: theme.accentColor}]} onPress={() => navigation.navigate(Routes.Order)}>
                    <Text style={[styles.orderMessageActionText, {color: theme.accentColor2}]}>View Order History</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default TrackScreen

const styles = StyleSheet.create({
    trackContainer: {
        flex: 1,
    },
    header: {
        marginVertical: verticalScale(35),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(22),
    },
    trackHeaderText: {
        fontFamily: getFontFamily('LeagueSpartan', '700'),
        fontSize: fontScale(28),
        color: color.white
    },
    trackInfoContainer: {
        flex: 1,
        paddingHorizontal: horizontalScale(22),
        borderTopStartRadius: horizontalScale(30),
        borderTopEndRadius: horizontalScale(30),
        paddingTop: horizontalScale(35),
        gap: 23
    },
    trackInfoHeaderText: {
        fontFamily: getFontFamily('LeagueSpartan', '700'),
        fontSize: fontScale(26),
        lineHeight: fontScale(30) 
    },
    trackInfoAddress: {
        height: horizontalScale(35),
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(20),
        borderRadius: horizontalScale(20)
    },
    trackInfoAddressText: {
        color: color.white,
        fontFamily: getFontFamily('LeagueSpartan', '500'),
        fontSize: fontScale(16),
        textTransform: 'capitalize'
    },
    trackInfoLocation: {
    },
    lottieStyles: {
        height: horizontalScale(200),
    },
    trackInfoDeliveryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    deliveryInfo: {
        alignItems: 'flex-start'
    },
    deliveryInfoMainText: {
        fontFamily: getFontFamily('LeagueSpartan', '500'),
        fontSize: fontScale(20),
        color: '#391713',
    },
    deliveryInfoText: {
        fontFamily: getFontFamily('LeagueSpartan', '300'),
        fontSize: fontScale(14),
    },
    deliveryTime: {
        fontFamily: getFontFamily('LeagueSpartan', '500'),
        fontSize: fontScale(20),
    },
    line: {
        width: '100%',
        height: horizontalScale(1),
        backgroundColor: '#FFD8C7'
    },
    orderMessageAction: {
        flexDirection: 'row',
        marginTop: horizontalScale(10),
        gap: 20,
        alignSelf: 'center'
    },
    orderMessageActionBtn: {
        height: horizontalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(20),
        borderRadius: horizontalScale(20)
    },
    orderMessageActionText: {
        fontFamily: getFontFamily('LeagueSpartan', '500'),
        fontSize: fontScale(16),
    },

})