import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FiltersProvider ({children}){
    const [category, setCategory] = useState({
        category: 'all'
    })

    const categories = [
        'all',
        'mens-shirts', 
        'mens-shoes', 
        'womens-dresses',
        'womens-shoes'    
    ]

    const [filters, setFilters] = useState({categories: 0});
    console.log(filters)

    return(
        <FilterContext.Provider value={{categories, category, setCategory, filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    )
}