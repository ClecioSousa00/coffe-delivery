import AsyncStorage from '@react-native-async-storage/async-storage'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import {
  ProductCartProvider,
  useProductsStorage,
} from './contextProductsStorage'
import { mocks } from '../mock/dataMock'

describe('Context: contextProductsStorage', () => {
  it('should add the products to the state', async () => {
    const { result } = renderHook(() => useProductsStorage(), {
      wrapper: ProductCartProvider,
    })

    waitFor(() =>
      act(() => result.current.setProductCart(mocks.productsStorage)),
    )

    expect(result.current.dataProductsCart).toHaveLength(1)
  })

  it('should log an error if there is an issue with AsyncStorage', async () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementationOnce(() => {})

    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce(() => {
      throw new Error('Erro ao buscar dados no storage')
    })

    const { result } = renderHook(() => useProductsStorage(), {
      wrapper: ProductCartProvider,
    })

    await act(() => {
      waitFor(() => {
        return result.current.dataProductsCart.length === 0
      })
    })

    expect(consoleSpy).toHaveBeenCalledWith('erro ao buscar dados no storage')
  })
})
