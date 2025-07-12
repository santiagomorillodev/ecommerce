import { createContext } from "react";
import { mappedProducts } from "../utils/mappedProducts.js";
import { useProduct } from "../hooks/useProduct"

export const ProductsContext = createContext()

export function ProductsProvider ({children}){
    const {product} = useProduct()
    if (!product || product.length === 0) {
        return <p style={{ textAlign: 'center' }}>Cargando productos...</p>
    }
    const allProducts = mappedProducts(product)
    
    return(
        <ProductsContext.Provider value={{allProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}