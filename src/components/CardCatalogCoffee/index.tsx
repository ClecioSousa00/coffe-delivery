import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { FadeInUp } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

type Props = {
  data: DataListCoffeeProps
  index: number
} & TouchableOpacityProps

export const CardCatalogCoffee = ({ data, index, ...rest }: Props) => {
  const navigation = useNavigation<StackRoutesProps>()

  return (
    <S.Container
      testID="button-card"
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
      {...rest}
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
