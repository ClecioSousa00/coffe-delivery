import { ReactNode } from 'react'
import * as S from './styles'

type ButtonPaymentProps = {
  text: string
  children: ReactNode
}

export const ButtonPayment = ({ text, children }: ButtonPaymentProps) => {
  return (
    <S.Button>
      {children}
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
