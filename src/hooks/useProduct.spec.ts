import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

import { act, renderHook, waitFor } from '@testing-library/react-native'
import { mocks } from '../mock/dataMock'

import { useProduct } from './useProduct'

import { ProductCartProvider } from '../contexts/contextProductsStorage'

import { getAllProductsStorage } from '../storage/productCart/getAllProductsStorage'

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}))

describe('Hook: useProduct', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should select the size product', async () => {
    const sizeCoffee = 114
    const { result } = renderHook(() => useProduct(mocks.product.id))

    act(() => result.current.handleSelectedOption(sizeCoffee))

    await waitFor(() => expect(result.current.optionSelected).toBe(sizeCoffee))

    // const priceSize = Number(
    //   (result.current.dataCoffee.price / sizeCoffee[1]) * sizeCoffee,
    // )

    // const newPrice = Number(priceSize * result.current.quantityCoffee).toFixed(
    //   2,
    // )

    expect(result.current.price).toBe('7.32')
  })

  it('should increase the quantity of the product', async () => {
    const { result } = renderHook(() => useProduct(mocks.product.id))

    act(() => result.current.handleIncrementCoffee())

    await waitFor(() =>
      expect(result.current.quantityCoffee).toBeGreaterThan(1),
    )
  })
  it('should decrease the quantity of the product', async () => {
    const { result } = renderHook(() => useProduct(mocks.product.id))

    act(() => result.current.handleIncrementCoffee())

    await waitFor(() =>
      expect(result.current.quantityCoffee).toBeGreaterThan(1),
    )

    act(() => result.current.handleDecrementCoffee())

    await waitFor(() => expect(result.current.quantityCoffee).toBe(1))
  })
  it('should not decrease if you have 1 product', async () => {
    const { result } = renderHook(() => useProduct(mocks.product.id))

    act(() => result.current.handleDecrementCoffee())

    await waitFor(() => expect(result.current.quantityCoffee).toBe(1))
  })

  it('should save a new product in storage and show toast correctly', async () => {
    const { result } = renderHook(() => useProduct(mocks.product.id), {
      wrapper: ProductCartProvider,
    })
    const { navigate } = useNavigation()

    await act(() => result.current.handleAddProductToCart())

    const response = await getAllProductsStorage()

    expect(response[0].data.name).toBe(mocks.product.name)

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'productToast',
      props: {
        product: response[0],
      },
    })
    expect(navigate).toHaveBeenCalled()
  })
  it('should throw an error if there is an issue with AsyncStorage', async () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementationOnce(() => {})

    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(() => {
      throw new Error()
    })

    const { result } = renderHook(() => useProduct(mocks.product.id), {
      wrapper: ProductCartProvider,
    })
    await waitFor(() => result.current.price !== null)

    await act(async () => result.current.handleAddProductToCart())

    expect(consoleSpy).toBeCalled()
  })
  it('should not save the product if it is in storage', async () => {
    jest
      .spyOn(AsyncStorage, 'getItem')
      .mockResolvedValue(JSON.stringify(mocks.productsStorage))

    const { result } = renderHook(() => useProduct(mocks.product.id), {
      wrapper: ProductCartProvider,
    })
    const { navigate } = useNavigation()

    await waitFor(() => result.current.price !== null)

    await act(async () => result.current.handleAddProductToCart())

    await waitFor(() => expect(Toast.show).toBeCalledTimes(0))
    expect(navigate).toBeCalledTimes(0)
  })
})
