import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'
import { CardCatalogCoffee } from '.'

import { mocks } from '../../../__tests__/mock/dataMock'
import { CustomRender } from '../../../__tests__/utils/CustomRender'

describe('Component: CardCatalogCoffee', () => {
  it('should pressable button passed id correctly', () => {
    const mockNavigate = jest.fn()

    render(
      <CardCatalogCoffee
        index={1}
        data={mocks.product}
        onPress={() => mockNavigate('product', { id: mocks.product.id })}
      />,
      {
        wrapper: CustomRender,
      },
    )
    const button = screen.getByTestId('button-card')

    fireEvent.press(button)
    expect(mockNavigate).toHaveBeenCalledWith('product', {
      id: mocks.product.id,
    })
  })
})
