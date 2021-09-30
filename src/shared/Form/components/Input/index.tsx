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
  bg: string
  color: string
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  iconRight,
  bg,
  color,
  ...props
}) => {
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
          <FormLabel
            fontSize="1.125rem"
            fontWeight="700"
            color={color}
            mb="0.5rem"
          >
            {label}
          </FormLabel>
        )}
        <InputUI
          ref={inputRef}
          data-testid="form-input"
          isInvalid={!!error && !isFocused}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          bg={bg}
          border="1px solid#F4A261"
          borderRadius="0.125rem"
          padding="0.5rem"
          color="white"
          outline="0"
          h={['1.5rem', '2rem']}
          _placeholder={{
            color: 'white',
            fontStyle: 'italic',
            opacity: '0.5'
          }}
          _hover={{
            borderColor: '#2A9D8F'
          }}
          _focus={{
            borderColor: '#264653'
          }}
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
