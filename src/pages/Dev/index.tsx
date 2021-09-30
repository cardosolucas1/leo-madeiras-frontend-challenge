import React, { useRef } from 'react'

import { Box, Input, Form, FormHandles } from '../../shared'

const Dev: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const onSubmit = (e: { input: string }) => console.log(e)

  return (
    <Box
      width="100%"
      minH="36rem"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Form onSubmit={onSubmit} ref={formRef}>
        <Input placeholder="placeholder" name="input" label="test" />
      </Form>
    </Box>
  )
}

export default Dev
