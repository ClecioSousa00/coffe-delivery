import AsyncStorage from '@react-native-async-storage/async-storage'
import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveAllProductsStorage } from './saveAllProductStorage'

describe('Storage: saveAllProductsStorage', () => {
  it('should save products list in the storage', async () => {
    await saveAllProductsStorage(mocks.productsStorage)
    const response = await getAllProductsStorage()
    expect(response).toEqual(mocks.productsStorage)
  })

  it('should throw an error if there is an issue with AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(
      saveAllProductsStorage(mocks.productsStorage),
    ).rejects.toThrowError()
  })
})
