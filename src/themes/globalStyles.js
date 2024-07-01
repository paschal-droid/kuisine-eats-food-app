import { StyleSheet} from "react-native"
import { scaling, color, getFontFamily} from "./themes"
import PropTypes from 'prop-types'

const {horizontalScale, verticalScale, fontScale} = scaling
const styles = StyleSheet.create({
    appScreen: {
        flex: 1,
    },
    space: {
        marginTop: verticalScale(22),
        marginHorizontal: horizontalScale(22)
    },
    spacePadding: {
        paddingTop: verticalScale(22),
        paddingHorizontal: horizontalScale(22)
    },
    noView: {
        flex: 1,
        justifyContent: 'center'
    },
    noConnectionContainer: {
        flex: .7
    },
})


export default styles