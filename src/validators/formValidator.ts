import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório')
})

export default schema
