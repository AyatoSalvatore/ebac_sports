import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'

const Header = () => {
  const carrinhoItens = useSelector((state: RootState) => state.carrinho.itens)
  const favoritosItens = useSelector((state: RootState) => state.favorito.itens)

  const valorTotal = carrinhoItens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritosItens.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinhoItens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
