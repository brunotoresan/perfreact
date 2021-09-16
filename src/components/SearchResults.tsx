import { ProductItem } from "./ProductItem"

interface ProductProps {
  id: number
  price: number
  priceFormatted: string
  title: string
}

interface SearchResultsProps {
  results: Array<ProductProps>
  totalPrice: number
  onAddToWishList: (id: number) => void
}

export function SearchResults({ results, totalPrice, onAddToWishList }: SearchResultsProps) {

  /* Utilizao o useMemo/useCallback em:
    1. Cálculos pesados
    2. Igualdade referencial (quando a gente repassa aquela info a um componente filho)

    useMemo memoiza um valor,
    useCallback memoiza uma função
  */

  return (
    <div>
      <h2>Preço total = {totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList} 
          />
        )
      })}
    </div>
  )
}