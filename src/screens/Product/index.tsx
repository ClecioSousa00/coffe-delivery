import * as S from './styles'

import { useTheme } from 'styled-components/native'

import { ArrowLeft, ShoppingCart, Minus, Plus } from 'phosphor-react-native'

import coffee from '../../assets/Coffee.png'
import { ButtonOptionsSelect } from '../../components/ButtonOptionsSelect'
import { Button } from '../../components/Button'
import { useState } from 'react'

export const Product = () => {
  const [optionSelected, setOptionSelected] = useState('')
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const theme = useTheme()
  const options = ['114ml', '140ml', '227ml']

  const handleSelectedOption = (item: string) => {
    if (item === optionSelected) {
      setOptionSelected('')
      return
    }
    setOptionSelected(item)
  }

  const handleQuantityCoffee = (type: 'sum' | 'minus') => {
    if (type === 'sum') setQuantityCoffee((prevState) => prevState + 1)

    if (type === 'minus' && quantityCoffee > 1) {
      setQuantityCoffee((prevState) => prevState - 1)
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <ArrowLeft color={theme.colors.white} size={24} />
          <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
        </S.ContentHeader>

        <S.TagContent>
          <S.TagText>especial</S.TagText>
        </S.TagContent>
        <S.ContentHeader>
          <S.NameCoffee>Irlandês</S.NameCoffee>
          <S.ContentPrice>
            <S.TextPrice>R$</S.TextPrice>
            <S.ValuePrice>9,90</S.ValuePrice>
          </S.ContentPrice>
        </S.ContentHeader>
        <S.Description>
          Bebida a base de café, uísque irlandês, açúcar e Chantilly
        </S.Description>

        <S.ImageCoffee
          source={coffee}
          defaultSource={coffee}
          alt="Imagem de uma chicara de café"
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
            <S.ButtonInput onPress={() => handleQuantityCoffee('minus')}>
              <Minus color={theme.colors.purple} size={20} />
            </S.ButtonInput>
            <S.InputNumber>{quantityCoffee}</S.InputNumber>
            <S.ButtonInput onPress={() => handleQuantityCoffee('sum')}>
              <Plus color={theme.colors.purple} size={20} />
            </S.ButtonInput>
          </S.ContentInput>
          <Button text="adicionar" />
        </S.ContainerInput>
      </S.Footer>
    </S.Container>
  )
}
