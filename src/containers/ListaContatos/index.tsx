import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { RootReducer } from '../../store'
import { removerContato, editarContato } from '../../store/reducers/contatos'

const ListaContatos = () => {
  const [estaEditando, setEstaEditando] = useState<number | null>(null)
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const [contato, setContato] = useState({ nome: '', email: '', telefone: '' })
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
                    value={contato.nome}
                    onChange={(e) =>
                      setContato({ ...contato, nome: e.target.value })
                    }
                  />
                  <S.input
                    type="email"
                    value={contato.email}
                    onChange={(e) =>
                      setContato({ ...contato, email: e.target.value })
                    }
                  />
                  <S.input
                    type="tel"
                    value={contato.telefone}
                    onChange={(e) =>
                      setContato({ ...contato, telefone: e.target.value })
                    }
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
                        nome: contato.nome,
                        email: contato.email,
                        telefone: Number(contato.telefone)
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
                <S.botao
                  onClick={() => {
                    setEstaEditando(c.id)
                    setContato({
                      nome: c.nome,
                      email: c.email,
                      telefone: c.telefone.toString()
                    })
                  }}
                >
                  Editar
                </S.botao>
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
