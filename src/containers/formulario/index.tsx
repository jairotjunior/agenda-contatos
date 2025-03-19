import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import * as S from './styles'
import { adicionarContato } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionarContato({
        nome,
        email,
        telefone: Number(telefone)
      })
    )
  }

  return (
    <S.formulario onSubmit={cadastrarContato}>
      <S.inputs>
        <input
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Digite o Nome"
        />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Digite o E-mail"
        />
        <input
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="tel"
          placeholder="Digite o Número"
        />
      </S.inputs>
      <S.salvar type="submit">Salvar</S.salvar>
    </S.formulario>
  )
}

export default Formulario
