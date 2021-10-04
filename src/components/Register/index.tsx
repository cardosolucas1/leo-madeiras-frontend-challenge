import React, { useRef } from 'react'
import { Register } from '../../services/getRegisters'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Input,
  Form,
  MdDelete,
  FaRegEdit
} from '../../shared'

import ModalConfig, { ModalConfigHandler } from '../ModalConfig'
import ModalEditRegister from '../ModalEditRegister'

export interface RegisterProps {
  title: string
  data: Register
  onDeleteRegister: (cpf: Register['cpf']) => void
}

const masks = {
  email: '',
  telefone: '(99) 9999-9999',
  cpf: '999.999.999-99',
  nome: ''
}

const RegisterUI: React.FC<RegisterProps> = ({
  data,
  title,
  onDeleteRegister
}) => {
  const modalRef = useRef<ModalConfigHandler>(null)
  const modalEditRef = useRef<ModalConfigHandler>(null)

  return (
    <Box w="100%" my="1rem">
      <ModalConfig
        ref={modalRef}
        title="Deseja apagar este registro?"
        onPrimaryButtonClick={() => {
          onDeleteRegister(data.cpf)
          modalRef.current?.onClose()
        }}
        primaryButtonText={'Sim'}
      />
      <ModalEditRegister data={data} ref={modalEditRef} />
      <Accordion allowToggle borderRadius="sm" allowMultiple={false}>
        <AccordionItem bg="white" border="0" borderRadius="2px">
          <Box as="h2">
            <AccordionButton outline="none">
              <Text
                color="#264653"
                fontWeight="700"
                flex={1}
                textAlign="left"
                noOfLines={1}
              >
                {title}
              </Text>
              <AccordionIcon color="#264653" />
            </AccordionButton>
          </Box>
          <AccordionPanel p={2} bg="#264653" borderBottomRadius="2px">
            <Form onSubmit={() => null}>
              {Object.entries(data).map(([key, value]) => (
                <Input
                  my="1"
                  key={key}
                  border="0"
                  mask={masks[key as keyof typeof masks]}
                  value={value}
                  name={key}
                  bg="#e76f51"
                  color=""
                  isReadOnly
                  h="1.5rem"
                  fontStyle="italic"
                />
              ))}
            </Form>
            <Box w="100%" d="flex" flexDir="row">
              <Box
                onClick={() => modalRef.current?.onOpen()}
                size={'2rem'}
                as={MdDelete}
                color="#f4a261"
                mr="3"
                cursor="pointer"
              />
              <Box
                onClick={() => modalEditRef.current?.onOpen()}
                size={'1.8rem'}
                as={FaRegEdit}
                color="#f4a261"
                cursor="pointer"
              />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default RegisterUI
