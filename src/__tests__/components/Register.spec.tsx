import React from 'react'

import { render, fireEvent } from '../test-utils'

import Register from '../../components/Register'

import * as components from '../../shared'

jest.mock('../../shared', () => {
  const shared = jest.requireActual('../../shared')
  return {
    ...shared,
    Input: jest.fn(({ value }) => <div>{value}</div>),
    Form: jest.fn(({ children }) => (
      <div data-testid="mocked-form">{children}</div>
    )),
    Button: jest.fn(() => (
      <button data-testid="mocked-submit-btn">Submit button</button>
    ))
  }
})

describe('Register component should work correctly', () => {
  const setup = () => {
    const wrapper = render(
      <Register
        title="title"
        data={{
          cpf: '1111111111',
          email: 'email',
          nome: 'nome',
          telefone: '999999999'
        }}
      />
    )
    return { ...wrapper }
  }

  it('Should render register elements on screen', () => {
    const { queryByText } = setup()

    expect(queryByText(/title/i)).toBeInTheDocument()
    expect(queryByText(/1111111111/i)).toBeInTheDocument()
    expect(queryByText(/email/i)).toBeInTheDocument()
    expect(queryByText(/999999999/i)).toBeInTheDocument()
    expect(queryByText(/nome/i)).toBeInTheDocument()
  })

  it('Should call form`s onSubmit through the button', () => {
    const submit = jest.fn((callback) =>
      callback({}, {} as components.FormHandles)
    )

    jest.spyOn(components, 'Form').mockImplementation(
      jest.fn(({ onSubmit }) => (
        <button data-testid="form-btn" onClick={() => submit(onSubmit)}>
          Submit
        </button>
      ))
    )
    const { getByTestId } = setup()
    fireEvent.click(getByTestId('form-btn'))

    expect(submit).toHaveBeenCalled()
  })
})
