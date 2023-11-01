import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { FadeInRight } from 'react-native-reanimated'

import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { Tag } from '../../../../components/Tag'
import { PressableProps } from 'react-native'

type Props = {
  data: DataListCoffeeProps
  index: number
} & PressableProps

export const CardCoffee = ({ data, index, ...rest }: Props) => {
  const navigation = useNavigation<StackRoutesProps>()

  return (
    <S.Container
      testID="button-card"
      entering={FadeInRight.delay(index * 200)}
      style={{
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: {
          height: 6,
          width: 6,
        },
        shadowOpacity: 0.6,
      }}
      onPress={() => navigation.navigate('product', { id: data.id })}
      {...rest}
    >
      <S.ImageCoffee source={data.image} />
      <Tag tagName={data.type} />

      <S.TextName>{data.name}</S.TextName>
      <S.TextDescription>{data.description}</S.TextDescription>
      <S.ContentPrice>
        <S.TextPrice>R$</S.TextPrice>
        <S.NumberPrice>{data.price}</S.NumberPrice>
      </S.ContentPrice>
    </S.Container>
  )
}
