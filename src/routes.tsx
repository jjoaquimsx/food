import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizza'
import RefrigerantesPage from './pages/Main/Refrigerantes'
import IcecreamPage from './pages/Main/icecream'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurguersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<RefrigerantesPage />} />
        <Route path='icecreams' element={< IcecreamPage/> }/>
      </Route>
    </Routes>
  )
}
