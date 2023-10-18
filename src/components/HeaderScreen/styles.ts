import styled, { css } from 'styled-components/native'

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`
