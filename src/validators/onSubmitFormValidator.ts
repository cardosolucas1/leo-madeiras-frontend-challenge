import { RefObject } from 'react'

import { InputsKeys } from '../pages/Home'
import { getRegisters } from '../services/getRegisters'

import { FormHandles } from '../shared'

import { getValidationErrors } from '../utils/getValidationErrors'
import { returnOnlyNumbers } from '../utils/returnOnlyNumbers'
import formValidator from './yup/formValidator'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import { ValidationError } from 'yup'

export interface FormValidationProps {
  formRef: RefObject<FormHandles>
  data: InputsKeys
  // eslint-disable-next-line no-unused-vars
  success: (e: InputsKeys) => void
}

export const onSubmitFormValidator = async ({
  success,
  data,
  formRef
}: FormValidationProps): Promise<void> => {
  const cpf = returnOnlyNumbers(data.cpf)
  const phone = returnOnlyNumbers(data.phone)

  formRef?.current?.setErrors({})

  if (
    getRegisters()
      .map((e) => e.cpf)
      .includes(cpf)
  ) {
    return formRef.current?.setErrors({ cpf: 'CPF já cadastrado' })
  }

  try {
    await formValidator.validate(
      {
        ...data,
        cpf,
        phone
      },
      {
        abortEarly: false
      }
    )

    if (!cpfValidator.isValid(cpf))
      return formRef.current?.setErrors({ cpf: 'CPF inválido' })
    return success({
      ...data,
      cpf,
      phone
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      const errors = getValidationErrors(error)
      formRef?.current?.setErrors(errors)
      return
    }
  }
}
