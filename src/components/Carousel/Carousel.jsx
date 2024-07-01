import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { Easing, runOnJS, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import offer1 from '../../assets/images/offers/1.png'
import offer2 from '../../assets/images/offers/2.png'
import offer3 from '../../assets/images/offers/3.png'
import offer4 from '../../assets/images/offers/4.png'
import offer5 from '../../assets/images/offers/5.png'
import FastImage from 'react-native-fast-image'
import { Pressable } from 'react-native'
import Icon from '../Icon/Icon'
import { color, scaling } from '../../themes/themes'

const {horizontalScale, verticalScale, fontScale} = scaling

const Carousel = () => {
    const { theme } = useTheme()
    const [storyIndex, setStoryIndex] = useState(0)
    const [userIndex, setUserIndex] = useState(0)
    const offers = [
        {offer1: '1', image: offer1},
        {offer1: '2', image: offer2},
        {offer1: '3', image: offer3},
        {offer1: '4', image: offer4},
        {offer1: '5', image: offer5},
    ]

    const story = offers[storyIndex]

    const progress = useSharedValue(0)  //? this is the value that tells us when a user viewed a story or not(0 - 100%)

    const storyViewDuration = 3 * 1000 //! the view time of each story before switching to the next
  
    //! This is to control the rate at which the progress bar should get to 100%
    useEffect(() => {
      progress.value = 0
      progress.value = withTiming(1, { duration: storyViewDuration, easing: Easing.linear })
    }, [storyIndex])
  
  
    // ! changing the story whenever the user presses the right or left side of the story image
    const goToPrevStory = () => {
      setStoryIndex((index) => {
        if (index === 0) {
          return 0
        }
        return index - 1
      })
    }
  
    const goToNextStory = () => {
      setStoryIndex((index) => {
        if (index === offers.length - 1) {
          return 0
        }
        return index + 1
      })
    }
  
    // ! changing to the prev user with stories when the current user story has been viewed

    useAnimatedReaction(() => progress.value, (currentVal, preVal) => {
        if (currentVal != preVal && currentVal === 1) {
        runOnJS(goToNextStory)()
        }
    })

  return (
    <View style={[styles.introBackground]}>
        <FastImage priority={FastImage.priority.high} style={[styles.introBackgroundImage]} source={story.image} />
        <Pressable onPress={goToPrevStory} style={[styles.navPressable, {left: 5}]}>
            <Icon name='arrow-left' size={fontScale(40)} color={color.white} />
        </Pressable>
        <Pressable onPress={goToNextStory} style={[styles.navPressable, { right: 5 }]}>
            <Icon name='arrow-right' size={fontScale(40)} color={color.white} />
        </Pressable>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  navPressable: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introBackground: {
   
  },
  introBackgroundImage: {
    width: '100%',
    aspectRatio: 1/1,
  }
});