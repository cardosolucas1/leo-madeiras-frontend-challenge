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

import InputMask from 'react-input-mask'

export interface InputProps extends Props {
  label?: string
  iconRight?: React.ReactNode
  name: string
  bg: string
  color: string
  mask?: string | RegExp | string[]
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
  const [mask, setMask] = useState('')

  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => setIsFocused(true), [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'props.value'
    })
  }, [fieldName, registerField])

  const handleMask = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    return setMask(value)
  }

  return (
    <FormControl w="inherit">
      <InputGroup d="flex" flexDir="column">
        {label && (
          <FormLabel
            fontSize="1.125rem"
            fontWeight="700"
            color={color}
            mb="0.5rem"
            _before={{
              content: '""',
              display: 'block',
              width: '15px',
              height: '15px',
              borderRadius: '10%',
              background: name.includes('a') ? 'white' : '#264653',
              position: 'absolute',
              left: '-23px'
            }}
          >
            {label}
          </FormLabel>
        )}
        <InputUI
          as={InputMask}
          ref={inputRef}
          onChange={handleMask}
          data-testid="form-input"
          isInvalid={!!error && !isFocused}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          bg={bg}
          value={mask}
          border="1px solid#F4A261"
          borderRadius="0.125rem"
          padding="1rem"
          color="white"
          outline="0"
          h={['2.5rem', '3rem']}
          _placeholder={{
            color: 'white',
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
        <FormHelperText
          w="90%"
          color="#361107"
          fontWeight="700"
          fontSize="1rem"
          data-testid="input-error"
          textAlign="end"
          mt="4"
        >
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default Input
