import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import BootSplash from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer onReady={() => {BootSplash.hide()}}>
          <ThemeProvider>
            <RootNavigation/>
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
