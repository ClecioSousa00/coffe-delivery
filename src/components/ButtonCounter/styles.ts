import styled, { css } from 'styled-components/native'

export const ContentInput = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  border-radius: 6px;
  padding: 10px;
`
export const ButtonInput = styled.TouchableOpacity``

export const InputNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.md}px;
    color: ${theme.colors.gray_100};
  `}
`
