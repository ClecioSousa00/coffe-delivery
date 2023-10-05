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
  disable?: boolean
} & RectButtonProps

export const Button = ({ color, text, disable = true, ...rest }: Props) => {
  return (
    <S.Button enabled={disable} color={color} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
