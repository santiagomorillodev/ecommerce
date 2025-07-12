import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { Link } from "react-router-dom"
import './Cart.css'
import '../products/Products.css'
import { Item } from "../products/Item"
import { Footer } from "../main/Footer"

export function Cart () {

  const {allProducts} = useContext(ProductsContext)

  return (
    <>
    
      <section className="cart">
          <section className="cartHeader">
              <div>
                  <Link to={'/'}><i className='bxr  bx-arrow-left-stroke headerIcon'></i></Link>
                  <h3 className="title">Cart</h3>
              </div>
          </section>

          <h3 className="profileCartTitle">Products in cart</h3>
          
        <section className="profileCart">
          <aside className='products'>
            {
              allProducts.map(product => (
                  <Item 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    image={product.mainImage}
                    description={product.description}
                  />
              ))
            }

          </aside>
          
        </section>
      </section>
      <Footer/>
    </>
  )
}
