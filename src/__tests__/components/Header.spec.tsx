import React from 'react'

import { render, fireEvent } from '../test-utils'

import Header from '../../components/Header'

import * as reactRouter from 'react-router'

jest.mock('../../components/ModalConfig', () => ({
  __esModule: true,
  default: jest.fn(({ onPrimaryButtonClick }) => (
    <button onClick={() => onPrimaryButtonClick()}>Modal Config</button>
  ))
}))

jest.mock('react-router', () => {
  const router = jest.requireActual('react-router')
  return {
    ...router,
    useHistory: jest.fn(() => ({
      location: { pathname: '/' },
      push: jest.fn()
    }))
  }
})

describe('Header component should render correctly', () => {
  const setup = () => {
    const wrapper = render(<Header />)
    return { ...wrapper }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should redirect to `/` when Header is located on /registers', async () => {
    const push = jest.fn()
    jest
      .spyOn(reactRouter, 'useHistory')
      .mockImplementation(
        () => ({ push, location: { pathname: '/registers' } } as any)
      )
    const { getByText } = setup()

    fireEvent.click(getByText(/Modal Config/i))

    expect(push).toHaveBeenCalledWith('/')
  })

  it('Should redirect to `/registers` when Header is located on `/` (Home)', async () => {
    const push = jest.fn()
    jest
      .spyOn(reactRouter, 'useHistory')
      .mockImplementation(() => ({ push, location: { pathname: '/' } } as any))
    const { getByText } = setup()

    fireEvent.click(getByText(/Modal Config/i))

    expect(push).toHaveBeenCalledWith('/registers')
  })

  it('Should render a config button on screen', () => {
    const { queryByTestId } = setup()
    expect(queryByTestId('config-button')).toBeInTheDocument()
  })

  it('Should render a modal on document when', () => {
    const { queryByText, getByTestId } = setup()

    fireEvent.click(getByTestId('config-button'))
    expect(queryByText('Modal Config', { exact: false })).toBeInTheDocument()
  })
})
