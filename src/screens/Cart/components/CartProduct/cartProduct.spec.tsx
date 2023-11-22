import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../../../../__tests__/utils/CustomRender'

import { mocks } from '../../../../mock/dataMock'

import { getAllProductsStorage } from '../../../../storage/productCart/getAllProductsStorage'

import { CartProduct } from '.'

import { ProductCartProvider } from '../../../../contexts/contextProductsStorage'

describe('Component: CartProduct', () => {
  it('should show the product correctly', () => {
    const handleTotalPrice = jest.fn()
    const productNameMock = mocks.productsStorage[0].data.name
    render(
      <CartProduct
        product={mocks.productsStorage[0]}
        handleTotalPrice={handleTotalPrice}
      />,
    )
    const productName = screen.getByText(productNameMock)
    expect(productName).toBeVisible()
  })
  it('should increase the quantity of product', async () => {
    const handleTotalPrice = jest.fn()
    const productQuantity = mocks.productsStorage[0].quantity
    render(
      <CartProduct
        product={mocks.productsStorage[0]}
        handleTotalPrice={handleTotalPrice}
      />,
    )
    const buttonIncrease = screen.getByTestId('button-increment')

    fireEvent.press(buttonIncrease)
    const quantity = screen.getByTestId('button-quantity')

    await waitFor(() => {
      expect(quantity.children[0]).toBe(String(productQuantity + 1))
    })
  })
  it('should decrease the quantity of product', async () => {
    const handleTotalPrice = jest.fn()
    const productQuantity = mocks.productsStorage[1].quantity

    render(
      <CartProduct
        product={mocks.productsStorage[1]}
        handleTotalPrice={handleTotalPrice}
      />,
    )

    const buttonDecrease = screen.getByTestId('button-decrement')

    fireEvent.press(buttonDecrease)
    const quantity = screen.getByTestId('button-quantity')

    await waitFor(() => {
      expect(quantity.children[0]).toBe(String(productQuantity - 1))
    })
  })
  it('should remove the product', async () => {
    const handleTotalPrice = jest.fn()
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValueOnce(JSON.stringify([mocks.productsStorage[0]]))

    render(
      <ProductCartProvider>
        <CartProduct
          product={mocks.productsStorage[0]}
          handleTotalPrice={handleTotalPrice}
        />
      </ProductCartProvider>,
    )

    await waitFor(() =>
      expect(screen.getByText(mocks.productsStorage[0].data.name)).toBeTruthy(),
    )
    const buttonRemove = screen.getByTestId('button-remove')

    fireEvent.press(buttonRemove)
    const response = await getAllProductsStorage()

    expect(response).toHaveLength(0)
  })
})
