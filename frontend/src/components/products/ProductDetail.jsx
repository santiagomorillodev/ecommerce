import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import {Footer} from '../main/Footer.jsx'


export function ProductDetail() {
  const { id } = useParams()
  const {allProducts} = useContext(ProductsContext)
  const currentProduct = allProducts.find(p => p.id === Number(id))
  const [currentImage, setCurrentImage] = useState(currentProduct.mainImage)

  if (!currentProduct) return <h2>Producto no encontrado</h2>

  return (
    <>
      <header className='headerProductDetail'>
        <Link to={'/'}><i className='bxr  bx-arrow-left-stroke arrowBackToMain'/></Link>
        <h2>Details</h2>
        <Link><i className='bxr  bxs-heart profileIcon'></i> </Link>
      </header>

      <section className='productContainer'>

        <section className="imagesCurrentProduct">
          <img src={currentImage} alt={currentProduct.title} className='imgProduct'/>
          <div>
            <button onClick={()=> setCurrentImage(currentProduct.images[0])} className="buttonImage buttonImage1"><img src={currentProduct.images[0]} alt="" /></button>
            <button onClick={()=> setCurrentImage(currentProduct.images[1])} className="buttonImage buttonImage2"><img src={currentProduct.images[1]} alt="" /></button>
            <button onClick={()=> setCurrentImage(currentProduct.images[2])} className="buttonImage buttonImage3"><img src={currentProduct.images[2]} alt="" /></button>
            <button onClick={()=> setCurrentImage(currentProduct.images[3])} className="buttonImage buttonImage4"><img src={currentProduct.images[3]} alt="" /></button>
          </div>
        </section>

        <section className='containerContentProduct'>

          <section className='size-rating'>
            <h3>Size</h3>
            <p>Rating: ⭐ {currentProduct.rating.rate}</p>
          </section>

          <section className="productSize">
            <button className='productSizeButton'>M</button>
            <button className='productSizeButton'>S</button>
            <button className='productSizeButton'>L</button>
            <button className='productSizeButton'>XL</button>
            <button className='productSizeButton'>XXL</button>
          </section>

          <section className="productTitle">
            <h4>{currentProduct.title.split(' ').slice(-2).join(' ')}</h4>
            <p>Precio: ${currentProduct.price}</p>
          </section>

          <section className='productDescription'>
            <p className="descriptionTitle">Description</p>
            <p className='paragraphDescription'>{currentProduct.description}</p>
          </section>

          <section className='sectionButtons'>
            <button className="addToCartButton"><i className='bxr  bx-cart-plus addToCartIcon'></i> </button>
            <button className="buyNow">Buy Now</button>
          </section>

        </section>

      </section>
      <Footer/>
      
    </>
  )
}