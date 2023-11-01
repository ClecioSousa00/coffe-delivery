import React, { ReactElement, ReactNode } from 'react'
import { RenderOptions, render } from '@testing-library/react-native'

import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../src/styles/theme'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
