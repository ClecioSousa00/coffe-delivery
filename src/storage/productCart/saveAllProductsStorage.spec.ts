import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveAllProductsStorage } from './saveAllProductStorage'

describe('Storage: saveAllProductsStorage', () => {
  it('should save products list in the storage', async () => {
    await saveAllProductsStorage(mocks.productsStorage)
    const response = await getAllProductsStorage()
    expect(response).toEqual(mocks.productsStorage)
  })
})
