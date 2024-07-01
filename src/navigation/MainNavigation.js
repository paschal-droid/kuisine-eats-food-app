import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import { Details, Track, Welcome } from "../screens";
import TabNavigation from "./TabNavigation";


const Stack = createNativeStackNavigator()

export const NotAuthenticated = () => {
    return (
        <Stack.Navigator screenOptions={options} >
            <Stack.Screen options={{ animation: 'fade_from_bottom' }} component={Welcome} name={Routes.Welcome} />
        </Stack.Navigator>
    )
}

export const Authenticated = () => {
    return (
        <Stack.Navigator screenOptions={options} >
            <Stack.Screen options={{ animation: 'slide_from_left' }} component={TabNavigation} name={Routes.Tabs} />
            <Stack.Screen options={{ animation: 'slide_from_bottom' }} component={Details} name={Routes.Details} />
            <Stack.Screen options={{ animation: 'slide_from_bottom' }} component={Track} name={Routes.Track} />
            
        </Stack.Navigator>
    )
}


const options = {
    header: ()=> null,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
}

const screenOptions = {
    animation: 'slide_from_bottom'
}

