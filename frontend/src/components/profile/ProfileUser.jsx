import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { Item } from '../products/Item.jsx'
import {Footer} from '../main/Footer.jsx'
import './ProfileUser.css'

export function ProfileUser ()  {
  const {allProducts} = useContext(ProductsContext)

  return (
    <>
    <section className='sectionProfile'>

      <div>

        <section className="profileHeader">
          <Link to={'/'}><i className='bxr  bx-arrow-left-stroke headerIcon'></i></Link>
            
          <i className='bxr  bx-pencil-square headerIcon'  ></i> 
        </section>

      <section className='profileUserInformation'>
      <img className='profileImageUser' src="data:image/jpeg;base64,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" alt="image user" />
        <p className="profileUsername">Agustin</p>
        <p className="profileCreateAt">Create at: <span>25/12/2000</span></p>
      </section>

      </div>



      <h2 className='purchasedProductsTitle'>Purchased products</h2>

      <section className="profileInfoContainer">
        <section className="pendientes">
          {
            allProducts.slice(3, 6).map((product) => (
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
        </section>

        <section className="userInformation">
          <ul>
            <li>
              <p className="liTitle">User</p>
              <p className="liInfo">agustinunaplay8</p>
            </li>
            <li>
              <p className="liTitle">Email</p>
              <p className="liInfo">agustinunaplay@gmail.com</p>
            </li>
            <li>
              <p className="liTitle">BirtHday</p>
              <p className="liInfo">25/12/80</p>
            </li>
            <li>
              <p className="liTitle">Gender</p>
              <p className="liInfo">Male</p>
            </li>
            <li>
              <p className="liTitle">Rol</p>
              <p className="liInfo">User</p>
            </li>
            <li>
              <p className="liTitle">Created at</p>
              <p className="liInfo">01/02/2020</p>
            </li>
          </ul>
          <div>
            <h3>Ecommerce</h3>
            <div>
              <p className="liTitle">Contact</p>
              <p className="liInfo">santiagomorillodev@gmail.com</p>
            </div>
          </div>
        </section>

      </section>
      <Footer/>
    </section>
    </>
  )
}
