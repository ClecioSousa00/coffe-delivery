import { render, screen } from '../../../__tests__/utils/CustomRender'

import { Tag } from '.'

import theme from '../../styles/theme'

describe('Component: Tag', () => {
  it('Must have a specific background', () => {
    render(<Tag tagName="tradicional" grayBackground />)

    const tagComponent = screen.getByTestId('tag')

    expect(tagComponent.props.style[0].backgroundColor).toEqual(
      theme.colors.gray_200,
    )
  })
  it('Must have a specific color text', () => {
    render(<Tag tagName="tradicional" tagColor />)

    const TextTagComponent = screen.getByTestId('text-tag')

    expect(TextTagComponent.props.style[0].color).toEqual(theme.colors.white)
  })
})
