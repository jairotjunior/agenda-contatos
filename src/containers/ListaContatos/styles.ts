import styled from 'styled-components'

export const div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
`
export const listaContato = styled.ul`
  display: flex;
`

export const titulo = styled.div`
  width: 80%;
  display: flex;
  border: 1px solid #ccc;
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  text-align: center;
`

export const nome = styled.div`
  width: 35%;
  padding: 10px;
  border-right: 1px solid #ccc;
`
export const email = styled.div`
  width: 35%;
  padding: 10px;
  border-right: 1px solid #ccc;
`
export const telefone = styled.div`
  width: 30%;
  padding: 10px;
`

export const contatos = styled.li`
  width: 80%;
  display: flex;
  background-color: #fcfcfc;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
`
export const nomeAdicionado = styled.p`
  width: 35%;
  padding: 10px;
  border-right: 1px solid #ccc;
`
export const emailAdicionado = styled.p`
  width: 35%;
  padding: 10px;
  border-right: 1px solid #ccc;
`
export const telefoneAdicionado = styled.p`
  width: 30%;
  padding: 10px;
`

export const botao = styled.button`
  width: 10%;
  background-color: #fcfcfc;
  border: none;
  cursor: pointer;
`

export const botaoCancelar = styled(botao)`
  background-color: #c23616;
`

export const botaoSalvar = styled(botao)`
  background-color: #44bd32;
`
export const h2 = styled.h2`
  margin-top: 5vw;
  text-align: center;
`
export const input = styled.input`
  width: 35%;
  padding: 10px;
  border-right: 1px solid #ccc;
`
