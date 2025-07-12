import { Item } from './Item.jsx'
import './Products.css'
import { useFilters } from '../../hooks/useFilters.jsx'
import { filterProducts } from '../../utils/filterProducts.js'

export function Products() {
  const {currentCategory} = useFilters()
  const filteredProducts = filterProducts(currentCategory)
  const fewProducts = filteredProducts.length <= 1
  return (
    <section className={`products${fewProducts  ? ' few-products' : ''}`}>
      {
        filteredProducts.map(product => (
          <Item 
          key={product.id}
          id={product.id}
          title={product.title}
          rating={product.rating}
          price={product.price}
          image={product.mainImage}
          description={product.description}
          />
        ))}      
    </section>
  )
}
//  npm run dev electronics electronics electronics