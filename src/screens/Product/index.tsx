import * as S from './styles'

import { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components/native'

import { ArrowLeft, ShoppingCart, Minus, Plus } from 'phosphor-react-native'

import { ButtonOptionsSelect } from '@/components/ButtonOptionsSelect'
import { Button } from '@/components/Button'

import coffee from '../../assets/Coffee.png'

import { dataListCoffee } from '@/dataListCoffee'
import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { Tag } from '@/Tag'

type ParamsProps = {
  id: number
}
const options = ['114ml', '140ml', '227ml']

export const Product = () => {
  const [optionSelected, setOptionSelected] = useState('')
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const [dataCoffee, setDataCoffee] = useState<DataListCoffeeProps>(
    {} as DataListCoffeeProps,
  )

  const navigation = useNavigation()
  const route = useRoute()
  const theme = useTheme()

  const { id } = route.params as ParamsProps

  const handleSelectedOption = (item: string) => {
    if (item === optionSelected) {
      setOptionSelected('')
      return
    }
    setOptionSelected(item)
  }

  const handleIncrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState + 1)
  }
  const handleDecrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState - 1)
  }

  useEffect(() => {
    const SelectedProductForId = dataListCoffee.find((item) => item.id === id)
    setDataCoffee({ ...SelectedProductForId })
  }, [id])

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={theme.colors.white} size={24} />
          </TouchableOpacity>
          <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
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
          {options.map((item) => (
            <ButtonOptionsSelect
              isSelected={optionSelected === item}
              text={item}
              key={item}
              onPress={() => handleSelectedOption(item)}
            />
          ))}
        </S.ContainerOptions>
        <S.ContainerInput>
          <S.ContentInput>
            <S.ButtonInput onPress={() => handleDecrementCoffee()}>
              <Minus color={theme.colors.purple} size={20} />
            </S.ButtonInput>
            <S.InputNumber>{quantityCoffee}</S.InputNumber>
            <S.ButtonInput onPress={() => handleIncrementCoffee()}>
              <Plus color={theme.colors.purple} size={20} />
            </S.ButtonInput>
          </S.ContentInput>
          <Button text="adicionar" />
        </S.ContainerInput>
      </S.Footer>
    </S.Container>
  )
}
