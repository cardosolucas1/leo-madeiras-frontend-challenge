import React, { useRef, useCallback } from 'react'

import { Box, Input, Form, FormHandles, Button } from '../../shared'

import { Header } from '../../components'

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
      flexDir="column"
      mt="5rem"
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
          {inputs.map(({ label, name, placeholder }) => (
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
                w="90%"
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
            w="90%"
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
