import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'
import { CardCatalogCoffee } from '.'

import { mocks } from '../../mock/dataMock'
import { CustomRender } from '../../../__tests__/utils/CustomRender'
import { useNavigation } from '@react-navigation/native'

describe('Component: CardCatalogCoffee', () => {
  it('check if the navigation has been called', () => {
    render(<CardCatalogCoffee index={1} data={mocks.product} />, {
      wrapper: CustomRender,
    })
    const button = screen.getByTestId('button-card')

    fireEvent.press(button)
    const { navigate } = useNavigation()
    expect(navigate).toHaveBeenCalled()
  })
  it('should call onPress with correct id', () => {
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
