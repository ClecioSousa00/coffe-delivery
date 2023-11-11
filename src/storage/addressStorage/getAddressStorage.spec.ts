import { getAddressStorage } from './getAddressStorage'
import { mocks } from '../../mock/dataMock'
import { saveAddressStorage } from './saveAddressStorage'

describe('Storage: GetAddressStorage', () => {
  it('should be return object empty when not have address storage', async () => {
    const response = await getAddressStorage()
    expect(Object.keys(response).length).toBe(0)
  })

  it('should return the storage address', async () => {
    await saveAddressStorage(mocks.address)

    const response = await getAddressStorage()

    expect(response).toEqual(mocks.address)
  })
})
