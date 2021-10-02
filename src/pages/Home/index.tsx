import React, { useRef, useCallback } from 'react'

import {
  Box,
  Input,
  Form,
  FormHandles,
  Button,
  AiFillSetting
} from '../../shared'
import { Header } from '../../components'

import { createRegister } from '../../services/createRegister'

import { useHistory } from 'react-router'

import { inputs } from '../../__mocks__/inputs'

import { onSubmitFormValidator } from '../../validators/onSubmitFormValidator'
export interface InputsKeys {
  name: string
  email: string
  phone: string
  cpf: string
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()

  const onSubmit = useCallback(async (data: InputsKeys) => {
    await onSubmitFormValidator({
      data,
      formRef,
      success: ({ cpf, email, phone, name }: InputsKeys) => {
        createRegister({ nome: name, cpf, email, telefone: phone })
        history.push('/registers')
      }
    })
  }, [])

  return (
    <Box w="100%">
      <Header as={AiFillSetting} />
      <Form onSubmit={onSubmit} ref={formRef} d="flex" justifyContent="center">
        <Box alignSelf="center" width={['100%']}>
          {inputs.map(({ label, name, placeholder, ...props }) => (
            <Box
              d="flex"
              w="100%"
              key={name}
              _before={{
                content: '""',
                display: 'block',
                width: '2px',
                marginRight: '0.9375rem',
                height: '9rem',
                background: name.includes('a') ? 'white' : '#264653',
                left: '200px'
              }}
            >
              <Input
                color="#264653"
                bg="rgb(38, 70, 83, 0.37)"
                placeholder={placeholder}
                name={name}
                label={label}
                {...props}
              />
            </Box>
          ))}
          <Button
            background="#264653"
            textTransform="capitalize"
            fontSize="1.125rem"
            border="0"
            borderRadius="0.125rem"
            cursor="pointer"
            variant="ghost"
            mt="1rem"
            w="96.5%"
            ml="0.9375rem"
          >
            Enviar
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default Home
