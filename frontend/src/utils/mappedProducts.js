export function mappedProducts(products = []) {
  return products.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    reviews: product.reviews,
    images: product.images,
    mainImage: product.thumbnail || product.images?.[0],
  }))}