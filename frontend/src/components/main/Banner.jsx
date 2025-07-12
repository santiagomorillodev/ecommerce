import { useContext } from 'react'
import './Banner.css'
import { ProductsContext } from '../../context/ProductsContext'

export function Banner () {
  const { allProducts } = useContext(ProductsContext)
  if (allProducts.length === 0) return <p>Loading</p>
  return (
    <section className='banner'>
        <div className="bannerInformation">
            <p>Flat 50% discount on your first order.</p>
            <button className='bannerButton'>Buy now</button>
        </div>
          <img src={allProducts[3]['mainImage']} alt="" className='bannerImg'/>
    </section>
  )
}