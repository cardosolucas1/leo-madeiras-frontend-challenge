import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Input,
  Form
} from '../../shared'

export interface RegisterProps {
  title: string
}

const Register: React.FC<RegisterProps> = ({ title }) => {
  return (
    <Box w="100%">
      <Accordion defaultIndex={[0]} allowToggle borderRadius="sm">
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
              <Input
                border="0"
                mask="***.***.***-**"
                value={'70136417230'}
                name="cpf"
                bg="#e76f51"
                color=""
                opacity={0.5}
                isReadOnly
                h="1.5rem"
              />
            </Form>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Register
