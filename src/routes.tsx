import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizza'
import RefrigerantesPage from './pages/Main/Refrigerantes'
import IcecreamPage from './pages/Main/icecream'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='food' element={<MainPage />}>
        <Route path='food/burguers' element={<BurguersPage />} />
        <Route path='food/pizzas' element={<PizzasPage />} />
        <Route path='food/drinks' element={<RefrigerantesPage />} />
        <Route path='food/icecreams' element={<IcecreamPage />} />
      </Route>
    </Routes>
  )
}
