import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../src/styles/theme'

export const CustomRender: React.FC = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  )
}
