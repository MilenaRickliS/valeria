import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Sobre from '../pages/Sobre';
import Produto from '../pages/Produto'


function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sobre" element={ <Sobre/> } />

      <Route path="/produto/:id" element={ <Produto/> } />
    
    </Routes>
  )
}

export default RoutesApp;