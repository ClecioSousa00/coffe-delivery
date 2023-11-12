import AsyncStorage from '@react-native-async-storage/async-storage'
import { PRODUCT_STORAGE_KEY } from '../../storage/storageConfig'
import { ProductStorage } from '@/types/dataListCoffeType'

export const getAllProductsStorage = async () => {
  try {
    const storage = await AsyncStorage.getItem(PRODUCT_STORAGE_KEY)
    const productsStorage: ProductStorage[] = storage ? JSON.parse(storage) : []
    return productsStorage
  } catch (error) {
    throw new Error()
  }
}
