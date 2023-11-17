import { mocks } from '../../mock/dataMock'
import { getAllProductsStorage } from './getAllProductsStorage'
import { saveProductStorage } from './saveProductStorage'

describe('Storage: getAllProductsStorage', () => {
  it('should get the products in the storage', async () => {
    await saveProductStorage(mocks.productsStorage[0])
    const response = await getAllProductsStorage()

    expect(response).toEqual(mocks.productsStorage)
  })

  it('should return empty array if there are no products in the storage', async () => {
    const response = await getAllProductsStorage()

    expect(Object.keys(response).length).toBe(0)
  })
})
