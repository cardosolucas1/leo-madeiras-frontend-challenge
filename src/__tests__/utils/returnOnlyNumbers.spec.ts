import { returnOnlyNumbers } from '../../utils/returnOnlyNumbers'

describe('returnOnlyNumbers util should work properly', () => {
  it('returns only numbers of a string', () => {
    const result = returnOnlyNumbers('701.232.322-23')

    expect(result).toEqual('70123232223')
  })
})
