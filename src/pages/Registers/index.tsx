import React, { useMemo } from 'react'

import { useHistory } from 'react-router'

import { Box, IoArrowBackSharp, Text } from '../../shared'
import { Header, Register } from '../../components'

import { getRegisters } from '../../services/getRegisters'

import EmptyReport from './components/EmptyReport'

const Registers: React.FC = () => {
  const history = useHistory()
  const registers = useMemo(() => getRegisters(), [getRegisters])

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
        {!registers.length && <EmptyReport onClick={() => history.push('/')} />}
        {registers.map(({ nome, cpf, telefone, email }, index) => (
          <Register
            key={index}
            title={nome}
            data={{ cpf, email, nome, telefone }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Registers
