import * as S from './styles'

import { useNavigation, useRoute } from '@react-navigation/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { useTheme } from 'styled-components/native'

import { ArrowLeft } from 'phosphor-react-native'

import { ButtonOptionsSelect } from '@/components/ButtonOptionsSelect'
import { Button } from '@/components/Button'
import { ButtonCounter } from '@/components/ButtonCounter'
import { ButtonCart } from '@/components/ButtonCart'
import { Tag } from '@/components/Tag'

import coffee from '../../assets/Coffee.png'

import { StackRoutesProps } from '@/routes/stack.routes'
import { View } from 'react-native'
import { useProduct } from '@/hooks/useProduct'
import { useProductsStorage } from '@/contexts/contextProductsStorage'

type ParamsProps = {
  id: number
}

export const Product = () => {
  const navigation = useNavigation<StackRoutesProps>()
  const route = useRoute()
  const theme = useTheme()
  const { id } = route.params as ParamsProps
  const {
    dataCoffee,
    handleAddProductToCart,
    handleDecrementCoffee,
    handleIncrementCoffee,
    handleSelectedOption,
    optionSelected,
    price,
    quantityCoffee,
    sizeCoffee,
  } = useProduct(id)
  const { dataProductsCart } = useProductsStorage()

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={theme.colors.white} size={24} />
          </TouchableOpacity>
          <ButtonCart
            onPress={() => navigation.navigate('cart')}
            quantityProducts={dataProductsCart.length}
          />
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
