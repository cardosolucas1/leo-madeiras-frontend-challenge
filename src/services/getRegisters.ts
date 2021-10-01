export interface Register {
  nome: string
  cpf: string
  telefone: string
  email: string
}

export const getRegisters = (cpf?: string): Register[] => {
  const registers: Register[] = JSON.parse(
    localStorage.getItem('registers') || '[]'
  )
  if (cpf) {
    return registers.filter((r) => r.cpf === cpf)
  }

  return registers
}
