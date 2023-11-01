import { render, screen } from '../../../__tests__/utils/CustomRender'
import { InputSearch } from '.'
import theme from '../../styles/theme'

describe('Component: InputSearch', () => {
  it('should change border color when isFocus is true', () => {
    render(<InputSearch isFocus />)
    const containerInput = screen.getByTestId('container-input')
    expect(containerInput).toHaveStyle({ borderColor: theme.colors.gray_300 })
  })
  it('should show default border color if isFocus is false', () => {
    render(<InputSearch isFocus={false} />)
    const containerInput = screen.getByTestId('container-input')
    expect(containerInput).not.toHaveStyle({
      borderColor: theme.colors.gray_300,
    })
  })
})
