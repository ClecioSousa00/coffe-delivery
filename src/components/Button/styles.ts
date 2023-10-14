import { RectButton } from 'react-native-gesture-handler'
import styled, { DefaultTheme, css } from 'styled-components/native'
import { Props } from '.'

type ButtonProps = Pick<Props, 'color' | 'enabled'>

// const modifiers ={
//   primaryFocus: (theme: DefaultTheme) => css`
//     background-color: ${theme.colors.purple};
//   `,
//   secondaryDefault: (theme: DefaultTheme) => css`
//     background-color: ${theme.colors.yellow_dark};
//   `,
//   secondaryFocus: (theme: DefaultTheme) => css`
//     background-color: ${theme.colors.yellow};
//   `

// }

export const Button = styled(RectButton)<ButtonProps>`
  ${({ theme, color, enabled }) => css`
    flex: 1;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    opacity: ${enabled ? '1' : '0.5'};
    background-color: ${color || theme.colors.purple};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.text_size.button}px;
    color: ${theme.colors.white};
    text-transform: uppercase;
  `}
`