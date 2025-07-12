// import products from '../mocks/api.json'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export function filterProducts(category){
  const {allProducts} = useContext(ProductsContext)
  const filteredProducts = category === 'all'
  ?allProducts
  :allProducts.filter(product => product.category == category)


  return filteredProducts
}