import { Trash } from 'phosphor-react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { PressableProps } from 'react-native'

type SwipeableButtonProps = PressableProps

export const SwipeableButton = ({ ...rest }: SwipeableButtonProps) => {
  const theme = useTheme()
  return (
    <S.Button {...rest}>
      <Trash color={theme.colors.red_dark} size={28} />
    </S.Button>
  )
}
