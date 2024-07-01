import { ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FoodCard, HeaderTitle, Icon, Input, Loading, Recommended, SearchResults, Tabs } from '../../components'
import { scaling } from '../../themes/themes'
import { useTheme } from '../../context/ThemeContext'
import { addToCart, calculateCartPrice, fetchFoodItems, generateImageUrlForFoodItems, resetToDefault } from '../../redux/reducers/Food'
import { FlatList } from 'react-native'
import { shuffleArray } from '../../constants'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Routes } from '../../navigation/Routes'

const {horizontalScale, verticalScale, fontScale} = scaling

const Home = ({navigation}) => {
  const {theme} = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.food)
  const [hottest, setHottest] = useState([])
  const [popular, setPopular] = useState([])
  const [newCombo, setNewCombo] = useState([])
  const [top, setTop] = useState([])

  const [displayedList, setDisplayedList] = useState([])
  const [results, setResults] = useState([])
  const [id, setId] = useState(0)

  const tabBarHeight = useBottomTabBarHeight()

  const categoryList = [
    {categoryId: 0, name: 'Hottest'},
    {categoryId: 1, name: 'Popular'},
    {categoryId: 2, name: 'New Combo'},
    {categoryId: 3, name: 'Top'},
  ]

  const saveShuffledListToState = (index) => {
    const shuffledList = shuffleArray(items, 4)
    switch (index) {
      case 1:
        setHottest(shuffledList)
        setDisplayedList(shuffledList)
        break
      case 2:
        setPopular(shuffledList)
        break
      case 3:
        setNewCombo(shuffledList)
        break
      case 4:
        setTop(shuffledList)
        break
      default:
        console.log('invalid index');
        break;
    }
  }
    
    useEffect(() => {
    const fetchData = () => {
      for (let i = 1; i <= 4; i++) {
        saveShuffledListToState(i)
      }
      
      }
      fetchData()

  }, [items.length])

  useMemo(() => {
    switch (id) {
      case 0:
        setDisplayedList(hottest)
        break
      case 1:
        setDisplayedList(popular)
        break
      case 2:
        setDisplayedList(newCombo)
        break
      case 3:
        setDisplayedList(top)
        break
    
      default:
        console.log('something went wrong in setting the right stuff');
        break;
    }   
  }, [id])

  const handleTextChange = searchValue => {
    setSearchTerm(searchValue)
    handleSearch(searchValue)
  }

  const handleSearch = (param) => {
    if(param != '' ){
      foodRef.current.scrollToOffset({animated: true, offset: 0})
      setResults([...items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))])
    }
  }

  const handleClose = () => {
    foodRef.current.scrollToOffset({animated: true, offset: 0})
    setResults([])
    setSearchTerm('')
  }

  const handleAddToCart = (item) => {
    const {_id, name, image, _type} = item
    const portion = ['S', 'M', 'L']
    const price = {price: item.price[1], currency: '$', size: portion[1]}
    dispatch(addToCart({id: _id, name, image, type: _type, prices: [{...price, quantity: 1}]}))
    dispatch(calculateCartPrice())
    ToastAndroid.showWithGravity(`${name} was added to cart`, ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  // useEffect(() => {
  //   dispatch(resetToDefault())
  // }, [])

const foodRef = useRef(null)

  
  return (
    <SafeAreaView style={[styles.homeContainer, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar backgroundColor={theme.backgroundColor} barStyle={theme.statusBarTextColor} />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <HeaderTitle />
        <View style={[styles.searchContainer]}>
          <Input isRow={true} search={searchTerm} handleTextChange={(val) => handleTextChange(val)} onClose={()=> handleClose()} onSearch={() => handleSearch()} isIcon={true} placeholderText='Search for any food to order' />
          <Icon name='option' size={fontScale(25)} color={theme.headerColor}  />
        </View>

        <View style={styles.recommendedCategory}>
          {results.length != 0 && searchTerm != '' ?
          <SearchResults result={results} />  
          : 
          <Recommended />
        }
        </View>

        <View style={styles.mainCategory}>
          <FlatList
            horizontal
            contentContainerStyle={{gap: 5}}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <Tabs
                tabId={item.categoryId}
                onPress={() => {
                  setId(item.categoryId)
                  foodRef.current.scrollToOffset({animated: true, offset: 0})
                }}
                isInactive={item.categoryId !== id}
                name={item.name}
              />
            )}
          />
          {/* Dynamic display of Coffee based on it's categories!  */}
           {displayedList && (
            <View style={[styles.coffeeContainer]}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginBottom: tabBarHeight, gap: 23}}
                data={displayedList}
                ref={foodRef}
                keyExtractor={(item) => item._id}
                ListEmptyComponent={<Loading defaultBg={true} />}
                renderItem={({item}) => (
                  <FoodCard item={item} onAddPress={() => handleAddToCart(item)} favorite={item.favorite} onPress={() => navigation.navigate(Routes.Details, {id: item._id,})} />
                )}
              />
            </View>
           )}
       
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: horizontalScale(22),
    flex: 1
  },
  searchContainer: {
    marginTop: verticalScale(25),
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  },
  recommendedCategory: {
    marginTop: verticalScale(25)
  },
  mainCategory: {
    marginVertical: verticalScale(20),
    gap: 20
  }
})