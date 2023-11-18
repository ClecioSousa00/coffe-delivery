import AsyncStorage from '@react-native-async-storage/async-storage'
import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveProductStorage } from './saveProductStorage'
import { PRODUCT_STORAGE_KEY } from '../storageConfig'
import { saveAllProductsStorage } from './saveAllProductStorage'

describe('Storage: getAllProductsStorage', () => {
  beforeEach(async () => {
    // Limpa o AsyncStorage antes de cada teste
    await AsyncStorage.removeItem(PRODUCT_STORAGE_KEY)
  })

  // afterEach(() => {
  //   jest.restoreAllMocks()
  // })

  it('should get the products in the storage', async () => {
    await saveAllProductsStorage(mocks.productsStorage)
    const response = await getAllProductsStorage()

    expect(response).toEqual(mocks.productsStorage)
  })

  it('should return empty array if there are no products in the storage', async () => {
    const response = await getAllProductsStorage()

    expect(response).toHaveLength(0)
  })

  it('should throw an error if there is an issue with AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(getAllProductsStorage()).rejects.toThrowError()
  })
})
