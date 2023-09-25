import { TouchableOpacity } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

type ButtonProps = {
  isSelected: boolean
}

export const ButtonOption = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected ? 'transparent' : theme.colors.gray_700};
    height: 40px;
    width: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.sm}px;
    color: ${theme.colors.gray_300};
  `}
`
