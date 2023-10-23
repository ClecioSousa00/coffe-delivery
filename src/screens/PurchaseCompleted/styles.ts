import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_900};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.lg}px;
    color: ${theme.colors.yellow_dark};
    margin-top: 40px;
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.sm}px;
    color: ${theme.colors.gray_200};
    text-align: center;
  `}
`

export const ContainerButton = styled.View`
  width: 248px;
  margin-top: 64px;
`
