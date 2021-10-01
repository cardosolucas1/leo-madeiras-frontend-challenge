import React, { useRef, useCallback } from 'react'

import { Box, Input, Form, FormHandles, Button } from '../../shared'
import { Header } from '../../components'

import formValidator from '../../validators/formValidator'
import { ValidationError } from 'yup'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import { returnOnlyNumbers } from '../../utils/returnOnlyNumbers'

import { createRegister } from '../../services/createRegister'
import { getRegisters } from '../../services/getRegisters'

import { useHistory } from 'react-router'

import { inputs } from '../../__mocks__/inputs'

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
    const cpf = returnOnlyNumbers(data.cpf)
    const phone = returnOnlyNumbers(data.phone)

    formRef?.current?.setErrors({})

    if (
      getRegisters()
        .map((e) => e.cpf)
        .includes(cpf)
    ) {
      return formRef?.current?.setErrors({ cpf: 'CPF já cadastrado' })
    }

    try {
      await formValidator.validate(
        {
          ...data,
          cpf,
          phone
        },
        {
          abortEarly: false
        }
      )

      if (!cpfValidator.isValid(cpf))
        return formRef?.current?.setErrors({ cpf: 'CPF inválido' })

      createRegister({
        cpf,
        nome: data.name,
        email: data.email,
        telefone: phone
      })

      history.push('/registers')
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = getValidationErrors(error)
        formRef?.current?.setErrors(errors)
        return
      }
    }
  }, [])

  return (
    <Box
      width="100%"
      minH="36rem"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      pt="5rem"
    >
      <Header />
      <Form
        onSubmit={onSubmit}
        ref={formRef}
        w="100%"
        d="flex"
        justifyContent="center"
      >
        <Box alignSelf="center" width={['90%']} maxW="26rem">
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
                w="95%"
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
            w="92%"
            ml="0.9375rem"
            _hover={{
              background: '#e9c46a',
              color: 'white'
            }}
            _active={{
              background: '#264653',
              color: 'white'
            }}
          >
            Enviar
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default Home
