import { updateRegister } from '../../services/updateRegister'

import * as registers from '../../services/deleteRegister'

jest.mock('../../services/deleteRegister', () => {
  const rest = jest.requireActual('../../services/deleteRegister')
  return { ...rest, deleteRegister: jest.fn(() => []) }
})

describe('updateRegister service should work as expected', () => {
  it('Should SetItem when when updateRegister is called with the new information', () => {
    const spySetItem = jest.spyOn(window.localStorage.__proto__, 'setItem')
    const spyDeleteRegister = jest.spyOn(registers, 'deleteRegister')

    const result = updateRegister({
      nome: 'nome',
      telefone: 'telefone',
      email: 'email',
      cpf: 'cpf'
    })

    expect(spySetItem).toHaveBeenCalledWith(
      'registers',
      '[{"nome":"nome","telefone":"telefone","email":"email","cpf":"cpf"}]'
    )
    expect(spyDeleteRegister).toHaveBeenCalledTimes(1)
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
