import * as S from './styles'

import { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components/native'

import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'

import { ButtonOptionsSelect } from '@/components/ButtonOptionsSelect'
import { Button } from '@/components/Button'
import { ButtonCounter } from '@/components/ButtonCounter'
import { Tag } from '@/Tag'

import coffee from '../../assets/Coffee.png'

import { dataListCoffee } from '@/dataListCoffee'
import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { ButtonCart } from '@/components/ButtonCart'

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
  const [priceSizeMediumCoffee, setPriceSizeMediumCoffee] = useState<
    number | null
  >(null)

  const navigation = useNavigation<StackRoutesProps>()
  const route = useRoute()
  const theme = useTheme()

  const { id } = route.params as ParamsProps

  const handleSelectedOption = (item: number) => {
    if (item === optionSelected) {
      setOptionSelected(null)
      setDataCoffee({ ...dataCoffee, price: priceSizeMediumCoffee })
      return
    }
    setOptionSelected(item)
    const newPrice = (priceSizeMediumCoffee / sizeCoffee[1]) * item

    setDataCoffee({ ...dataCoffee, price: Number(newPrice.toFixed(2)) })
  }

  const handleIncrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState + 1)
  }
  const handleDecrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState - 1)
  }

  const handleAddProductToCart = () => {
    navigation.navigate('cart')
  }

  useEffect(() => {
    const selectedProductForId = dataListCoffee.find((item) => item.id === id)
    setDataCoffee({ ...selectedProductForId })
    setPriceSizeMediumCoffee(selectedProductForId.price)
  }, [id])

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

        {/* <S.TagContent>
          <S.TagText>{dataCoffee.type}</S.TagText>
        </S.TagContent> */}

        <S.ContentHeader>
          <S.NameCoffee>{dataCoffee.name}</S.NameCoffee>
          <S.ContentPrice>
            <S.TextPrice>R$</S.TextPrice>
            <S.ValuePrice>{dataCoffee.price}</S.ValuePrice>
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
            handleIncrement={handleIncrementCoffee}
            handleDecrement={handleDecrementCoffee}
          />
          <Button
            disable={optionSelected !== null}
            text="adicionar"
            onPress={() => handleAddProductToCart()}
          />
        </S.ContainerInput>
      </S.Footer>
    </S.Container>
  )
}
