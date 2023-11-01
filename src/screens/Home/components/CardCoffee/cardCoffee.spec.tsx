import {
  fireEvent,
  render,
  screen,
} from '../../../../../__tests__/utils/CustomRender'
import { mocks } from '../../../../mock/dataMock'
import { CardCoffee } from '.'
import { useNavigation } from '@react-navigation/native'

describe('Component: CardCoffee', () => {
  it('should render the products correctly', () => {
    render(<CardCoffee index={1} data={mocks.product} />)

    const productName = screen.getByText(new RegExp(mocks.product.name, 'i'))
    expect(productName).toBeTruthy()
  })
  it('check if the navigation has been called', () => {
    render(<CardCoffee index={1} data={mocks.product} />)
    const button = screen.getByTestId('button-card')

    fireEvent.press(button)
    const { navigate } = useNavigation()
    expect(navigate).toHaveBeenCalled()
  })
  it('should call onPress with correct id', () => {
    const mockNavigate = jest.fn()
    render(
      <CardCoffee
        index={1}
        data={mocks.product}
        onPress={() => mockNavigate('product', { id: mocks.product.id })}
      />,
    )
    const button = screen.getByTestId('button-card')

    fireEvent.press(button)
    expect(mockNavigate).toHaveBeenCalledWith('product', {
      id: mocks.product.id,
    })
  })
})
