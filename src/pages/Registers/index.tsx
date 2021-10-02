import React, { useMemo } from 'react'

import { Box, IoArrowBackSharp, Text } from '../../shared'
import { Header, Register } from '../../components'

import { getRegisters } from '../../services/getRegisters'

const Registers: React.FC = () => {
  const registers = useMemo(() => getRegisters(), [getRegisters])

  console.log({ registers })

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
        <Register
          title="Lucas Soares Cardoso"
          data={{
            cpf: '70136273182',
            email: 'email@email.com',
            nome: 'Lucas Soares',
            telefone: '9229292329'
          }}
        />
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
