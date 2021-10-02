import React, { useImperativeHandle, useMemo } from 'react'

import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button
} from '../../shared'

import { useHistory } from 'react-router'

import { forwardRef } from '@chakra-ui/react'

export interface ModalConfigHandler {
  onOpen: () => void
}

const ModalConfig = forwardRef((_props, ref) => {
  const history = useHistory()
  const { isOpen, onClose, onOpen } = useDisclosure()

  useImperativeHandle(ref, () => {
    return {
      onOpen
    }
  })

  const isHome = useMemo(() => history.location.pathname === '/', [history])

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="95%" maxW="26rem" bg="#264653">
          <ModalHeader fontWeight="500" fontSize="1.125rem" color="#e76f51">
            Navegar para
          </ModalHeader>
          <ModalCloseButton data-testid="modal-button-closed" color="#e76f51" />
          <ModalBody d="flex" flexDir="column" justifyContent="flex-end">
            <Button
              data-testid="register-btn"
              mb="5"
              background="#e76f51"
              _hover={{
                background: '#e9c46a',
                color: 'white'
              }}
              onClick={() => {
                history.push(isHome ? '/registers' : '/')
                onClose()
              }}
            >
              {isHome ? 'Registros' : 'Inicio'}
            </Button>
            <Button
              data-testid="close-modal-btn"
              color="#e76f51"
              border="1px solid"
              borderColor="#e76f51"
              mb="5"
              bg="#264653"
              _hover={{
                background: '#e9c46a',
                color: 'white',
                borderColor: '#e9c46a'
              }}
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
})

export default ModalConfig
