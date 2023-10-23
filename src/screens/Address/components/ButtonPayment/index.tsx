import * as S from './styles'
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

export type ButtonPaymentProps = {
  text: string
  isActive: boolean
  children: ReactNode
} & TouchableOpacityProps

export const ButtonPayment = ({
  text,
  isActive,
  children,
  ...rest
}: ButtonPaymentProps) => {
  return (
    <S.Button isActive={isActive} {...rest}>
      {children}
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
