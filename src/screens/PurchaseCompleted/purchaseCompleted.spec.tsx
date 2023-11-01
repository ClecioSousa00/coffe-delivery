import {
  fireEvent,
  render,
  screen,
} from '../../../__tests__/utils/CustomRender'
import { useNavigation } from '@react-navigation/native'
import { PurchaseCompleted } from '.'

describe('Component: PurchaseCompleted', () => {
  it('check if the navigation has been called', () => {
    render(<PurchaseCompleted />)
    const button = screen.getByTestId('button')

    fireEvent.press(button)
    const { navigate } = useNavigation()
    expect(navigate).toHaveBeenCalled()
  })
})
