import { render, screen } from '@testing-library/react-native'
import { ButtonCart } from '.'
import { renderWithThemeProvider } from '../../__tests__/utils/renderWithThemeProvider'

describe('Component: ButtonCart', () => {
  describe("Should show cart when you don't have any products", () => {
    it('should not show the quantity of products', () => {
      render(<ButtonCart quantityProducts={0} />, {
        wrapper: renderWithThemeProvider,
      })

      const quantityComponent = screen.queryByTestId('content-quantity')

      expect(quantityComponent).toBeNull()
    })
  })
  describe('Should show cart when passed products', () => {
    it('should  show the quantity of products', () => {
      render(<ButtonCart quantityProducts={2} />, {
        wrapper: renderWithThemeProvider,
      })

      const quantityComponent = screen.getByText('2')
      expect(quantityComponent).toBeTruthy()
    })
  })
})
