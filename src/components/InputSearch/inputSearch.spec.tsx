import { render, screen } from '@testing-library/react-native'
import { InputSearch } from '.'
import { CustomRender } from '../../../__tests__/utils/CustomRender'
import theme from '../../styles/theme'

describe('Component: InputSearch', () => {
  it('should change border color when isFocus is true', () => {
    render(<InputSearch isFocus />, {
      wrapper: CustomRender,
    })
    const containerInput = screen.getByTestId('container-input')
    expect(containerInput).toHaveStyle({ borderColor: theme.colors.gray_300 })
  })
  it('should show default border color if isFocus is false', () => {
    render(<InputSearch isFocus={false} />, {
      wrapper: CustomRender,
    })
    const containerInput = screen.getByTestId('container-input')
    expect(containerInput).not.toHaveStyle({
      borderColor: theme.colors.gray_300,
    })
  })
})
