import { mocks } from '../../mock/dataMock'
import { getAddressStorage } from './getAddressStorage'
import { saveAddressStorage } from './saveAddressStorage'

describe('Storage: SaveAddressStorage', () => {
  it('should save the storage address', async () => {
    await saveAddressStorage(mocks.address)

    const response = await getAddressStorage()

    expect(response).toEqual(mocks.address)
  })
})
