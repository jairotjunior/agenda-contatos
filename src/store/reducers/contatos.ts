import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
}

const telefoneDuplicado = (
  itens: Contato[],
  telefone: number,
  id?: number
): boolean => {
  return itens.some(
    (contato) => contato.telefone === telefone && contato.id !== id
  )
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const { id, telefone } = action.payload

      if (telefoneDuplicado(state.itens, telefone, id)) {
        alert('Telefone já está cadastrado para outro contato.')
        return
      }

      const indexContato = state.itens.findIndex((contato) => contato.id === id)

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    adicionarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const { telefone } = action.payload

      if (telefoneDuplicado(state.itens, telefone)) {
        alert('Telefone já está cadastrado.')
        return
      }

      const ultimoContato = state.itens[state.itens.length - 1]
      const novoContato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }

      state.itens.push(novoContato)
    }
  }
})

export const { removerContato, editarContato, adicionarContato } =
  contatosSlice.actions

export default contatosSlice.reducer
