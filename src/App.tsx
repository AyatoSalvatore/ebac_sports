import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { useGetProdutosQuery } from './store/apiSlice'

function App() {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Erro ao carregar produtos</div>

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </Provider>
  )
}

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export default App
