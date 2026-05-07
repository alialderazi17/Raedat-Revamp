import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='/partners'>Partners</NavLink>
        <NavLink to='/newsletter'>Newsletters</NavLink>
      </div>
    </nav>
  )
}

export default Nav
