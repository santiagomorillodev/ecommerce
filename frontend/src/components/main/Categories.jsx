import './Categories.css'
import { useFilters } from '../../hooks/useFilters.jsx'

export function Categories() {
  const {categories, setFilters, filters} = useFilters()

  const handleSelect = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    setFilters({categories: e.target.value})
  }
  
  return (
    <section className='sectionCategories'>
    <h3>Category: </h3>
    <select className='categories' onChange={(e)=> handleSelect(e)}>
        {categories.map((name, index) => (
          <option 
            key={index}
            className={filters.categories === index ? 'categoryItem categoryItemActivate' : 'categoryItem'}
            value={index}
            onClick={() => console.log(index)}
          >
            {name.split(' ')[0]}
          </option>
        ))}
    </select>
    </section>
  )
}
