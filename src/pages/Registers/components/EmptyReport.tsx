import React from 'react'

import { Text, Button } from '../../../shared'

export interface EmptyReportProps {
  onClick: () => void
}

const EmptyReport: React.FC<EmptyReportProps> = ({ onClick }) => {
  return (
    <>
      <Text fontWeight="700" color="#264653" mb="1rem">
        Oops! Nenhum registro encontrado, assim que você fizer o primeiro
        registro, ele irá aparecer aqui.
      </Text>
      <Button w="100%" bg="#E76F51" fontSize="lg" onClick={onClick}>
        Criar
      </Button>
    </>
  )
}

export default EmptyReport
