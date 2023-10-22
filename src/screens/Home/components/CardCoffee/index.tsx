import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInRight,
} from 'react-native-reanimated'

import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { StackRoutesProps } from '@/routes/stack.routes'
import { Tag } from '@/components/Tag'

type Props = {
  data: DataListCoffeeProps
  index: number
}

export const CardCoffee = ({ data, index }: Props) => {
  const navigation = useNavigation<StackRoutesProps>()
  // const scale = useSharedValue(1)

  // const animatedButtonStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ scale: scale.value }],
  //   }
  // })

  // const onPressIn = () => {
  //   scale.value = withTiming(1.1)
  // }

  // const onPressOut = () => {
  //   scale.value = withTiming(1)
  // }

  return (
    <S.Container
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
    >
      <S.ImageCoffee source={data.image} />
      <Tag tagName={data.type} />
      {/* <S.TypeContent>
        <S.TextType>{data.type}</S.TextType>
      </S.TypeContent> */}
      <S.TextName>{data.name}</S.TextName>
      <S.TextDescription>{data.description}</S.TextDescription>
      <S.ContentPrice>
        <S.TextPrice>R$</S.TextPrice>
        <S.NumberPrice>{data.price}</S.NumberPrice>
      </S.ContentPrice>
    </S.Container>
  )
}
