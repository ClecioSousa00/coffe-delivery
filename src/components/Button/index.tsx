import { RectButtonProps } from 'react-native-gesture-handler'
import * as S from './styles'

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
} & RectButtonProps

export const Button = ({ color, text, ...rest }: Props) => {
  return (
    <S.Button color={color} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
