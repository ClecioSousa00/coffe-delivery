import React, { ReactNode } from 'react'

import { render, screen } from '@testing-library/react-native'

import { Tag } from '.'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../styles/theme'

const Providers: React.FC = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

describe('Component: Tag', () => {
  it('Must have a specific background', () => {
    render(<Tag tagName="tradicional" grayBackground />, { wrapper: Providers })

    const tagComponent = screen.getByTestId('tag')

    expect(tagComponent.props.style[0].backgroundColor).toEqual(
      theme.colors.gray_200,
    )
  })
  it('Must have a specific color text', () => {
    render(<Tag tagName="tradicional" tagColor />, { wrapper: Providers })

    const TextTagComponent = screen.getByTestId('text-tag')

    expect(TextTagComponent.props.style[0].color).toEqual(theme.colors.white)
  })
})
