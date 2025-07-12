import { Link } from 'react-router-dom'
import './NavBar.css'
export function NavBar({navBarChange, navBarActive}) {
  return (
    <section className={navBarActive ? 'navBarContainer' : 'navBarContainer closeNavBar'}>
      <button onClick={()=> navBarChange(navBarActive)} className='closeNavBar desktopOnly'><i className='bxr  bxs-menu-select'  ></i> </button>
        <Link to={'/'} className='navBarItem'>
          <i className='bxr  bxs-home-alt icon-navbar home'></i> 
          <h2 className='desktopOnly'>Home</h2>
        </Link >

        <Link to={'/cart'}  href='#'className='navBarItem'>
          <i className='bxr  bx-cart icon-navbar'  ></i>
          <h2 className='desktopOnly'>Cart</h2>
        </Link >

        <Link to={'/profile'}  href='#'className='navBarItem'>
          <i className='bxr  bx-user-circle icon-navbar'  ></i> 
          <h2 className='desktopOnly'>Profile</h2>
        </Link>
    </section>
  )
}