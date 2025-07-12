import { useContext } from "react";
import {FilterContext} from '../context/FilterContext.jsx'

export function useFilters (){
  const {categories, filters, setFilters} = useContext(FilterContext)
  const currentCategory = (categories?.[filters.categories] ?? '').toLocaleLowerCase()

  return {categories, currentCategory, filters,  setFilters}
}