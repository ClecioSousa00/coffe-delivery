import {
  render,
  screen,
  fireEvent,
} from '../../../__tests__/utils/CustomRender'

import { useNavigation } from '@react-navigation/native'

import { HeaderScreen } from '.'

describe('Component: HeaderScreen', () => {
  it('should show the title passed correctly', () => {
    render(<HeaderScreen title="fakeTitle" />)
    const title = screen.getByText(/fakeTitle/i)
    expect(title).toBeTruthy()
  })

  it('check if the navigation has been called', () => {
    render(<HeaderScreen title="fakeTitle" />)
    const button = screen.getByTestId('button')

    fireEvent.press(button)
    const { goBack } = useNavigation()
    expect(goBack).toHaveBeenCalledTimes(1)
  })
})
