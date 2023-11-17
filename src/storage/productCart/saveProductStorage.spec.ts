import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveProductStorage } from './saveProductStorage'

describe('Storage: saveProductStorage', () => {
  it('should save new product in the storage', async () => {
    await saveProductStorage(mocks.productsStorage[0])
    const response = await getAllProductsStorage()

    expect(response.length).toBe(1)
  })
})
