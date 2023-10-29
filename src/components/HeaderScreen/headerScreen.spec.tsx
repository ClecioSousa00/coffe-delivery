import { fireEvent, render, screen } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'

import { HeaderScreen } from '.'
import { CustomRender } from '../../../__tests__/utils/CustomRender'

describe('Component: HeaderScreen', () => {
  it('should show the title passed correctly', () => {
    render(<HeaderScreen title="fakeTitle" />, { wrapper: CustomRender })
    const title = screen.getByText(/fakeTitle/i)
    expect(title).toBeTruthy()
  })

  it('check if the navigation has been called', () => {
    render(<HeaderScreen title="fakeTitle" />, {
      wrapper: CustomRender,
    })
    const button = screen.getByTestId('button')

    fireEvent.press(button)
    const { goBack } = useNavigation()
    expect(goBack).toHaveBeenCalled()
  })
})
