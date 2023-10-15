import styled, { css } from 'styled-components/native'
import { ButtonIconProps } from './'
import { TouchableOpacity } from 'react-native'

type Props = Pick<ButtonIconProps, 'isSelected'>

export const Button = styled(TouchableOpacity)<Props>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected ? theme.colors.gray_700 : 'transparent'};
    border-radius: 6px;
    padding: 8px;
  `}
`
