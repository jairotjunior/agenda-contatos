import EstiloGlobal, { Container } from './styles'
import Header from './containers/header'
import Formulario from './containers/formulario'
import ListaContatos from './containers/ListaContatos'

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Formulario />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
