import AsyncStorage from '@react-native-async-storage/async-storage'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { mocks } from '../mock/dataMock'

import { useCardProduct } from './useCartProduct'
import { ProductCartProvider } from '../contexts/contextProductsStorage'
import { getAllProductsStorage } from '../storage/productCart/getAllProductsStorage'

describe('Hook: useCartProduct', () => {
  it('should check whether a new product has been added', async () => {
    const handleTotalPrice = jest.fn()
    const product = mocks.productsStorage[0]

    const { result } = renderHook(
      () => useCardProduct({ product, handleTotalPrice }),
      {
        wrapper: ProductCartProvider,
      },
    )

    act(() => {
      result.current.handleIncrementCoffee()
    })

    await waitFor(() => {
      expect(handleTotalPrice).toHaveBeenCalledWith(product.data.price)
    })
    expect(result.current.quantity).toBe(product.quantity + 1)
  })
  it('should check whether a new product has been decremented', async () => {
    const handleTotalPrice = jest.fn()
    const product = mocks.productsStorage[1]

    const { result } = renderHook(
      () => useCardProduct({ product, handleTotalPrice }),
      {
        wrapper: ProductCartProvider,
      },
    )

    act(() => {
      result.current.handleDecrementCoffee()
    })

    await waitFor(() => {
      expect(handleTotalPrice).toHaveBeenCalledWith(product.data.price * -1)
    })
    expect(result.current.quantity).toBe(product.quantity - 1)
  })
  it('should not decrease if you have 1 product', async () => {
    const handleTotalPrice = jest.fn()
    const product = mocks.productsStorage[0]

    const { result } = renderHook(
      () => useCardProduct({ product, handleTotalPrice }),
      {
        wrapper: ProductCartProvider,
      },
    )

    act(() => {
      result.current.handleDecrementCoffee()
    })

    await waitFor(() => {
      expect(handleTotalPrice).not.toBeCalled()
    })
  })

  it('should remove the product', async () => {
    const handleTotalPrice = jest.fn()
    const product = mocks.productsStorage[0]
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValueOnce(JSON.stringify(mocks.productsStorage))
    const { result } = renderHook(
      () => useCardProduct({ product, handleTotalPrice }),
      {
        wrapper: ProductCartProvider,
      },
    )

    await waitFor(() => result.current.quantity === product.quantity)

    await act(async () => {
      result.current.handleRemoveProduct(product.data.id)
    })

    const response = await getAllProductsStorage()
    expect(response).toHaveLength(1)
  })

  it('should throw an error if there is an issue with AsyncStorage', async () => {
    const handleTotalPrice = jest.fn()
    const product = mocks.productsStorage[0]

    const consoleSpy = jest
      .spyOn(console, 'log')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementationOnce(() => {})

    jest.spyOn(AsyncStorage, 'setItem').mockImplementation(() => {
      throw new Error()
    })

    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValueOnce(JSON.stringify(mocks.productsStorage))

    const { result } = renderHook(
      () => useCardProduct({ product, handleTotalPrice }),
      {
        wrapper: ProductCartProvider,
      },
    )

    await waitFor(() => result.current.quantity === product.quantity)

    await act(async () => {
      result.current.handleRemoveProduct(product.data.id)
    })

    expect(consoleSpy).toBeCalled()
  })
})
