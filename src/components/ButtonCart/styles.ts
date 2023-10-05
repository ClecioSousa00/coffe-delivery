import styled, { css } from 'styled-components/native'

export const Button = styled.TouchableOpacity``

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.purple};
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -15px;
  right: -15px;
`
export const Quantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    color: ${theme.colors.white};
  `}
`
