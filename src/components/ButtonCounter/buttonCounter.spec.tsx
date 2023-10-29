import React from 'react'
import { render, screen } from '@testing-library/react-native'

import { ButtonCounter } from '.'
import { renderWithThemeProvider } from '../../__tests__/utils/renderWithThemeProvider'

const handleIncrementMock = jest.fn()
const handleDecrementMock = jest.fn()
describe('Component: ButtonCounter', () => {
  it('if passed quantity show the correctly', () => {
    render(
      <ButtonCounter
        quantity={1}
        handleIncrement={handleIncrementMock}
        handleDecrement={handleDecrementMock}
      />,
      { wrapper: renderWithThemeProvider },
    )
    const buttonComponent = screen.getByText('1')
    expect(buttonComponent).toBeTruthy()
  })
})
