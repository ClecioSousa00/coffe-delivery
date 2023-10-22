import * as S from './styles'
import { Minus, Plus } from 'phosphor-react-native'
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '../ButtonIcon'

type Props = {
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export const ButtonCounter = ({
  quantity,
  handleIncrement,
  handleDecrement,
}: Props) => {
  const theme = useTheme()
  // const inputStyle = useSharedValue(0)

  // const animatedInputStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: interpolateColor(
  //       inputStyle.value,
  //       [0, 1],
  //       ['transparent', theme.colors.gray_500],
  //     ),
  //   }
  // })

  // const onPressIn = () => {
  //   inputStyle.value = 1
  // }
  // const onPressOut = () => {
  //   inputStyle.value = 0
  // }

  return (
    <S.ContentInput>
      {/* <S.ButtonInput
        onPress={handleDecrement}
        style={animatedInputStyle}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
    </S.ButtonInput> */}
      <ButtonIcon isSelected={false} onPress={handleDecrement}>
        <Minus color={theme.colors.purple} size={20} weight="bold" />
      </ButtonIcon>
      <S.InputNumber>{quantity}</S.InputNumber>
      <ButtonIcon isSelected={false} onPress={handleIncrement}>
        <Plus color={theme.colors.purple} size={20} weight="bold" />
      </ButtonIcon>
      {/* <S.ButtonInput onPress={handleIncrement}>
        <Plus color={theme.colors.purple} size={20} weight="bold" />
      </S.ButtonInput> */}
    </S.ContentInput>
  )
}
