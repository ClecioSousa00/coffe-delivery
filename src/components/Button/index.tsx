import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

// export type Props = {
//   variant:
//     | 'primaryDefault'
//     | 'primaryFocus'
//     | 'secondaryDefault'
//     | 'secondaryFocus'
//   text: string
// } & RectButtonProps
export type Props = {
  color?: string
  text: string
  isSelected?: boolean
} & TouchableOpacityProps

export const Button = ({ color, text, isSelected = false, ...rest }: Props) => {
  return (
    <S.Button disabled={isSelected} color={color} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
