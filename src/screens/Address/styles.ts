import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
  padding: 56px 32px 0px;
`
export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`
export const ContentText = styled.View`
  gap: 2px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_300};
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.title_size.sm}px;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_300};
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
  `}
`
export const ContainerButton = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`
export const Footer = styled.View`
  padding: 28px 32px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
`
export const Form = styled.View`
  margin-top: 16px;
  gap: 16px;
`
export const ContainerInput = styled.View`
  flex-direction: row;
  gap: 12px;
`
