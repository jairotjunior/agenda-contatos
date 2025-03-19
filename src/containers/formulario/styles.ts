import styled from 'styled-components'

export const formulario = styled.form`
  display: flex;
  margin-bottom: 5vw;
`

export const inputs = styled.div`
  display: flex;
  width: 80.5%;

  input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    margin-right: 3px;

    &::placeholder {
      color: gray;
      opacity: 0.7;
      text-align: center;
    }
  }
`
export const salvar = styled.button`
  padding: 15px;
  margin-left: auto;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`
