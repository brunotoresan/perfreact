import { ProductItem } from "./ProductItem"

interface ProductProps {
  id: number
  price: number
  title: string
}

interface SearchResultsProps {
  results: Array<ProductProps>
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}