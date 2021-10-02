import React from 'react'

import { Box, IoArrowBackSharp, Text } from '../../shared'
import { Header, Register } from '../../components'

const Registers: React.FC = () => {
  return (
    <Box
      width="100%"
      minH="100vh"
      d="flex"
      justifyContent="start"
      alignItems="center"
      flexDir="column"
    >
      <Box width="100%">
        <Header as={IoArrowBackSharp} />
        <Text w="100%" mb="1rem" as="h1" fontWeight={700} fontSize="1.2rem">
          Registros
        </Text>
        <Register title="Lucas Soares Cardoso" />
      </Box>
    </Box>
  )
}

export default Registers
