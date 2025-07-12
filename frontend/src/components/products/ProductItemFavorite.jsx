import './ProductItemFavorite.css'

export function ProductItemFavorite ({id, title, rating, price, image}) {
  const titleProduct = title.split(' ').slice(-2).join(' ')
  return (
    <section className="itemFavoriteContainer">
        <img src={image} className='itemFavoriteImg'/>
        <section className='itemFavoriteInfo'>
          <section className='itemFavoriteInformation'>
            <h3 className="itemFavoriteTitle">{titleProduct}</h3>
            <span className="itemFavoriteRating">{rating.rate}⭐</span>
          </section>
          <span className="itemFavoritePrice">${price}</span>     
          <button>Buy Now</button>       
        </section>
    </section>
  )
}
