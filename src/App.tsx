import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



import EstiloGlobal, { Conteiner } from './styles'

import store from './store'
import Home from './pages/Home/home'
import Cadastro from './pages/cadastro'


const rotas = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  
  {
    path: '/novo',
    element: <Cadastro/>
  }
])


function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal/>
      <Conteiner>
        <RouterProvider router={rotas} />
      </Conteiner>
    </Provider>
  )
}

export default App
