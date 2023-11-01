import { render, screen } from '../../../__tests__/utils/CustomRender'
import { ButtonOptionsSelect } from '.'
import theme from '../../styles/theme'

describe('Component: ButtonOptionsSelect', () => {
  const sizeProduct = 270
  it('should show default button when it is not selected', () => {
    render(<ButtonOptionsSelect size={sizeProduct} />)
    const button = screen.getByTestId('button')
    const buttonText = screen.getByTestId('button-text')

    expect(button).toHaveStyle({ backgroundColor: theme.colors.gray_700 })
    expect(buttonText).toHaveStyle({ color: theme.colors.gray_300 })
  })
  it('should show button when it selected', () => {
    render(<ButtonOptionsSelect isSelected size={sizeProduct} />)
    const button = screen.getByTestId('button')
    const buttonText = screen.getByTestId('button-text')

    expect(button).toHaveStyle({ backgroundColor: 'transparent' })
    expect(buttonText).toHaveStyle({ color: theme.colors.purple })
  })
})
