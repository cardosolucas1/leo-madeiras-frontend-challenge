import React, { useRef, useEffect, useState, useCallback } from 'react'

import { Input as InputUI, InputProps as Props } from '@chakra-ui/react'

import {
  FormControl,
  InputGroup,
  FormLabel,
  InputRightElement,
  FormHelperText
} from '../../..'

import { useField } from '@unform/core'

export interface InputProps extends Props {
  label?: string
  iconRight?: React.ReactNode
  name: string
}

const Input: React.FC<InputProps> = ({ label, name, iconRight, ...props }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => setIsFocused(true), [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <FormControl>
      <InputGroup d="flex" flexDir="column">
        {label && (
          <FormLabel fontSize="1.125rem" fontWeight="400">
            {label}
          </FormLabel>
        )}
        <InputUI
          data-testid="form-input"
          ref={inputRef}
          isInvalid={!!error && !isFocused}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          borderRadius="0.125rem"
          bg="#264653"
          opacity="0.37"
          color="white"
          h="3rem"
          _placeholder={{
            color: '#a0a0a0',
            fontSize: '14px'
          }}
          errorBorderColor="#d4040468"
          {...props}
        />
        {iconRight && <InputRightElement children={iconRight} />}
      </InputGroup>
      {!!error && (
        <FormHelperText data-testid="input-error">{error}</FormHelperText>
      )}
    </FormControl>
  )
}

export default Input
