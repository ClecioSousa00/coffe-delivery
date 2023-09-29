import { Text, View } from 'react-native'
import styled, { DefaultTheme, css } from 'styled-components/native'

import { TagProps } from '.'

type TagContentProps = Omit<TagProps, 'tagName'>

const modifiers = {
  grayBackground: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray_200};
    padding: 6px 12px;
    align-self: flex-start;
    margin-bottom: 12px;
    margin-top: 38px;
  `,

  textGray: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
}

export const TagContent = styled(View)<TagContentProps>`
  border-radius: 100px;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.purple_light};
  padding: 4px 8px;

  ${({ theme, grayBackground }) =>
    grayBackground &&
    css`
      ${grayBackground && modifiers.grayBackground(theme)}
    `}
`
export const TagText = styled(Text)<TagContentProps>`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  color: ${({ theme }) => theme.colors.purple_dark};
  text-transform: uppercase;

  ${({ theme, tagColor }) =>
    tagColor &&
    css`
      ${modifiers.textGray(theme)}
    `}
`
