import { CatalogCoffee } from '.'
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../../../../__tests__/utils/CustomRender'

describe('Component: CatalogCoffee', () => {
  it('render', async () => {
    render(<CatalogCoffee />)

    const buttonCategory = screen.getByRole('button', { name: 'doces' })

    fireEvent.press(buttonCategory)

    await waitFor(() => {
      expect(screen.getByTestId('section-list').children).toHaveLength(1)
    })
  })
})
