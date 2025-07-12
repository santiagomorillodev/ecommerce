import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/main/Main.jsx'
import { FiltersProvider } from './context/FilterContext.jsx'
import { ProductDetail } from './components/products/ProductDetail.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { ProfileUser } from './components/profile/ProfileUser.jsx'
import { Cart } from './components/cart/Cart.jsx'


function App() {

  return (
    <FiltersProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='profile' element={<ProfileUser/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </FiltersProvider>
  )
}

export default App
