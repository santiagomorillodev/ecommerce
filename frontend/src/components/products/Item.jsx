import { Link } from 'react-router-dom'
import './Item.css'

export function Item ({id, title, rating, price, image, description}) {
  const titleProduct = title.split(' ').slice(-2).join(' ')
  return (
    <>
    <Link to={`product/${id}`} key={id} className="item">
      <img src={image} className='pendientesImg'/>
      <section>
        <div className='itemInfo'>
          <h3 className='pendienteTitle'>{titleProduct}</h3>
          <span>Rating {rating}⭐</span>
          <p className='itemDescription'>{description}</p>
          <span>Price ${price}</span>
        </div>
      </section>
    </Link>
    </>
  )
}
