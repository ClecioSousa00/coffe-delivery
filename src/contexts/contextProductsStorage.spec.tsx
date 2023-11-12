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
})
