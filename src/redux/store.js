import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import User from "./reducers/User";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Food from "./reducers/Food";


const rootReducer = combineReducers({
    user: User,
    food: Food
})

const configStorage = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
}

const persistorReducer = persistReducer(configStorage, rootReducer)

const store = configureStore({
    reducer: persistorReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({serializableCheck: false})
    }
})

export default store;

export const persistor = persistStore(store)

// persistor.purge()  //! this is used to reset the state from all the reducers created (users, donation, categories)