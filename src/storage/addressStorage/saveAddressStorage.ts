import AsyncStorage from '@react-native-async-storage/async-storage'
import { AddressStorageProps } from '@/types/addressStorage'
import { ADDRESS_STORAGE_KEY } from '../storageConfig'

export const saveAddressStorage = async (data: AddressStorageProps) => {
  try {
    await AsyncStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    throw new Error(error)
  }
}
