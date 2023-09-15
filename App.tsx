import React from 'react'
import { StatusBar } from 'react-native'

import 'react-native-gesture-handler'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/styles/theme'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) return

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={theme.colors.gray_100}
      />
      <Routes />
    </ThemeProvider>
  )
}
