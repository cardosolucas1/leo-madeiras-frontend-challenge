import React, { useRef, RefObject } from 'react'

import { render, fireEvent } from '../test-utils'
import { renderHook } from '@testing-library/react-hooks'

import ModalConfig, { ModalConfigHandler } from '../../components/ModalConfig'
import * as shared from '../../shared'

import * as reactRouter from 'react-router'

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
  return { ...rest, useHistory: jest.fn(() => ({ push: jest.fn() })) }
})

describe('ModalConfig component should render correctly', () => {
  const setup = (ref?: RefObject<ModalConfigHandler>) => {
    const wrapper = render(<ModalConfig ref={ref} />)
    return { ...wrapper }
  }

  it('Should render two buttons on screen', () => {
    const { queryByTestId } = setup()
    expect(queryByTestId('register-btn')).toBeInTheDocument()
    expect(queryByTestId('close-modal-btn')).toBeInTheDocument()
  })

  it('Should call modal`s handlers when buttons is clicked', () => {
    const push = jest.fn()
    jest.spyOn(reactRouter, 'useHistory').mockImplementation(
      jest.fn(
        () =>
          ({
            push
          } as any)
      )
    )
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
    const { getByTestId } = setup(ref)

    ref.current?.onOpen()
    fireEvent.click(getByTestId('register-btn'))
    fireEvent.click(getByTestId('close-modal-btn'))

    expect(onOpen).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/registers')
  })
})
