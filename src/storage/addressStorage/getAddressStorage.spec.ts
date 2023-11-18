import AsyncStorage from '@react-native-async-storage/async-storage'
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

  it('should throw an error if there is an issue with AsyncStorage', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce(() => {
      throw new Error()
    })

    await expect(getAddressStorage()).rejects.toThrowError()
  })
})
