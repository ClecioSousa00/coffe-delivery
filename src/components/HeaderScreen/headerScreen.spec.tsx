import { render, screen } from '@testing-library/react-native'
import { HeaderScreen } from '.'
import { CustomRender } from '../../../__tests__/utils/CustomRender'

describe('Component: HeaderScreen', () => {
  it('should show the title passed correctly', () => {
    render(<HeaderScreen title="fakeTitle" />, { wrapper: CustomRender })
    const title = screen.getByText(/fakeTitle/i)
    expect(title).toBeTruthy()
  })
})
