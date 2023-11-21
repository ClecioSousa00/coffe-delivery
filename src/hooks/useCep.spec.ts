import { act, renderHook } from '@testing-library/react-native'
import { useCep } from './useCep'
import { mocks } from '../mock/dataMock'
import { useNavigation } from '@react-navigation/native'
import { getAddressStorage } from '../storage/addressStorage/getAddressStorage'
import { AddressStorageProps } from '@/types/addressStorage'

describe('Hook: useCep', () => {
  it('should save the city and state in AsyncStorage', async () => {
    const { result } = renderHook(() => useCep())
    const { navigate } = useNavigation()

    act(() => result.current.handleSubmitForm(mocks.addressMock))

    const response = await getAddressStorage()

    expect(response.city).toEqual(mocks.addressMock.city)
    expect(navigate).toHaveBeenCalledWith('purchaseCompleted')
  })
})
