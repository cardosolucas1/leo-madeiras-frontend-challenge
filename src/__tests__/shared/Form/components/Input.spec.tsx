import React from 'react'

import { render, fireEvent } from '../../../test-utils'

import { Form } from '../../../../shared'
import Input from '../../../../shared/Form/components/Input'

import * as unform from '@unform/core'

describe('Input component should work properly', () => {
  const setup = (label?: string, iconRight?: React.ReactNode) => {
    const onSubmit = jest.fn()
    const inputName = 'inputName'
    const placeholder = 'placeholder'

    const wrapper = render(
      <Form onSubmit={onSubmit}>
        <Input
          mask={''}
          name={inputName}
          placeholder={placeholder}
          bg="blue"
          color="white"
          label={label}
          iconRight={iconRight}
        />
      </Form>
    )
    return { ...wrapper, onSubmit, inputName, placeholder, label }
  }
  it('Should render a label and placeholder inside an input', () => {
    const label = 'label'

    const { queryByText, queryByTestId, placeholder } = setup(label)

    expect(queryByText(label)).toBeInTheDocument()
    expect(queryByTestId('form-input')).toHaveAttribute(
      'placeholder',
      placeholder
    )
  })

  it('Should call onSubmit when input is submitted and call focus handler on input`s focus', async () => {
    const { getByTestId, onSubmit } = setup()

    const input = getByTestId('form-input')

    await fireEvent.change(input, {
      target: { value: 'input value' }
    })

    input.focus()
    expect(input).toHaveFocus()

    expect(input).toHaveValue('input value')

    fireEvent.submit(input)
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('Should render a right element', async () => {
    const rightIcon = 'right icon'
    const { queryByText } = setup(undefined, <span>{rightIcon}</span>)

    const rightIconElement = queryByText(rightIcon)

    expect(rightIconElement).toBeInTheDocument()
  })

  it('input should display an error if useField returns error as truthy', () => {
    const useFieldSpy = jest.spyOn(unform, 'useField')
    useFieldSpy.mockReturnValueOnce({
      fieldName: 'inputName',
      registerField: jest.fn(),
      defaultValue: 'defaultValue',
      clearError: jest.fn(),
      error: 'true'
    })

    const { getByTestId } = setup()

    expect(getByTestId('input-error')).toBeInTheDocument()
  })
})
