import React, { useRef, useCallback } from 'react'

import { Box, Form, FormHandles } from '../../shared'

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
        <Box alignSelf="center" width={['90%']} maxW="26rem"></Box>
      </Form>
    </Box>
  )
}

export default Dev
