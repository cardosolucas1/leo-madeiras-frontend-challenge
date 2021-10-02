import React, { useRef } from 'react'

import { Box } from '../../shared'
import { BoxProps } from '../../shared/Box'

import ModalConfig, { ModalConfigHandler } from '../ModalConfig'

const Header: React.FC<BoxProps> = ({ as, ...props }) => {
  const modalRef = useRef<ModalConfigHandler>(null)

  return (
    <Box d="flex" justifyContent="flex-end" maxW="27rem" mb="2rem">
      <ModalConfig ref={modalRef} />
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
