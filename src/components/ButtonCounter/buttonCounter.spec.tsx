import { ButtonCounter } from '.'
import { render, screen } from '../../../__tests__/utils/CustomRender'

const handleIncrementMock = jest.fn()
const handleDecrementMock = jest.fn()
describe('Component: ButtonCounter', () => {
  it('should show quantity is correctly', () => {
    render(
      <ButtonCounter
        quantity={1}
        handleIncrement={handleIncrementMock}
        handleDecrement={handleDecrementMock}
      />,
    )
    const buttonComponent = screen.getByText('1')
    expect(buttonComponent).toBeTruthy()
  })
})
