import { Banner } from './Banner.jsx'
import { Categories } from './Categories.jsx'
import { NavBar } from './NavBar.jsx'
import { Products } from '../products/Products.jsx'
import { useContext, useState } from 'react'
import './Main.css'
import { ProductsContext } from '../../context/ProductsContext.jsx'
import { Footer } from './Footer.jsx'
import { Link } from 'react-router-dom'
// import { useClothes } from '../../hooks/useClothes.jsx'

export function Main() {
  const [navBarActive, setNavBarActive] = useState(false)
  const {allProducts} = useContext(ProductsContext)

  const navBarChange = (isActive)=>{
    setNavBarActive(!isActive)
  }

  if (!allProducts || allProducts.length === 0) {
    return <p style={{ textAlign: 'center' }}>Cargando productos...</p>
  }
  
  return (
    <section className='sectionMain'>

    <section className='headerContainer'>
      <section className='navHeaderContainer'>

        <i className='bxr  bx-arrow-left-stroke backArrow'></i> 
        <h1 className="title">Explore</h1>
        <div>
          <button onClick={()=> navBarChange(navBarActive)} className="buttonNavBar">
            <i className='bx  bx-menu-select'  >
              </i></button>
          <Link to={'/cart'}>
            <i className='bxr  bx-cart cartIcon'  ></i> 
          </Link>
        </div>
      </section>

        <div className='promotion'>
          <img src={allProducts ? allProducts[8]['images'][1] : ""} alt="" />
          <div>
            <p className='promotionMessage'>We have the best products</p>
            <p className='promotionTitle'>{allProducts[8]['title']}</p>
            <p className='promotionTitlePrice'>Starting at</p>
            <p className='promotionPrice'>{allProducts[8]['price']}$</p>
          </div>
        </div>

    </section>

    <section className='main'>
        <Banner/>
        <Categories/>
        <Products/>
        <NavBar navBarChange={navBarChange} navBarActive={navBarActive}/>
    </section>
    <Footer/>
    </section>
  )
}