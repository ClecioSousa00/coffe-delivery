import AsyncStorage from '@react-native-async-storage/async-storage'

import { PRODUCT_STORAGE_KEY } from '../storageConfig'

import { ProductStorage } from '../../types/dataListCoffeType'

import { getAllProductsStorage } from './getAllProductsStorage'

export const saveProductStorage = async (newProduct: ProductStorage) => {
  try {
    const productsStorage = await getAllProductsStorage()

    const storage = JSON.stringify([...productsStorage, newProduct])
    await AsyncStorage.setItem(PRODUCT_STORAGE_KEY, storage)
  } catch (error) {
    throw new Error()
  }
}
