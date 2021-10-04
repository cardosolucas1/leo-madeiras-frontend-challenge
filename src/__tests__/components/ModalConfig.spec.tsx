import React, { useRef, RefObject } from 'react'

import { render, fireEvent } from '../test-utils'
import { renderHook } from '@testing-library/react-hooks'

import ModalConfig, { ModalConfigHandler } from '../../components/ModalConfig'
import * as shared from '../../shared'

jest.mock('../../shared', () => {
  const rest = jest.requireActual('../../shared')
  return {
    ...rest,
    useDisclosure: jest.fn(() => ({
      isOpen: true,
      onClose: jest.fn(),
      onOpen: jest.fn()
    }))
  }
})

jest.mock('react-router', () => {
  const rest = jest.requireActual('react-router')
  return {
    ...rest,
    useHistory: jest.fn(() => ({
      push: jest.fn(),
      location: { pathname: '/' }
    }))
  }
})

describe('ModalConfig component should render correctly', () => {
  const setup = (ref?: RefObject<ModalConfigHandler>) => {
    const onPrimaryButtonClick = jest.fn()
    const wrapper = render(
      <ModalConfig
        title="Navegar para"
        ref={ref}
        primaryButtonText="Inicio"
        onPrimaryButtonClick={onPrimaryButtonClick}
      />
    )
    return { ...wrapper, onPrimaryButtonClick }
  }

  it('Should render two buttons on screen', () => {
    const { queryByTestId } = setup()
    expect(queryByTestId('modal-btn')).toBeInTheDocument()
    expect(queryByTestId('close-modal-btn')).toBeInTheDocument()
  })

  it('Should call modal`s handlers when buttons is clicked', () => {
    const {
      result: { current: ref }
    } = renderHook(() => useRef<ModalConfigHandler>(null))
    const onClose = jest.fn()
    const onOpen = jest.fn()

    jest.spyOn(shared, 'useDisclosure').mockImplementation(
      () =>
        ({
          isOpen: true,
          onClose,
          onOpen
        } as any)
    )
    const { getByTestId, rerender, onPrimaryButtonClick } = setup(ref)

    ref.current?.onOpen()
    fireEvent.click(getByTestId('modal-btn'))
    fireEvent.click(getByTestId('close-modal-btn'))

    expect(onOpen).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
    expect(onPrimaryButtonClick).toHaveBeenCalled()
  })
})
