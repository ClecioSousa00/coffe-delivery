import { CatalogCoffee } from '.'
import {
  fireEvent,
  render,
  screen,
} from '../../../../../__tests__/utils/CustomRender'

describe('Component: CatalogCoffee', () => {
  it('render', () => {
    render(<CatalogCoffee />)

    const categories = screen.queryAllByText('doces')
    console.log(categories[0])

    fireEvent.press(categories[0])
  })
})
