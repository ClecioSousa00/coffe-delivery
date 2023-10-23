import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  height: 96px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ButtonCart = styled.View`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
`

export const Counter = styled.View`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
  position: absolute;
  right: -8px;
  top: -6px;
`

export const CounterText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    color: ${theme.colors.white};
    font-size: ${theme.text_size.xs}px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    color: ${theme.colors.gray_400};
    font-size: ${theme.text_size.sm}px;
  `}
`
export const TextStrong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    color: ${theme.colors.gray_400};
    font-size: ${theme.text_size.sm}px;
  `}
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    color: ${theme.colors.purple};
    font-size: ${theme.text_size.button}px;
    text-transform: uppercase;
  `}
`
