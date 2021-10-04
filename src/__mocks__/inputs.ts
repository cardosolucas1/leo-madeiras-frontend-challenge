export interface Inputs {
  label: string
  name: string
  placeholder: string
  mask: string
}

export const inputs: Inputs[] = [
  {
    label: 'Qual seu nome?',
    placeholder: 'Uzumaki Naruto',
    name: 'nome',
    mask: ''
  },
  {
    label: 'E seu CPF?',
    placeholder: '000.000.000-00',
    name: 'cpf',
    mask: '999.999.999-99'
  },
  {
    label: 'Telefone pra contato?',
    placeholder: '(99) 9 9999-9999',
    name: 'telefone',
    mask: '(99) 9999-9999'
  },
  {
    label: 'Pra finalizar, seu e-mail',
    placeholder: 'exemplo@email.com',
    name: 'email',
    mask: ''
  }
]
