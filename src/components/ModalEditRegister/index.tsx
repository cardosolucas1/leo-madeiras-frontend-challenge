import React, { useImperativeHandle, useCallback, useRef } from 'react'

import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Form,
  Input,
  FormHandles
} from '../../shared'

import { forwardRef } from '@chakra-ui/react'
import { Register } from '../../services/getRegisters'

import { inputs } from '../../__mocks__/inputs'
import { onSubmitFormValidator } from '../../validators/onSubmitFormValidator'
import { updateRegister } from '../../services/updateRegister'

export interface ModalConfigHandler {
  onOpen: () => void
  onClose: () => void
  isUpdated: () => void
}

export interface ModalEditRegisterProps {
  data: Register
}

const ModalEditRegister = forwardRef(
  ({ data }: ModalEditRegisterProps, ref) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const formRef = useRef<FormHandles>(null)

    useImperativeHandle(ref, () => {
      return {
        onOpen,
        onClose
      }
    })

    const onSubmit = useCallback(async (formData: Register) => {
      await onSubmitFormValidator({
        data: formData,
        formRef,
        success: (info: Register) => {
          updateRegister(info)
          onClose()
        },
        isUpdate: true
      })
    }, [])

    return (
      <Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent w="95%" maxW="26rem" bg="#264653">
            <ModalHeader fontWeight="500" fontSize="1.125rem" color="#e76f51">
              Editar informações
            </ModalHeader>
            <ModalCloseButton
              data-testid="modal-button-closed"
              color="#e76f51"
            />
            <ModalBody d="flex" flexDir="column" justifyContent="flex-end">
              <Form onSubmit={onSubmit} ref={formRef}>
                <Input
                  name="cpf"
                  value={data.cpf}
                  mask="999.999.999-99"
                  bg="#e76f51"
                  color="white"
                  placeholder="CPF"
                  isReadOnly
                  mb="1"
                  cursor="not-allowed"
                />
                {inputs
                  .filter((e) => !e.label.includes('CPF'))
                  .map(({ name, mask }) => (
                    <Input
                      key={name}
                      name={name}
                      mask={mask}
                      bg="#e76f51"
                      color="white"
                      placeholder={data[name as keyof typeof data]}
                      mb="1"
                    />
                  ))}

                <Button
                  data-testid="modal-btn"
                  mb="5"
                  background="#e76f51"
                  _hover={{
                    background: '#e9c46a',
                    color: 'white'
                  }}
                >
                  Editar
                </Button>
              </Form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
)

export default ModalEditRegister
