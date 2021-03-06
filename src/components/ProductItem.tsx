import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './AddProductToWishlist'
import dynamic from 'next/dynamic'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})
 
interface ProductItemProps {
  product: {
    id: number
    price: number
    priceFormatted: string
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {

  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted} </strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>

      { isAddingToWishlist &&
        <AddProductToWishlist
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
    </div>
  )
}

/* memo evita criar uma nova versão do component caso nenhuma
  propriedade do componente tenha sido alterada

  o segundo parâmetro é uma função que vai nos dizer se devemos, 
  ou não, atualizar o componente

  Quando vale a pena usar o memo?
  1. Pure Functional Components (mesmos parâmetros retornam mesmos resultados)
  2. Renders Too Often (componentes que renderizam demais)
  3. Re-renders with same props
  4. Medium to big size components
*/
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})