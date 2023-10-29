import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

import { useTheme } from 'styled-components/native'

type Props = {
  title: string
}

export const HeaderScreen = ({ title }: Props) => {
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <S.Header>
      <S.ButtonBack testID="button" onPress={() => navigation.goBack()}>
        <ArrowLeft color={theme.colors.gray_100} />
      </S.ButtonBack>
      <S.Title>{title}</S.Title>
    </S.Header>
  )
}
