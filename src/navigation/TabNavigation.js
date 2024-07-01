import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";

import { Routes } from "./Routes";

import { CartHeader, Icon, TabText } from "../components";
import {color, scaling} from '../themes/themes'
import { useTheme } from "../context/ThemeContext";
import { useSelector } from "react-redux";
import { Cart, Favorites, Home, Order } from "../screens";
import { StyleSheet } from "react-native";

const {horizontalScale, verticalScale, fontScale} = scaling

const Tab = createBottomTabNavigator()


const TabNavigation = () => {
  const {theme} = useTheme();
  
  const Empty = () => {
    return(null)
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: verticalScale(65),
          position: 'absolute',
          elevation: 10,
          borderTopWidth: 0,
          backgroundColor: color.black2,
          borderTopLeftRadius: horizontalScale(25),
          borderTopRightRadius: horizontalScale(25),
        },
        tabBarBackground: ()=> (<BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyles} />)

      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name={focused ? 'home' : 'home-inactive'} size={25} color={focused ? theme.accentColor : color.white} />
        ), animation: 'slide_from_right', tabBarLabelPosition: 'below-icon',
        tabBarLabel: ({focused}) => (<TabText tabText="Home" isFocused={focused} />),
        tabBarItemStyle: {paddingVertical: verticalScale(10)},
        headerShown: false
        }}
        component={Home}
        name={Routes.Home}
        />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name={'cart'} size={25} color={focused ? theme.accentColor : color.white} />
        ), animation: 'slide_from_right', tabBarLabelPosition: 'below-icon',
        tabBarLabel: ({focused}) => (<TabText tabText="Cart" isFocused={focused} />),
        tabBarItemStyle: {paddingVertical: verticalScale(10)},
        headerShown: false
        }}
        component={Cart}
        name={Routes.Cart}
        />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name={focused ? 'heart-filled' : 'heart'} size={25} color={focused ? theme.accentColor : color.white} />
        ) , animation: 'slide_from_right', tabBarLabelPosition: 'below-icon',
        tabBarLabel: ({focused}) => (<TabText tabText="Favorites" isFocused={focused} />),
        tabBarItemStyle: {paddingVertical: verticalScale(10)},
        headerShown: false
        }}
        component={Favorites}
        name={Routes.Favorites}
        />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name={focused ? 'bell' : 'bell-inactive'} size={25} color={focused ? theme.accentColor : color.white} />
        ) , animation: 'slide_from_right', tabBarLabelPosition: 'below-icon',
        tabBarLabel: ({focused}) => (<TabText tabText="Orders" isFocused={focused} />),
        tabBarItemStyle: {paddingVertical: verticalScale(10)},
        headerShown: false
        }}
        component={Order}
        name={Routes.Order}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
  height: verticalScale(80),
  position: 'absolute',
  borderTopWidth: 0,
  elevation: 0,        
},
blurViewStyles: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
},
})


export default TabNavigation