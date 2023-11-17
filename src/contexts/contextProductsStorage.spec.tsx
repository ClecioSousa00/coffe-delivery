import { act, renderHook, waitFor } from '@testing-library/react-native'
import {
  ProductCartProvider,
  useProductsStorage,
} from './contextProductsStorage'
import { mocks } from '../mock/dataMock'
import { getAllProductsStorage } from '../storage/productCart/getAllProductsStorage'

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
  // it('render', async () => {
  //   jest.mock('../storage/productCart/getAllProductsStorage', () => ({
  //     getAllProductsStorage: jest
  //       .fn()
  //       .mockRejectedValue('Erro ao buscar dados no storage'),
  //   }))

  //   const { result } = renderHook(() => useProductsStorage(), {
  //     wrapper: ProductCartProvider,
  //   })

  //   // expect(console.log).toHaveBeenCalledWith('Erro ao buscar dados no storage')

  //   expect(result.current.dataProductsCart).toHaveLength(0)
  // })
})
