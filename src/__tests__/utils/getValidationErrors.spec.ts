import { ValidationError } from 'yup'

import { getValidationErrors } from '../../utils/getValidationErrors'

describe('ValidationError should work correctly', () => {
  it('ValidationError should return the correct error data', () => {
    const message = 'error'
    const error = new ValidationError(message)

    expect(error).toBeInstanceOf(ValidationError)
    expect(error.message).toBe(message)
  })
})

describe('getValidationErrors should work properly', () => {
  it('getValidationErrors should give errors triggered by ValidationError', () => {
    const name = 'Nome deve ter pelo menos 3 caracteres'
    const error = new ValidationError([new ValidationError(name, 'LC', 'name')])

    expect(getValidationErrors(error)).toStrictEqual({
      name
    })
  })

  it('getValidationErrors should give errors triggered by ValidationError even when field name is not provided, replacing the field with ` `', () => {
    const message = 'error'
    const error = new ValidationError([new ValidationError(message)])

    expect(getValidationErrors(error)).toStrictEqual({
      '': message
    })
  })
})
