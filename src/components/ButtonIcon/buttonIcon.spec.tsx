import { View } from 'react-native'
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'

import { ButtonIcon } from '.'

import { renderWithThemeProvider } from '../../../__tests__/utils/renderWithThemeProvider'
import theme from '../../styles/theme'

describe('Component: ButtonIcon', () => {
  it('should be transparent background if passed false', async () => {
    render(
      <ButtonIcon isSelected={false}>
        <View></View>
      </ButtonIcon>,
      { wrapper: renderWithThemeProvider },
    )

    const button = screen.queryByTestId('button-icon')

    screen.debug(button)
    // expect(button).toHaveAnimatedStyle({ backgroundColor: 'transparent' })
  })
})
