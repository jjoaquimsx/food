import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Button, Nav } from './styles'
import { ReactComponent as BurguerIcon } from './../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from './../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from './../../assets/soda.svg'
import { ReactComponent as IceCream } from './../../assets/ice-cream.svg'
import MenuImg from './../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setmenuOpen] = useState(false)
  const handleToggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <Button type='button' onClick={handleToggleMenu} className='button'>
        <img src={MenuImg} alt='Abrir e feixar o menu' />
      </Button>
      <Nav>
        <ul>
          <li>
            <NavLink to='food/burguers'>
              <BurguerIcon />
              <span>Hamburgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='food/pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='food/drinks'>
              <SodaIcon />
              <span>Refrigerantes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='food/icecreams'>
              <IceCream />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}

export default Sidebar
