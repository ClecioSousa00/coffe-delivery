import AsyncStorage from '@react-native-async-storage/async-storage'

import { PRODUCT_STORAGE_KEY } from '../../storage/storageConfig'

import { ProductStorage } from '../../types/dataListCoffeType'

export const saveAllProductsStorage = async (
  productsList: ProductStorage[],
) => {
  try {
    const storage = JSON.stringify(productsList)
    await AsyncStorage.setItem(PRODUCT_STORAGE_KEY, storage)
  } catch (error) {
    throw new Error()
  }
}
