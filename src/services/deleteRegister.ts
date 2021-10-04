import { Register, getRegisters } from './getRegisters'

export const deleteRegister = (cpf: Register['cpf']): Register[] => {
  const registers: Register[] = getRegisters().filter((e) => e.cpf !== cpf)

  localStorage.setItem('registers', JSON.stringify([...registers]))

  return registers
}
