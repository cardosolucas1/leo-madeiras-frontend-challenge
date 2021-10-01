import React from 'react'

import { render } from '../test-utils'

import Header from '../../components/Header'

jest.mock('../../components/ModalConfig', () => ({
  __esModule: true,
  default: () => <div>Modal Config</div>
}))

describe('Header component should render correctly', () => {
  const setup = () => {
    const wrapper = render(<Header />)
    return { ...wrapper }
  }

  it('Should render a config button on screen', () => {
    const { queryByTestId } = setup()
    expect(queryByTestId('config-button')).toBeInTheDocument()
  })

  it('Should render a modal on document', () => {
    const { queryByText } = setup()
    expect(queryByText('Modal Config', { exact: false })).toBeInTheDocument()
  })
})
