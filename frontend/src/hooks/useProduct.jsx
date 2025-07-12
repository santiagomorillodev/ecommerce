import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../context/FilterContext"
export function useProduct ()  {
    const [product, setProduct] = useState([])
    const {categories} = useContext(FilterContext)
    useEffect(() => {
        if (!categories || categories.length === 0) return
        async function fetchAllClothes(){
            const request = categories.map(category =>(
                fetch(`https://dummyjson.com/products/category/${category}`)
                .then(res => res.json())
            ))

            const responses = await Promise.all(request)
            const allProducts = responses.flatMap(res => res.products)
            
            setProduct(allProducts)
        }
      fetchAllClothes()
      
    }, [categories])


    return {product}
}
