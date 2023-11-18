import AsyncStorage from '@react-native-async-storage/async-storage'
import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveProductStorage } from './saveProductStorage'

describe('Storage: saveProductStorage', () => {
  it('should save new product in the storage', async () => {
    await saveProductStorage(mocks.productsStorage[0])
    const response = await getAllProductsStorage()

    expect(response.length).toBe(1)
  })
  it('should throw an error if there is an issue with AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(
      saveProductStorage(mocks.productsStorage[0]),
    ).rejects.toThrowError()
  })
})
