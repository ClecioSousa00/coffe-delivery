import { act, renderHook, waitFor } from '@testing-library/react-native'
import { UseCatalogCoffee } from './useCatalogCoffee'

const typesCatalogCoffee = ['tradicionais', 'doces', 'especiais']
describe('Hook: useCatalogCoffee', () => {
  it('should show the list of products selected by type', async () => {
    const { result } = renderHook(() => UseCatalogCoffee())

    act(() => {
      result.current.handleSelectedCoffeeCatalog(typesCatalogCoffee[1])
    })

    await waitFor(() =>
      expect(result.current.dataCatalogCoffee).toHaveLength(1),
    )
  })
  it('should show the list of all products when deselecting the selected type', async () => {
    const { result } = renderHook(() => UseCatalogCoffee())

    act(() => {
      result.current.handleSelectedCoffeeCatalog(typesCatalogCoffee[1])
    })

    await waitFor(() =>
      expect(result.current.dataCatalogCoffee).toHaveLength(1),
    )
    act(() => {
      result.current.handleSelectedCoffeeCatalog(typesCatalogCoffee[1])
    })

    await waitFor(() =>
      expect(result.current.dataCatalogCoffee).toHaveLength(3),
    )
  })
  it('should filter the product list by type', async () => {
    const { result } = renderHook(() => UseCatalogCoffee())

    act(() => {
      result.current.handleSelectedCoffeeCatalog(typesCatalogCoffee[0])
    })

    await waitFor(() => {
      expect(result.current.dataCatalogCoffee[0].title).toBe('tradicional')
    })
  })
})
