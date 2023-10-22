import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { FadeInUp } from 'react-native-reanimated'

type Props = {
  data: DataListCoffeeProps
  index: number
}

export const CardCatalogCoffee = ({ data, index }: Props) => {
  const navigation = useNavigation<StackRoutesProps>()

  return (
    <S.Container
      entering={FadeInUp.delay(index * 100)}
      onPress={() => navigation.navigate('product', { id: data.id })}
      style={{
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
          height: 6,
          width: 6,
        },
        shadowOpacity: 0.6,
      }}
      activeOpacity={0.7}
    >
      <S.ImageCoffee source={data.image} />
      <S.Content>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
        <S.ContentPrice>
          <S.TextPrice>R$</S.TextPrice>
          <S.NumberPrice>{data.price}</S.NumberPrice>
        </S.ContentPrice>
      </S.Content>
    </S.Container>
  )
}
