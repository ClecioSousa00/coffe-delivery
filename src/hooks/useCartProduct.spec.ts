import { act, renderHook, waitFor } from '@testing-library/react-native'
import { useCardProduct } from './useCartProduct'
import { mocks } from '../mock/dataMock'
import { ProductCartProvider } from '../contexts/contextProductsStorage'

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

  // it('should remove the product', async () => {
  //   const handleTotalPrice = jest.fn()
  //   const product = mocks.productsStorage[0]
  //   jest
  //     .spyOn(AsyncStorage, 'getItem')
  //     .mockResolvedValue(JSON.stringify(mocks.productsStorage))

  //   const { result } = renderHook(
  //     () => useCardProduct({ product, handleTotalPrice }),
  //     {
  //       wrapper: ProductCartProvider,
  //     },
  //   )

  //   act(() => {
  //     result.current.handleRemoveProduct(product.data.id)
  //   })

  //   await waitFor(() => {})
  // })
})
