import React, { useRef, useCallback } from 'react'

import { Box, Input, Form, FormHandles, Button } from '../../shared'

export interface Inputs {
  label: string
  name: string
  placeholder: string
}

const inputs: Inputs[] = [
  { label: 'Qual seu nome?', placeholder: 'Uzumaki Naruto', name: 'name' },
  { label: 'E seu CPF?', placeholder: '000.000.000-00', name: 'cpf' },
  {
    label: 'Telefone pra contato?',
    placeholder: '(11) 1111-1111',
    name: 'phone'
  },
  {
    label: 'Pra finalizar, seu e-mail',
    placeholder: 'exemplo@email.com',
    name: 'email'
  }
]

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const onSubmit = useCallback((data) => console.log(data), [])

  return (
    <Box
      width="100%"
      minH="36rem"
      d="flex"
      justifyContent="center"
      alignItems="center"
      mt="8rem"
    >
      <Form
        onSubmit={onSubmit}
        ref={formRef}
        w="100%"
        d="flex"
        justifyContent="center"
      >
        <Box alignSelf="center" width={['90%']} maxW="26rem">
          {inputs.map(({ label, name, placeholder }) => (
            <Box key={name} mb="4rem">
              <Input
                color="#264653"
                bg="rgb(38, 70, 83, 0.37)"
                placeholder={placeholder}
                name={name}
                label={label}
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
          >
            Enviar
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default Home
