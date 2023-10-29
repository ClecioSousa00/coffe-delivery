import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../styles/theme'

export const renderWithThemeProvider: React.FC = ({
  children,
}: {
  children: ReactNode
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
