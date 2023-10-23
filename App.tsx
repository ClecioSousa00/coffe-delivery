import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/styles/theme'

import { Routes } from './src/routes'
import { ProductCartProvider } from '@/contexts/contextProductsStorage'
import { Address } from '@/screens/Address'
import Toast from 'react-native-toast-message'
import { ToastMessage } from '@/components/ToastMessage'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) return

  // const toastConfig = {
  //   productToast: () => <ToastMessage />,
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProductCartProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            <Routes />
            {/* <Toast position="bottom" bottomOffset={5} config={toastConfig} /> */}
          </SafeAreaView>
        </ThemeProvider>
      </ProductCartProvider>
    </GestureHandlerRootView>
  )
}
