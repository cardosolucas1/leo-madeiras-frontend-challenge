import React, { useRef } from 'react'

import { Box, AiFillSetting } from '../../shared'

import ModalConfig, { ModalConfigHandler } from '../ModalConfig'

const Header: React.FC = () => {
  const modalRef = useRef<ModalConfigHandler>(null)

  return (
    <Box d="flex" justifyContent="flex-end" maxW="24rem" w="80%" mb="2rem">
      <ModalConfig ref={modalRef} />
      <Box
        data-testid="config-button"
        as={AiFillSetting}
        size="2.5rem"
        color="#F4A261"
        bg="rgb(38, 70, 83, 0.37)"
        p="1"
        borderRadius="2px"
        cursor="pointer"
        onClick={() => modalRef.current?.onOpen()}
      />
    </Box>
  )
}

export default Header
