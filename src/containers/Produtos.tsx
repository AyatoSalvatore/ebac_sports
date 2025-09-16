import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleFavorito } from '../store/reducers/favorito'
import { adicionar } from '../store/reducers/carrinho'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = { produtos: ProdutoType[] }

const ProdutosComponent = ({ produtos }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorito.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={() => dispatch(toggleFavorito(produto))}
          aoComprar={() => dispatch(adicionar(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
