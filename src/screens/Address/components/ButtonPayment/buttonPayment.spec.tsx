import { render, screen } from '../../../../../__tests__/utils/CustomRender'
import { View } from 'react-native'

import { ButtonPayment } from '.'
import theme from '../../../../styles/theme'

describe('Component: ButtonPayment', () => {
  it('should show the text passed correctly', () => {
    render(
      <ButtonPayment text="textMock" isActive>
        <View />
      </ButtonPayment>,
    )

    const textElement = screen.getByText('textMock')
    expect(textElement).toBeTruthy()
  })
  it('should show the border of the button when isActive is true', () => {
    render(
      <ButtonPayment text="textMock" isActive>
        <View />
      </ButtonPayment>,
    )

    const button = screen.getByTestId('button')
    expect(button).toHaveStyle({ borderColor: theme.colors.purple })
  })
  it('should not show the border of the button when isActive is false', () => {
    render(
      <ButtonPayment text="textMock" isActive={false}>
        <View />
      </ButtonPayment>,
    )

    const button = screen.getByTestId('button')
    expect(button).not.toHaveStyle({ borderColor: theme.colors.purple })
  })
})
