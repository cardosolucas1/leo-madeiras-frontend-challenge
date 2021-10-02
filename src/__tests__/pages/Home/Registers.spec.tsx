import React from 'react'

import { render, fireEvent } from '../../test-utils'

import Registers from '../../../pages/Registers'

import * as reactRouter from 'react-router'

import * as service from '../../../services/getRegisters'

jest.mock('react-router', () => {
  const router = jest.requireActual('react-router')
  return {
    ...router,
    useHistory: jest.fn(() => ({ push: jest.fn() }))
  }
})

jest.mock('../../../pages/Registers/components/EmptyReport', () => {
  return {
    __esModule: true,
    default: jest.fn(({ onClick }) => (
      <button onClick={onClick}>Relatorio vazio</button>
    ))
  }
})

jest.mock('../../../components', () => {
  const rest = jest.requireActual('../../../components')
  return {
    ...rest,
    Header: jest.fn(() => <div data-testid="mocked-header">Header</div>),
    Register: jest.fn(() => (
      <div data-testid="mocked-register">Register component</div>
    ))
  }
})

describe('Register page should work properly', () => {
  const setup = () => {
    const wrapper = render(<Registers />)
    return { ...wrapper }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the elements on screen correctly when there are not registers and handle with it', () => {
    const push = jest.fn()

    jest.spyOn(reactRouter, 'useHistory').mockImplementation(
      () =>
        ({
          push
        } as any)
    )
    const { queryByText, getByText } = setup()
    expect(queryByText(/Header/i)).toBeInTheDocument()
    expect(queryByText(/Registros/i)).toBeInTheDocument()
    expect(queryByText('Relatorio vazio', { exact: false })).toBeInTheDocument()

    fireEvent.click(getByText(/relatorio vazio/i))

    expect(push).toHaveBeenCalledWith('/')
  })

  it('should render register component when getRegisters returns something', () => {
    jest
      .spyOn(service, 'getRegisters')
      .mockReturnValue([{ cpf: '1', email: '', nome: '', telefone: '' }])
    const { queryByText } = setup()
    expect(queryByText(/register component/i)).toBeInTheDocument()
  })
})
