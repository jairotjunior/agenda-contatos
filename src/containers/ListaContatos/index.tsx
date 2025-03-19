import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { RootReducer } from '../../store'
import { removerContato, editarContato } from '../../store/reducers/contatos'

const ListaContatos = () => {
  const [estaEditando, setEstaEditando] = useState<number | null>(null)
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()

  return (
    <div>
      {itens.length > 0 ? (
        <S.titulo>
          <S.nome>Nome</S.nome>
          <S.email>E-mail</S.email>
          <S.telefone>Telefone</S.telefone>
        </S.titulo>
      ) : (
        <S.h2>Nenhum contato adicionado</S.h2>
      )}
      <>
        {itens.map((c) => (
          <S.listaContato key={c.id}>
            <S.contatos>
              {estaEditando === c.id ? (
                <>
                  <S.input
                    type="text"
                    defaultValue={c.nome}
                    onChange={(e) => (c.nome = e.target.value)}
                  />
                  <S.input
                    type="email"
                    defaultValue={c.email}
                    onChange={(e) => (c.email = e.target.value)}
                  />
                  <S.input
                    type="tel"
                    defaultValue={c.telefone}
                    onChange={(e) => (c.telefone = Number(e.target.value))}
                  />
                </>
              ) : (
                <>
                  <S.nomeAdicionado>{c.nome}</S.nomeAdicionado>
                  <S.emailAdicionado>{c.email}</S.emailAdicionado>
                  <S.telefoneAdicionado>{c.telefone}</S.telefoneAdicionado>
                </>
              )}
            </S.contatos>
            {estaEditando === c.id ? (
              <>
                <S.botaoSalvar
                  onClick={() => {
                    dispatch(
                      editarContato({
                        id: c.id,
                        nome: c.nome,
                        email: c.email,
                        telefone: c.telefone
                      })
                    )
                    setEstaEditando(null)
                  }}
                >
                  Salvar
                </S.botaoSalvar>
                <S.botaoCancelar onClick={() => setEstaEditando(null)}>
                  Cancelar
                </S.botaoCancelar>
              </>
            ) : (
              <>
                <S.botao onClick={() => setEstaEditando(c.id)}>Editar</S.botao>
                <S.botaoCancelar onClick={() => dispatch(removerContato(c.id))}>
                  Remover
                </S.botaoCancelar>
              </>
            )}
          </S.listaContato>
        ))}
      </>
    </div>
  )
}

export default ListaContatos
