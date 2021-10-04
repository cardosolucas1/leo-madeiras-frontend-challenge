import { deleteRegister } from './deleteRegister'
import { Register } from './getRegisters'

export const updateRegister = (data: Register): Register[] => {
  const registers: Register[] = deleteRegister(data.cpf)
  localStorage.setItem('registers', JSON.stringify([...registers, data]))
  return [...registers, data]
}
