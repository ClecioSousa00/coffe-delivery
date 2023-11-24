import AsyncStorage from '@react-native-async-storage/async-storage'
import { renderHook, act, waitFor } from '@testing-library/react-native'
import { useCartPrice } from './useCartPrice'
import { ProductCartProvider } from '../contexts/contextProductsStorage'
import { mocks } from '../mock/dataMock'

const totalPriceProductsMock = () => {
  const { productsStorage } = mocks
  const totalPrice = productsStorage.reduce((acc, product) => {
    const price = product.data.price * product.quantity
    return price + acc
  }, 0)
  return totalPrice
}

describe('Hook: useCartPrice', () => {
  it('should calculate the price of all products', async () => {
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValue(JSON.stringify(mocks.productsStorage))

    const { result } = renderHook(() => useCartPrice(), {
      wrapper: ProductCartProvider,
    })

    await waitFor(() => result.current.productsPriceTotal !== null)

    expect(result.current.productsPriceTotal).toBe(totalPriceProductsMock())
  })

  it('should calculate the new pro total when adding a product', async () => {
    const productPrice = 10.0
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValue(JSON.stringify(mocks.productsStorage))

    const { result } = renderHook(() => useCartPrice(), {
      wrapper: ProductCartProvider,
    })
    await waitFor(() => result.current.productsPriceTotal !== null)

    act(() => {
      result.current.handleProductsPriceTotal(productPrice)
    })
    const newPriceTotal = Number(
      (productPrice + totalPriceProductsMock()).toFixed(2),
    )
    expect(result.current.productsPriceTotal).toBe(newPriceTotal)
  })
})
