import { ButtonCart } from '.'
import { render, screen } from '../../../__tests__/utils/CustomRender'

describe('Component: ButtonCart', () => {
  it('should not show the quantity of products', () => {
    render(<ButtonCart quantityProducts={0} />)

    const quantityComponent = screen.queryByTestId('content-quantity')

    expect(quantityComponent).toBeNull()
  })

  it('should  show the quantity of products', () => {
    render(<ButtonCart quantityProducts={2} />)

    const quantityComponent = screen.getByText('2')
    expect(quantityComponent).toBeTruthy()
  })
})
