import { useRef } from 'react'
import { useFilters } from '../../hooks/useFilters'

export function SearchBar() {

  const {setFilters} = useFilters()
  const inputRef = useRef()
  const handleOnchange = (event) =>{
    if(event.key == 'Enter'){
      event.preventDefault()
      setFilters(prevState =>({
        ...prevState,
        search:inputRef.current.value
      }))
    }
  }
  return (
      <section className="searchBar">
        <span><i className='bx  bx-search icon-search'></i></span>
        <input onChange={handleOnchange} ref={inputRef} type="text" placeholder='Search coffee'/>
      </section>
  )
}