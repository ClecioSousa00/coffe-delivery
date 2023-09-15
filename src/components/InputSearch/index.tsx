import theme from '../../styles/theme'
import * as S from './styles'
import { MagnifyingGlass } from 'phosphor-react-native'

export const InputSearch = () => {
  return (
    <S.Container>
      <MagnifyingGlass color={theme.colors.gray_400} size={18} />
      <S.Input
        placeholder="Pesquisar"
        placeholderTextColor={theme.colors.gray_400}
      />
    </S.Container>
  )
}
