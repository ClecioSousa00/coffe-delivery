import styled, { css } from 'styled-components/native'

export const Container = styled.Pressable`
  width: 166px;
  height: 204px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray_800};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_700};
  padding: 0px 12px 16px;
`

export const ImageCoffee = styled.Image`
  margin-top: -20px;
  width: 64px;
  height: 64px;
`

export const TypeContent = styled.View`
  background-color: ${({ theme }) => theme.colors.purple_light};
  padding: 4px 8px;
  border-radius: 30px;
  margin: 8px 0px;
`

export const TextType = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.text_size.tag}px;
    color: ${theme.colors.purple_dark};
  `}

  text-transform: uppercase;
`
export const TextName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.xs}px;
    color: ${theme.colors.gray_200};
  `}
  text-align: center;
`

export const TextDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    color: ${theme.colors.gray_400};
  `}
  text-align: center;
`
export const ContentPrice = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`
export const TextPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    color: ${theme.colors.yellow_dark};
  `}
`
export const NumberPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.md}px;
    color: ${theme.colors.yellow_dark};
  `}
`
