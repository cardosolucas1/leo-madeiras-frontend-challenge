import { Register, getRegisters } from './getRegisters'

export const createRegister = (data: Register): Register[] => {
  const registers: Register[] = getRegisters()
  localStorage.setItem('registers', JSON.stringify([...registers, data]))
  return [...registers, data]
}
