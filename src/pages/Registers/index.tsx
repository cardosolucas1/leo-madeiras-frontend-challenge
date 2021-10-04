import React, { useState } from 'react'

import { useHistory } from 'react-router'

import { Box, IoArrowBackSharp, Text } from '../../shared'
import { Header, Register } from '../../components'

import { Register as RegisterInterface } from '../../services/getRegisters'

import { getRegisters } from '../../services/getRegisters'
import { deleteRegister } from '../../services/deleteRegister'

import EmptyReport from './components/EmptyReport'

const Registers: React.FC = () => {
  const [registers, setRegisters] = useState(getRegisters())
  const history = useHistory()

  const updateData = (data: RegisterInterface[]) => {
    setRegisters(data)
  }

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
            onDeleteRegister={(e) => {
              deleteRegister(e)
              updateData(getRegisters())
            }}
            updateData={updateData}
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
