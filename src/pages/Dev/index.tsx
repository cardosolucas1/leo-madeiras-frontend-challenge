import React, { useRef, useCallback } from 'react'

import { Box, Input, Form, FormHandles } from '../../shared'

const Dev: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const onSubmit = useCallback((data) => console.log(data), [])

  return (
    <Box
      width="100%"
      minH="36rem"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Form
        onSubmit={onSubmit}
        ref={formRef}
        w="100%"
        d="flex"
        justifyContent="center"
      >
        <Box alignSelf="center" width={['90%']} maxW="26rem">
          <Input
            color="#264653"
            bg="rgb(38, 70, 83, 0.37)"
            placeholder="Naruto Uzumaki"
            name="input"
            label="Qual o seu nome?"
            textTransform="capitalize"
          />
          <Input
            color="#264653"
            bg="rgb(38, 70, 83, 0.37)"
            placeholder="Naruto Uzumaki"
            name="as"
            label="Qual o seu nome?"
            textTransform="capitalize"
          />
        </Box>
      </Form>
    </Box>
  )
}

export default Dev
