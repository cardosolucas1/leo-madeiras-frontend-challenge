import { RefObject } from 'react'

import { getRegisters, Register } from '../services/getRegisters'

import { FormHandles } from '../shared'

import { getValidationErrors } from '../utils/getValidationErrors'
import { returnOnlyNumbers } from '../utils/returnOnlyNumbers'
import formValidator from './yup/formValidator'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import { ValidationError } from 'yup'

export interface FormValidationProps {
  formRef: RefObject<FormHandles>
  data: Register
  success: (e: Register) => void
  isUpdate?: boolean
}

export const onSubmitFormValidator = async ({
  success,
  data,
  formRef,
  isUpdate
}: FormValidationProps): Promise<void> => {
  const cpf = returnOnlyNumbers(data.cpf)
  const telefone = returnOnlyNumbers(data.telefone)

  formRef?.current?.setErrors({})

  if (
    getRegisters()
      .map((e) => e.cpf)
      .includes(cpf) &&
    !isUpdate
  ) {
    return formRef.current?.setErrors({ cpf: 'CPF já cadastrado' })
  }

  try {
    await formValidator.validate(
      { ...data, telefone, cpf },
      {
        abortEarly: false
      }
    )

    if (!cpfValidator.isValid(cpf))
      return formRef.current?.setErrors({ cpf: 'CPF inválido' })
    return success({ ...data, telefone, cpf })
  } catch (error) {
    if (error instanceof ValidationError) {
      const errors = getValidationErrors(error)
      formRef?.current?.setErrors(errors)
      return
    }
  }
}
