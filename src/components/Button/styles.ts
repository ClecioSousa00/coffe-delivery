import { RectButton } from 'react-native-gesture-handler'
import styled, { DefaultTheme, css } from 'styled-components/native'
import { Props } from '.'
import { TouchableOpacity } from 'react-native'

type ButtonProps = Pick<Props, 'color' | 'disabled'>

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

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, color, disabled }) => css`
    height: 46px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    opacity: ${disabled ? '0.5' : '1'};
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
