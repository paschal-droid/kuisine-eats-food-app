import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width, height} = Dimensions.get('window');


//! THIS HELPS TO CHECK IF THE DEVICE HAS A SMALL WIDTH AND A NOTCH AT THE TOP OF THE SCREEN
const isSmall = width <= 375 && !DeviceInfo.hasNotch()

//* THIS HELPER FUNCTIONS HELPS SET ARBITARY NUMBERS FOR OUR MOBILE SCREEN WIDTH AND HEIGHT
//* FOR WHEN WE NEED TO CREATE STYLES FOR DIFFERENT SCREEN, THINK OF IT AS A CSS MEDIA SCREEN
//* QUERY BUT FOR MOBILE SCREEN IN REACT NATIVE


const guidelineBaseWidth = () => {
    if(isSmall) {
        return 330
    }

    return 350
}

const horizontalScale = (size) => (width/guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
    if(isSmall) {
        return 550
    } else if(width > 410) return 620

    return 680
}


const verticalScale = (size) => (height / guidelineBaseHeight()) * size

const guidelineBaseFonts = () => {
    if (width > 410) {
        return 430;
    }
    return 400
}

const fontScale = (size) => Math.round((width /guidelineBaseFonts()) * size)


export const color = {
    black: '#000000',
    white: '#FFFFFF',
    whiteRGBA75: 'rgba(255,255,255,0.75)',
    whiteRGBA90: 'rgba(255,255,255,0.85)',
    whiteRGBA50: 'rgba(255,255,255,0.50)',
    whiteRGBA45: 'rgba(255,255,255,0.45)',
    whiteRGBA32: 'rgba(255,255,255,0.32)',
    whiteRGBA15: 'rgba(255,255,255,0.16)',
    black2: 'rgba(12,15,20,0.5)',
    blackRGBA50: 'rgba(0,0,0, 0.8)',
    blackRGBA45: 'rgba(0,0,0, 0.45)',
    darkGrey: '#0b0b0b',
    Grey: '#333333',
    silver: '#C0C0C0',
    error: '#B31312',
    success: '#65B741',
    chatBubble: '#E4E4E4D4',
    chatBubbleText: '#383737',
    input: '#F3F1F1',
    inputText: '#C2BDBD',
    tabBg: 'rgba(0,0,0, 0.6)',
    smoke: 'rgb(58, 56, 56)',

}

export const getFontFamily = (baseFont, weight) => {
    switch (weight) {
        case '100':
            return `${baseFont}-Thin`
        case '200':
            return `${baseFont}-ExtraLight`
        case '300':
            return `${baseFont}-Light`
        case 'normal':
        case '400':
            return `${baseFont}-Regular`
        case '500':
            return `${baseFont}-Medium`
        case '600':
            return `${baseFont}-SemiBold`
        case 'bold':
        case '700':
            return `${baseFont}-Bold`
        case '800':
            return `${baseFont}-ExtraBold`
        case '900':
            return `${baseFont}-Black`
        default:
            return `${baseFont}-Regular`
    }
}

export const scaling = {verticalScale, horizontalScale, fontScale}

export default Theme = {color, scaling, getFontFamily}