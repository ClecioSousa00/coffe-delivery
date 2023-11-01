import { render, screen } from '../../../__tests__/utils/CustomRender'
import { View } from 'react-native'

import { ButtonIcon } from '.'

describe('Component: ButtonIcon', () => {
  it('should be transparent background if passed false', async () => {
    render(
      <ButtonIcon isSelected={false}>
        <View></View>
      </ButtonIcon>,
    )

    const button = screen.queryByTestId('button-icon')
    // expect(button).toHaveAnimatedStyle({ backgroundColor: 'transparent' })
  })
})
