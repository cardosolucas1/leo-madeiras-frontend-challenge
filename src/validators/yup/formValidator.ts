import * as Yup from 'yup'

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  cpf: Yup.string()
    .matches(/^\d+$/, 'Insira apenas números')
    .required('CPF é obrigatório'),
  telefone: Yup.string()
    .matches(/^\d+$/, 'Insira apenas números')
    .required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório')
})

export default schema
