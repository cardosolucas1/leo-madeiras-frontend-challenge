export interface Register {
  nome: string
  cpf: string
  telefone: string
  email: string
}

export const createRegister = (data: Register): Register[] => {
  const registers: Register[] = JSON.parse(
    localStorage.getItem('registers') || '[]'
  )
  localStorage.setItem('registers', JSON.stringify([...registers, data]))
  return [...registers, data]
}
