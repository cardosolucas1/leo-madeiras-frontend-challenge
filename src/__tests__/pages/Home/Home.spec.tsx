import React from 'react'

import { render, fireEvent } from '../../test-utils'

import Home from '../../../pages/Home'

import * as components from '../../../shared'
import * as validators from '../../../validators/onSubmitFormValidator'

import * as router from 'react-router'

jest.mock('react-router', () => {
  const reactRouter = jest.requireActual('react-router')
  return {
    ...reactRouter,
    useHistory: jest.fn(() => ({ push: jest.fn() }))
  }
})

jest.mock('../../../services/createRegister', () => {
  const rest = jest.requireActual('../../../services/createRegister')
  return {
    ...rest,
    createRegister: jest.fn()
  }
})

jest.mock('../../../shared', () => {
  const shared = jest.requireActual('../../../shared')
  return {
    ...shared,
    Input: jest.fn(() => <input data-testid="mocked-input" />),
    Form: jest.fn(({ children }) => (
      <div data-testid="mocked-form">{children}</div>
    )),
    Button: jest.fn(() => (
      <button data-testid="mocked-submit-btn">Submit button</button>
    ))
  }
})

jest.mock('../../../components', () => {
  const components = jest.requireActual('../../../components')
  return {
    ...components,
    Header: jest.fn(() => <div data-testid="mocked-header">Header</div>)
  }
})

describe('Home page should work properly', () => {
  const setup = () => {
    const wrapper = render(<Home />)
    return { ...wrapper }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render 4 inputs on screen and a submit button', () => {
    const { queryByTestId, queryAllByTestId } = setup()

    expect(queryByTestId('mocked-header')).not.toBeNull()
    expect(queryByTestId('mocked-submit-btn')).not.toBeNull()
    expect(queryAllByTestId('mocked-input').length).toEqual(4)
  })

  it('Should call onSubmit through the form', async () => {
    const push = jest.fn()
    jest.spyOn(router, 'useHistory').mockImplementation(() => ({ push } as any))
    const validateForm = jest.fn(({ success }) =>
      success({ cpf: '', email: '', phone: '', name: '' })
    )

    jest
      .spyOn(validators, 'onSubmitFormValidator')
      .mockImplementation(validateForm)
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

    await fireEvent.click(getByTestId('form-btn'))

    expect(submit).toHaveBeenCalledTimes(1)
    expect(validateForm).toHaveBeenCalled()
    expect(push).toHaveBeenLastCalledWith('/registers')
  })
})
