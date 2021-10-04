import { createRegister } from '../../services/createRegister'

import * as registers from '../../services/getRegisters'

jest.mock('../../services/getRegisters', () => {
  const registers = jest.requireActual('../../services/getRegisters')
  return { ...registers, getRegisters: jest.fn(() => []) }
})

describe('createRegister service should work as expected', () => {
  it('Should getItem and SetItem when a new register when createRegister is called', () => {
    const spySetItem = jest.spyOn(window.localStorage.__proto__, 'setItem')
    const spyGetRegisters = jest.spyOn(registers, 'getRegisters')
    const result = createRegister({
      nome: 'nome',
      telefone: 'telefone',
      email: 'email',
      cpf: 'cpf'
    })

    expect(spySetItem).toHaveBeenCalledWith(
      'registers',
      '[{"nome":"nome","telefone":"telefone","email":"email","cpf":"cpf"}]'
    )
    expect(spyGetRegisters).toHaveBeenCalledTimes(1)
    expect(result).toEqual([
      {
        cpf: 'cpf',
        email: 'email',
        nome: 'nome',
        telefone: 'telefone'
      }
    ])
  })
})
