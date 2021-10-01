## Desafio Front-end Leo Madeiras

### Design

A inspiração de design foi desenvolvido na plataforma Figma, você pode acessar o projeto [clicando aqui](https://www.figma.com/file/WUUVMv0i6LA4qlQQgAR5Yv/Léo-Madeiras-Desafio-técnico?node-id=0%3A1), ou observando o screenshot abaixo:

![image](https://user-images.githubusercontent.com/60625099/135303160-24b5e5b3-f0ef-4bb4-aae2-36c335ca827e.png)

No total foram desenhadas duas páginas. A Home contém o formulário solicitado, com inputs para 4  informações: nome, cpf, telefone e e-mail. 

Já a segunda página, de registros, é responsável por listar os cadastros feitos anteriormente, além de possibilitar sua alteração ou exclusão.

As seguintes features estão presentes no projeto:
- Validação de cadastros duplicados
- Validação de CPF, email
- Máscara para os inputs de CPF e telefone
- Modal para mudança de rotas/páginas
- Botão /ENVIAR/ para salvar um registro.

Informações técnicas:
- Foi utilizado o unForm com Chakra UI e react input mask para o desenvolvimento de um input performático. Houve a utilização de
atualização em tempo real de estado devido as máscaras utilizadas, mas todo o formulário foi desenvolvido utilizando referências.
- O modal é aberto através de referências adicionadas ao Header, utilizando um hook bastante legal (useImperativeHandle)
- A arquitetura do projeto foi pensada para ser limpa, logo, permitindo o desenvolvimento de códigos mais sustentáveis, reutilizáveis, manuteníveis, escaláveis e entendíveis.
- O Chakra UI é o principal framework/lib de estilização
- Os testes unitários estão cobrindo as principais funcionalidades do projeto 
