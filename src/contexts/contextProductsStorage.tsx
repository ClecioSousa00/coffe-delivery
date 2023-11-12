import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { ProductStorage } from '@/types/dataListCoffeType'
import { getAllProductsStorage } from '../storage/productCart/getAllProductsStorage'

type ProductContextProps = {
  dataProductsCart: ProductStorage[]
  setProductCart: (product: ProductStorage[]) => void
}

const ProductCartContext = createContext({} as ProductContextProps)

export const ProductCartProvider = ({ children }: { children: ReactNode }) => {
  const [dataProductsCart, setDataProductsCart] = useState<ProductStorage[]>([])

  const getProductCart = async () => {
    try {
      const storage = await getAllProductsStorage()
      setDataProductsCart(storage)
    } catch (error) {
      console.log('erro ao buscar dados no storage')
    }
  }

  const setProductCart = (productList: ProductStorage[]) => {
    setDataProductsCart(productList)
  }

  useEffect(() => {
    getProductCart()
  }, [])

  return (
    <ProductCartContext.Provider value={{ dataProductsCart, setProductCart }}>
      {children}
    </ProductCartContext.Provider>
  )
}

export const useProductsStorage = () => useContext(ProductCartContext)
