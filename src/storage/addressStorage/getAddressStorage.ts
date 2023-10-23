import AsyncStorage from '@react-native-async-storage/async-storage'
import { AddressStorageProps } from '@/types/addressStorage'
import { ADDRESS_STORAGE_KEY } from '../storageConfig'

export const getAddressStorage = async () => {
  try {
    const storage = await AsyncStorage.getItem(ADDRESS_STORAGE_KEY)
    const addressStorage: AddressStorageProps = storage
      ? JSON.parse(storage)
      : {}
    return addressStorage
  } catch (error) {
    throw new Error(error)
  }
}
