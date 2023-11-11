import { render, screen } from '../../../../../__tests__/utils/CustomRender'
import { mocks } from '../../../../mock/dataMock'

import { ListCardHighLight } from '.'

describe('Component: ListCardHighlight', () => {
  it('should render list products correctly', () => {
    render(<ListCardHighLight data={mocks.listProducts} />)

    const listProducts = screen.getByTestId('list-products')

    expect(listProducts.children).toHaveLength(mocks.listProducts.length - 1)
  })
})
