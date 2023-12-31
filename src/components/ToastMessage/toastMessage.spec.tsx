import {
  render,
  screen,
  fireEvent,
} from '../../../__tests__/utils/CustomRender'
import { mocks } from '../../mock/dataMock'

import { useNavigation } from '@react-navigation/native'

import { ToastMessage } from '.'

import { ToastProps } from '../../routes/'

const productsMock: ToastProps = {
  props: {
    product: {
      data: mocks.product,
      size: 227,
      quantity: 1,
    },
  },
}
const { props } = productsMock

describe('Component: ToastMessage', () => {
  it(' should show the name "café" in the singular when the amount is one', () => {
    render(<ToastMessage props={props} />)

    const singularName = screen.getByText(/caf[eé](?![sS])/i)
    expect(singularName).toBeTruthy()
  })
  it('should show the name "cafés" in the plural when the amount is grater than once', () => {
    props.product.quantity = 2
    render(<ToastMessage props={props} />)

    const pluralName = screen.getByText(/caf[eé]s/i)
    expect(pluralName).toBeTruthy()
  })

  it('check if the navigation has been called', () => {
    render(<ToastMessage props={productsMock.props} />)

    const { navigate } = useNavigation()
    const buttonNavigate = screen.getByTestId('button-navigate')
    fireEvent.press(buttonNavigate)
    expect(navigate).toHaveBeenCalled()
  })
})
