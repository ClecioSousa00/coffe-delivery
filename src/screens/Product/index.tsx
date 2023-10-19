import * as S from './styles'

import { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components/native'

import { ArrowLeft } from 'phosphor-react-native'

import { ButtonOptionsSelect } from '@/components/ButtonOptionsSelect'
import { Button } from '@/components/Button'
import { ButtonCounter } from '@/components/ButtonCounter'
import { ButtonCart } from '@/components/ButtonCart'
import { Tag } from '@/Tag'

import coffee from '../../assets/Coffee.png'

import { dataListCoffee } from '@/dataListCoffee'
import { DataListCoffeeProps, ProductStorage } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { saveProductStorage } from '@/storage/productCart/saveProductStorage'
import { useProductsStorage } from '@/contexts/contextProductsStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PRODUCT_STORAGE_KEY } from '@/storage/storageConfig'
import { View } from 'react-native'

type ParamsProps = {
  id: number
}

const sizeCoffee = [114, 140, 227]

export const Product = () => {
  const [optionSelected, setOptionSelected] = useState<number | null>(null)
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const [dataCoffee, setDataCoffee] = useState<DataListCoffeeProps>(
    {} as DataListCoffeeProps,
  )
  const [priceCoffee, setPriceCoffee] = useState<number | null>(null)
  const { dataProductsCart, setProductCart } = useProductsStorage()

  const navigation = useNavigation<StackRoutesProps>()
  const route = useRoute()
  const theme = useTheme()

  const { id } = route.params as ParamsProps

  const handleSelectedOption = (size: number) => {
    if (size === optionSelected) {
      setOptionSelected(null)
      setPriceCoffee(dataCoffee.price)
      return
    }
    setOptionSelected(size)
    const newPrice = (dataCoffee.price / sizeCoffee[1]) * size
    setPriceCoffee(Number(newPrice.toFixed(2)))
  }

  const handleIncrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState + 1)
  }

  const handleDecrementCoffee = () => {
    if (quantityCoffee === 1) return
    setQuantityCoffee((prevState) => prevState - 1)
  }

  const handleAddProductToCart = async () => {
    const productIsExists = dataProductsCart.some(
      (product) => product.data.id === dataCoffee.id,
    )
    if (productIsExists) return

    const newProduct: ProductStorage = {
      data: { ...dataCoffee, price: priceCoffee },
      quantity: quantityCoffee,
      size: optionSelected,
    }
    setProductCart([...dataProductsCart, newProduct])
    try {
      await saveProductStorage(newProduct)
    } catch (error) {
      console.log('erro ao adicionar produto no carrinho', error)
    }
    navigation.navigate('cart')
  }
  // const removeProductStorage = async () => {
  //   try {
  //     await AsyncStorage.removeItem(PRODUCT_STORAGE_KEY)
  //     console.log('removeu')
  //   } catch (error) {}
  // }

  useEffect(() => {
    const selectedProductForId = dataListCoffee.find((item) => item.id === id)
    setDataCoffee({ ...selectedProductForId })
    setPriceCoffee(selectedProductForId.price)
    // removeProductStorage()
  }, [id])

  const price = Number(priceCoffee * quantityCoffee).toFixed(2)
  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={theme.colors.white} size={24} />
          </TouchableOpacity>
          <ButtonCart />
        </S.ContentHeader>
        <Tag tagName={dataCoffee.type} grayBackground tagColor />
        <S.ContentHeader>
          <S.NameCoffee>{dataCoffee.name}</S.NameCoffee>
          <S.ContentPrice>
            <S.TextPrice>R$</S.TextPrice>
            <S.ValuePrice>{price}</S.ValuePrice>
          </S.ContentPrice>
        </S.ContentHeader>
        <S.Description>{dataCoffee.description}</S.Description>

        <S.ImageCoffee
          source={coffee}
          defaultSource={coffee}
          alt="Imagem de uma xícara de café"
        />
      </S.Content>
      <S.Footer>
        <S.FooterText>Selecione o tamanho:</S.FooterText>
        <S.ContainerOptions>
          {sizeCoffee.map((item) => (
            <ButtonOptionsSelect
              key={item}
              isSelected={optionSelected === item}
              size={item}
              onPress={() => handleSelectedOption(item)}
            />
          ))}
        </S.ContainerOptions>
        <S.ContainerInput>
          <ButtonCounter
            quantity={quantityCoffee}
            handleIncrement={() => handleIncrementCoffee()}
            handleDecrement={() => handleDecrementCoffee()}
          />
          <View style={{ flex: 1 }}>
            <Button
              isSelected={optionSelected === null}
              text="adicionar"
              onPress={() => handleAddProductToCart()}
            />
          </View>
        </S.ContainerInput>
      </S.Footer>
    </S.Container>
  )
}
