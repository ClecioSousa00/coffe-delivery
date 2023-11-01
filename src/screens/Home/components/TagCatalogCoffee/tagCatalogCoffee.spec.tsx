import { TagCatalogCoffee } from '.'
import { render, screen } from '../../../../../__tests__/utils/CustomRender'

describe('Component: TagCatalogCoffee', () => {
  it('should show the text is passed', () => {
    render(<TagCatalogCoffee text="textMock" />)

    const text = screen.getByText('textMock')
    expect(text).toBeTruthy()
  })
  it('should show the default tag when not active', () => {
    render(<TagCatalogCoffee text="textMock" />)
  })
})
