import { getRegisters } from '../../services/getRegisters'

describe('getRegisters service should work as expected', () => {
  it('Should get all registers when getRegisters is called without params', async () => {
    const spyGetItem = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(null)

    const result = getRegisters()

    expect(spyGetItem).toHaveBeenCalledWith('registers')
    expect(result).toEqual([])
  })

  it('Should get all registers when getRegisters is called with params', async () => {
    const spyGetItem = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(JSON.stringify([{ cpf: 1 }]))

    const result = getRegisters('1')

    expect(spyGetItem).toHaveBeenCalledWith('registers')
    expect(result).toEqual([])
  })
})
