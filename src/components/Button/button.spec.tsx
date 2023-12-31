import {
  fireEvent,
  render,
  screen,
} from '../../../__tests__/utils/CustomRender'

import { Button } from '.'

const onPressMock = jest.fn()

describe('Component: Button', () => {
  it('Checks if the button is not pressable when disabled', () => {
    render(
      <Button
        testID="button"
        text="adicionar"
        disabled={true}
        onPress={onPressMock}
      />,
    )

    const button = screen.getByTestId('button')
    fireEvent.press(button)
    expect(onPressMock).not.toHaveBeenCalled()
  })
  it('Checks if the button is pressable when not disabled', () => {
    render(<Button testID="button" text="adicionar" onPress={onPressMock} />)

    const button = screen.getByTestId('button')
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
