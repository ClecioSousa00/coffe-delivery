import { render, screen } from '../../../../../../__tests__/utils/CustomRender'
import { Input } from '.'

jest.mock('react-hook-form', () => {
  const actual = jest.requireActual('react-hook-form')

  return {
    ...actual,
    Controller: ({ render }) =>
      render({
        field: {
          value: '',
          onChange: jest.fn(),
          onBlur: jest.fn(),
          ref: { current: null },
        },
      }),
    useForm: () => ({
      control: jest.fn(),
      handleSubmit: jest.fn(),
    }),
  }
})

describe('Component: InputForm', () => {
  it('should render the large input by default', () => {
    render(<Input name="name" placeholder="name" />)

    const input = screen.getByPlaceholderText('name')
    expect(input).toHaveStyle({ width: '100%' })
  })
  it('should render the small input ', () => {
    render(<Input name="name" placeholder="name" size="small" />)

    const input = screen.getByPlaceholderText('name')
    expect(input).toHaveStyle({ width: 92 })
  })
  it('should render the medium input ', () => {
    render(<Input name="name" placeholder="name" size="medium" />)

    const input = screen.getByPlaceholderText('name')
    expect(input).toHaveStyle({ width: 224 })
  })
  it('should show the error message', () => {
    render(<Input name="name" placeholder="name" error="campo inválido" />)

    const errorMessage = screen.getByText('campo inválido')
    expect(errorMessage).toBeVisible()
  })
})
