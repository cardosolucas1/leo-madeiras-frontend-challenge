import { deleteRegister } from '../../services/deleteRegister'

jest.mock('../../services/getRegisters', () => ({
  getRegisters: jest.fn(() => [{ cpf: '7182982292' }])
}))

describe('deleteRegister service should work as expected', () => {
  it('Should SetItem without register intertwined with the param (cpf)', () => {
    const spySetItem = jest.spyOn(window.localStorage.__proto__, 'setItem')

    const result = deleteRegister('cpf')

    expect(spySetItem).toHaveBeenCalledWith('registers', JSON.stringify(result))
  })
})
