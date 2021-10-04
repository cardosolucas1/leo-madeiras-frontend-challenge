import { onSubmitFormValidator } from '../../validators/onSubmitFormValidator'

import * as registers from '../../services/getRegisters'
import { FormHandles } from '@unform/core'
import { RefObject } from 'react'

describe('onSubmitFormValidator should work as expected', () => {
  const setup = () => {
    const validData = {
      cpf: '646.255.110-03',
      nome: 'Test name',
      telefone: '(11) 1111-1111',
      email: 'email@email.com'
    }
    const invalidData = {
      cpf: '000.000.000-00',
      nome: '',
      telefone: '',
      email: 'email@email'
    }
    const getErrors = jest.fn()
    const setErrors = jest.fn()

    const ref = {
      current: {
        getErrors,
        setErrors
      }
    } as unknown as RefObject<FormHandles>
    return { ref, validData, invalidData }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should call success callback when data is valid', async () => {
    const success = jest.fn()
    const { ref, validData } = setup()
    await onSubmitFormValidator({
      success: (e) => success(e),
      formRef: ref,
      data: validData
    })

    expect(success).toHaveBeenCalledWith({
      cpf: '64625511003',
      email: 'email@email.com',
      nome: 'Test name',
      telefone: '1111111111'
    })
  })

  it('Should not call success callback when data is invalid', async () => {
    const success = jest.fn()
    const { ref, invalidData } = setup()
    await onSubmitFormValidator({ success, formRef: ref, data: invalidData })

    expect(success).not.toHaveBeenCalled()
    expect(ref.current?.setErrors).toHaveBeenCalled()
  })

  it('Should not call success callback when CPF is invalid', async () => {
    const success = jest.fn()
    const { ref, validData } = setup()
    await onSubmitFormValidator({
      success,
      formRef: ref,
      data: { ...validData, cpf: '12323' }
    })

    expect(success).not.toHaveBeenCalled()
    expect(ref.current?.setErrors).toHaveBeenCalledWith({
      cpf: 'CPF inválido'
    })
  })

  it('Should throw an error if cpf is already registered on storage', async () => {
    jest.spyOn(registers, 'getRegisters').mockImplementation(() => [
      {
        cpf: '64625511003',
        email: 'email@email.com',
        nome: 'Test name',
        telefone: '1111111111'
      }
    ])
    const success = jest.fn()
    const { ref, validData } = setup()
    await onSubmitFormValidator({ success, formRef: ref, data: validData })

    expect(success).not.toHaveBeenCalled()
    expect(ref.current?.setErrors).toHaveBeenCalledWith({
      cpf: 'CPF já cadastrado'
    })
  })
})
