import React, { useRef, useMemo } from 'react'

import { useHistory } from 'react-router'

import { Box } from '../../shared'
import { BoxProps } from '../../shared/Box'

import ModalConfig, { ModalConfigHandler } from '../ModalConfig'

const Header: React.FC<BoxProps> = ({ as, ...props }) => {
  const modalRef = useRef<ModalConfigHandler>(null)
  const history = useHistory()

  const isHome = useMemo(() => history.location.pathname === '/', [history])

  return (
    <Box d="flex" justifyContent="flex-end" maxW="27rem" mb="2rem">
      <ModalConfig
        ref={modalRef}
        title="Navegar para"
        onPrimaryButtonClick={() => history.push(isHome ? '/registers' : '/')}
        primaryButtonText={isHome ? 'Registros' : 'Formulário'}
      />
      <Box
        as={as}
        data-testid="config-button"
        size="2.5rem"
        color="#F4A261"
        bg="rgb(38, 70, 83, 0.37)"
        p="1"
        borderRadius="2px"
        cursor="pointer"
        _hover={{
          background: 'rgb(38, 70, 83)'
        }}
        onClick={() => modalRef.current?.onOpen()}
        {...props}
      />
    </Box>
  )
}

export default Header
