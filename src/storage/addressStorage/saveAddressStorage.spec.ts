import AsyncStorage from '@react-native-async-storage/async-storage'
import { mocks } from '../../mock/dataMock'
import { getAddressStorage } from './getAddressStorage'
import { saveAddressStorage } from './saveAddressStorage'

describe('Storage: SaveAddressStorage', () => {
  it('should save the storage address', async () => {
    await saveAddressStorage(mocks.address)

    const response = await getAddressStorage()

    expect(response).toEqual(mocks.address)
  })

  it('should throw an error if there is an issue with AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(saveAddressStorage(mocks.address)).rejects.toThrowError()
  })
})
