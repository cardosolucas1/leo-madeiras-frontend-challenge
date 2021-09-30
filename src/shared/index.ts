import {
  chakra,
  FormControl,
  InputGroup,
  FormLabel,
  InputRightElement,
  FormHelperText
} from '@chakra-ui/react'

import { Form as UnForm } from '@unform/web'
import { FormHandles } from '@unform/core'

export { default as Box } from './Box'
export { default as Input } from './Form/components/Input'

export const Form = chakra(UnForm)

export { FormControl, InputGroup, FormLabel, InputRightElement, FormHelperText }

export type { FormHandles }
