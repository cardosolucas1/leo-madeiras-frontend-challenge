import React from 'react'

import { render, fireEvent } from '../test-utils'

import Header from '../../components/Header'

jest.mock('../../components/ModalConfig', () => ({
  __esModule: true,
  default: () => <div>Modal Config</div>
}))

jest.mock('react-router', () => {
  const router = jest.requireActual('react-router')
  return { ...router, useHistory: () => ({ location: { pathname: '/' } }) }
})

describe('Header component should render correctly ', () => {
  const setup = () => {
    const wrapper = render(<Header />)
    return { ...wrapper }
  }

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
